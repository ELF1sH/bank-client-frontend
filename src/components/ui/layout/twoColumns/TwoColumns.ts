import styled from 'styled-components';

export const TwoColumns = styled.div`
  display: flex;
  gap: 10px;

  >div:nth-child(1) {
    flex-grow: 1;
  }

  >div:nth-child(2) {
    flex-shrink: 0;
  }
`;
