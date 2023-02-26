import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 208px;
  min-height: 36px;
  overflow: hidden;
`;

export const InnerWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 100px;
    background-color: ${theme.colorBorderSecondary};
  `}
`;

export const HiddenInput = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
`;

interface OptionBackgroundProps {
  isChecked: boolean;
}

export const OptionBackground = styled.div<OptionBackgroundProps & ThemeProps<DefaultTheme>>`
  ${({ isChecked, theme }) => css`
    display: inline;
    position: absolute;
    top: 4px;
    left: ${isChecked ? '102px' : '4px'};
    width: 102px;
    height: 28px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 25px;
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
    z-index: 1;
    background-color: ${theme.colorPrimary};
  `}
`;

export const OptionIcon = styled.img`
  display: inline;
  max-width: 21px;
`;

interface OptionContentProps {
  pos: 'left' | 'right';
  isChecked: boolean;
}

export const OptionContent = styled.div<OptionContentProps>`
  ${({ pos, isChecked }) => css`
    position: absolute;
    top: 4px;
    left: ${pos === 'right' ? 'auto' : isChecked ? '-124px' : '4px'};
    right: ${pos === 'left' ? 'auto' : isChecked ? '4px' : '-124px'};
    width: 102px;
    height: 28px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 25px;
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
    font-size: 14px;
    color: white;
    z-index: 2;
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 5px;
  `}
`;
