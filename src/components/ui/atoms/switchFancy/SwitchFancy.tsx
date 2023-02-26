import React from 'react';

import {
  HiddenInput, InnerWrapper, OptionBackground, OptionContent, OptionIcon, Wrapper,
} from './styled';

interface SwitchFancyProps {
  falseLabel: string,
  trueLabel: string,
  falseIcon?: string,
  trueIcon?: string,
  isChecked?: boolean,
  className?: string,
  setIsChecked?: (isChecked: boolean) => void;
}

const SwitchFancy: React.FC<SwitchFancyProps> = ({
  falseLabel,
  trueLabel,
  falseIcon,
  trueIcon,
  isChecked = false,
  className,
  setIsChecked = () => {},
}) => (
  <Wrapper className={className}>
    <InnerWrapper>
      <HiddenInput
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        type="checkbox"
      />

      <OptionContent pos="left" isChecked={isChecked}>
        {
          falseIcon && <OptionIcon alt="" src={falseIcon} />
        }
        {falseLabel}
      </OptionContent>

      <OptionContent pos="right" isChecked={isChecked}>
        {
          trueIcon && <OptionIcon alt="" src={trueIcon} />
        }
        {trueLabel}
      </OptionContent>

      <OptionBackground isChecked={isChecked} />
    </InnerWrapper>
  </Wrapper>
);

export default SwitchFancy;
