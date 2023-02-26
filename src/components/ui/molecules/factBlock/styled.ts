import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

export const FactBlockWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    padding: 10px;
    background-color: ${theme.colorPrimaryBg};
    border-radius: 12px;
    color: ${theme.colorPrimary};
    width: 375px;
    height: fit-content;
    
    display:flex;
    align-items:center;
    gap: 10px;
    
    svg {
      flex-shrink: 0;
    }
  `};
`;

export const FactsWrapper = styled.div`
  p {
    margin-bottom: 7px;
  }
  p:last-child {
    margin: 0;
  }
`;
