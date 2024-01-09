package com.linkedin.datahub.graphql.types.businessattribute.mappers;

import com.linkedin.common.urn.Urn;
import com.linkedin.datahub.graphql.generated.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Nonnull;

public class BusinessAttributesMapper {

    private static final Logger _logger = LoggerFactory.getLogger(BusinessAttributesMapper.class.getName());
    public static final BusinessAttributesMapper INSTANCE = new BusinessAttributesMapper();

    public static BusinessAttributes map(
            @Nonnull final com.linkedin.businessattribute.BusinessAttributeAssociation businessAttribute,
            @Nonnull final Urn entityUrn
    ) {
        _logger.info("inside mapper");
        return INSTANCE.apply(businessAttribute, entityUrn);
    }

    private BusinessAttributes apply(@Nonnull com.linkedin.businessattribute.BusinessAttributeAssociation businessAttributes, @Nonnull Urn entityUrn) {
        _logger.info("before try block::{}", businessAttributes.getDestinationUrn());
        final BusinessAttributeAssociation businessAttributeAssociation = new BusinessAttributeAssociation();
        final BusinessAttributes result = new BusinessAttributes();
        final BusinessAttribute businessAttribute = new BusinessAttribute();
        businessAttribute.setUrn(businessAttributes.getDestinationUrn().toString());
        businessAttribute.setType(EntityType.BUSINESS_ATTRIBUTE);

        businessAttributeAssociation.setBusinessAttribute(businessAttribute);

        businessAttributeAssociation.setAssociatedUrn(entityUrn.toString());
        result.setBusinessAttribute(businessAttributeAssociation);
        return result;
    }

}
