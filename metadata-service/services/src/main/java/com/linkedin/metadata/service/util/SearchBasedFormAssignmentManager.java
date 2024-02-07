package com.linkedin.metadata.service.util;

import com.datahub.authentication.Authentication;
import com.google.common.collect.ImmutableList;
import com.linkedin.common.urn.Urn;
import com.linkedin.entity.client.EntityClient;
import com.linkedin.form.DynamicFormAssignment;
import com.linkedin.metadata.Constants;
import com.linkedin.metadata.search.ScrollResult;
import com.linkedin.metadata.search.SearchEntity;
import com.linkedin.metadata.service.FormService;
import com.linkedin.r2.RemoteInvocationException;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SearchBasedFormAssignmentManager {

  private static final ImmutableList<String> ENTITY_TYPES =
      ImmutableList.of(Constants.DATASET_ENTITY_NAME);

  public static void apply(
      DynamicFormAssignment formFilters,
      Urn formUrn,
      int batchFormEntityCount,
      EntityClient entityClient,
      Authentication authentication)
      throws Exception {

    try {
      int totalResults = 0;
      int numResults = 0;
      String scrollId = null;
      FormService formService = new FormService(entityClient, authentication);

      do {

        ScrollResult results =
            entityClient.scrollAcrossEntities(
                ENTITY_TYPES,
                "*",
                formFilters.getFilter(),
                scrollId,
                "5m",
                batchFormEntityCount,
                null,
                authentication);

        if (!results.hasEntities()
            || results.getNumEntities() == 0
            || results.getEntities().isEmpty()) {
          break;
        }

        log.info("Search across entities results: {}.", results);

        if (results.hasEntities()) {
          final List<Urn> entityUrns =
              results.getEntities().stream()
                  .map(SearchEntity::getEntity)
                  .collect(Collectors.toList());

          formService.batchAssignFormToEntities(entityUrns, formUrn);

          if (!entityUrns.isEmpty()) {
            log.info("Batch assign {} entities to form {}.", entityUrns.size(), formUrn);
          }

          numResults = results.getEntities().size();
          totalResults += numResults;
          scrollId = results.getScrollId();

          log.info(
              "Starting batch assign forms, count: {} running total: {}, size: {}",
              batchFormEntityCount,
              totalResults,
              results.getEntities().size());

        } else {
          break;
        }
      } while (scrollId != null);

      log.info("Successfully assigned {} entities to form {}.", totalResults, formUrn);

    } catch (RemoteInvocationException e) {
      log.error("Error while assigning form to entities.", e);
      throw new RuntimeException(e);
    }
  }

  private SearchBasedFormAssignmentManager() {}
}
