import styled from 'styled-components';
import { Button, Typography } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { EMPTY_MESSAGES } from '../../entity/shared/constants';
import { BusinessAttributeAssociation, EntityType, SubResourceType } from '../../../types.generated';
import EditBusinessAttributeModal from './AddBusinessAttributeModal';
import StyledAttribute from './StyledAttribute';

type Props = {
    businessAttribute?: BusinessAttributeAssociation | null;
    canRemove?: boolean;
    canAddAttribute?: boolean;
    showEmptyMessage?: boolean;
    buttonProps?: Record<string, unknown>;
    onOpenModal?: () => void;
    maxShow?: number;
    entityUrn?: string;
    entityType?: EntityType;
    entitySubresource?: string;
    highlightText?: string;
    fontSize?: number;
    refetch?: () => Promise<any>;
    readOnly?: boolean;
};

const NoElementButton = styled(Button)`
    :not(:last-child) {
        margin-right: 8px;
    }
`;

export default function BusinessAttributeGroup({
    businessAttribute,
    canAddAttribute,
    showEmptyMessage,
    buttonProps,
    onOpenModal,
    entityUrn,
    entityType,
    entitySubresource,
    refetch,
    readOnly,
    canRemove,
    highlightText,
    fontSize,
}: Props) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [addModalType, setAddModalType] = useState(EntityType.BusinessAttribute);
    const businessAttributeEmpty = !businessAttribute?.associatedUrn?.length;
    return (
        <>
            {!businessAttributeEmpty && (
                    <Typography.Paragraph type="secondary">Business Attribute Details</Typography.Paragraph>
                ) && (
                    <StyledAttribute
                        businessAttribute={businessAttribute || undefined}
                        entityUrn={entityUrn}
                        entitySubresource={entitySubresource}
                        canRemove={canRemove}
                        readOnly={readOnly}
                        highlightText={highlightText}
                        onOpenModal={onOpenModal}
                        refetch={refetch}
                        fontSize={fontSize}
                    />
                )}
            {showEmptyMessage && canAddAttribute && businessAttributeEmpty && (
                <Typography.Paragraph type="secondary">
                    {EMPTY_MESSAGES.businessAttributes.title}. {EMPTY_MESSAGES.businessAttributes.description}
                </Typography.Paragraph>
            )}
            {canAddAttribute && !readOnly && businessAttributeEmpty && (
                <NoElementButton
                    type={showEmptyMessage && businessAttributeEmpty ? 'default' : 'text'}
                    onClick={() => {
                        setAddModalType(EntityType.BusinessAttribute);
                        setShowAddModal(true);
                    }}
                    {...buttonProps}
                >
                    <PlusOutlined />
                    <span>Add Attribute</span>
                </NoElementButton>
            )}
            {showAddModal && !!entityUrn && !!entityType && (
                <EditBusinessAttributeModal
                    type={addModalType}
                    visible
                    onCloseModal={() => {
                        onOpenModal?.();
                        setShowAddModal(false);
                        refetch?.();
                    }}
                    resources={[
                        {
                            resourceUrn: entityUrn,
                            subResource: entitySubresource,
                            subResourceType: entitySubresource ? SubResourceType.DatasetField : null,
                        },
                    ]}
                />
            )}
        </>
    );
}
