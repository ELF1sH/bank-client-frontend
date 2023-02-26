import React from 'react';

import { PageHeaderWrapper, RightSideWrapper, TitleStyled } from './styled';
import Button from '../../atoms/button/Button';
import SaveIcon from '../../atoms/icons/SaveIcon';

interface PageHeaderProps {
  header: string;
  editable?: boolean;
  wasEdited?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onChangeTitle?: (title: string) => void;
  onSaveChanges?: Function;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  header,
  editable = false,
  wasEdited = false,
  isLoading,
  children,
  onChangeTitle,
  onSaveChanges,
}) => (
  <PageHeaderWrapper>
    <TitleStyled
      editable={editable && {
        triggerType: ['text', 'icon'],
        onChange: onChangeTitle,
      }}
    >
      {header}
    </TitleStyled>

    <RightSideWrapper>
      {editable && wasEdited && (
      <>
        <Button
          type="primary"
          icon={<SaveIcon />}
          onClick={() => onSaveChanges?.()}
          loading={isLoading}
        >
          Save changes
        </Button>
        {/* <Button type="text" icon={<UndoIcon size={24} color={token.colorPrimary} />} /> */}
      </>
      )}
      {children}
    </RightSideWrapper>
  </PageHeaderWrapper>
);

export default PageHeader;
