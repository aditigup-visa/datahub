package com.linkedin.metadata.aspect.utils;

import static org.mockito.Mockito.*;

import com.linkedin.common.AuditStamp;
import com.linkedin.common.FabricType;
import com.linkedin.common.urn.DataPlatformUrn;
import com.linkedin.common.urn.DatasetUrn;
import com.linkedin.events.metadata.ChangeType;
import com.linkedin.metadata.EbeanTestUtils;
import com.linkedin.metadata.aspect.batch.MCPBatchItem;
import com.linkedin.metadata.aspect.patch.builder.DatasetPropertiesPatchBuilder;
import com.linkedin.metadata.config.EbeanConfiguration;
import com.linkedin.metadata.config.PreProcessHooks;
import com.linkedin.metadata.entity.EntityServiceImpl;
import com.linkedin.metadata.entity.TestEntityRegistry;
import com.linkedin.metadata.entity.ebean.EbeanAspectDao;
import com.linkedin.metadata.entity.ebean.batch.AspectsBatchImpl;
import com.linkedin.metadata.event.EventProducer;
import com.linkedin.metadata.models.registry.ConfigEntityRegistry;
import com.linkedin.metadata.models.registry.EntityRegistry;
import com.linkedin.metadata.models.registry.EntityRegistryException;
import com.linkedin.metadata.models.registry.MergedEntityRegistry;
import com.linkedin.metadata.snapshot.Snapshot;
import com.linkedin.mxe.MetadataChangeProposal;
import io.ebean.Database;
import java.util.List;
import java.util.stream.Collectors;
import org.testng.Assert;
import org.testng.annotations.Test;

public class DefaultAspectsUtilTest {

  protected final EntityRegistry _snapshotEntityRegistry = new TestEntityRegistry();
  protected final EntityRegistry _configEntityRegistry =
      new ConfigEntityRegistry(
          Snapshot.class.getClassLoader().getResourceAsStream("entity-registry.yml"));
  protected final EntityRegistry _testEntityRegistry =
      new MergedEntityRegistry(_snapshotEntityRegistry).apply(_configEntityRegistry);

  public DefaultAspectsUtilTest() throws EntityRegistryException {}

  @Test
  public void testAdditionalChanges() {
    Database server = EbeanTestUtils.createTestServer(DefaultAspectsUtilTest.class.getSimpleName());
    EbeanAspectDao aspectDao = new EbeanAspectDao(server, EbeanConfiguration.testDefault);
    aspectDao.setConnectionValidated(true);
    EventProducer mockProducer = mock(EventProducer.class);
    PreProcessHooks preProcessHooks = new PreProcessHooks();
    preProcessHooks.setUiEnabled(true);
    EntityServiceImpl entityServiceImpl =
        new EntityServiceImpl(
            aspectDao, mockProducer, _testEntityRegistry, true, null, preProcessHooks, false);

    MetadataChangeProposal proposal1 =
        new DatasetPropertiesPatchBuilder()
            .urn(new DatasetUrn(new DataPlatformUrn("platform"), "name", FabricType.PROD))
            .setDescription("something")
            .setName("name")
            .addCustomProperty("prop1", "propVal1")
            .addCustomProperty("prop2", "propVal2")
            .build();

    Assert.assertEquals(proposal1.getChangeType(), ChangeType.PATCH);

    List<MetadataChangeProposal> proposalList =
        DefaultAspectsUtil.getAdditionalChanges(
                AspectsBatchImpl.builder()
                    .mcps(List.of(proposal1), new AuditStamp(), entityServiceImpl)
                    .build(),
                entityServiceImpl,
                false)
            .stream()
            .map(MCPBatchItem::getMetadataChangeProposal)
            .collect(Collectors.toList());
    // proposals for key aspect, browsePath, browsePathV2, dataPlatformInstance
    Assert.assertEquals(proposalList.size(), 4);
    Assert.assertEquals(proposalList.get(0).getChangeType(), ChangeType.UPSERT);
  }
}
