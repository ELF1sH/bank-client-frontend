import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

export const Loader = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    border: 3px ${theme.colorText};
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;

    &::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px ${theme.colorPrimary};
      border-style: solid solid dotted;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      animation: rotationBack 1s linear infinite;
      transform-origin: center center;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  `};
`;

interface LoaderWrapperProps {
  isCentered: boolean;
}

export const LoaderWrapper = styled.div<LoaderWrapperProps>`
  ${({ isCentered }) => css`
    display:flex;

    ${isCentered && css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  `}
`;
