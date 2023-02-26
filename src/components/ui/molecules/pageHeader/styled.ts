import styled from 'styled-components';
import Title from 'antd/es/typography/Title';

export const PageHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 50px;
`;

export const TitleStyled = styled(Title)`
  && {
    margin-bottom: 0;
    flex-grow: 1;
  }
`;

export const RightSideWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
