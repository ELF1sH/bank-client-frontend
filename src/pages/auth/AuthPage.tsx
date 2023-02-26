import React from 'react';

import {
  AuthFormContainer, AuthPageWrapper, LogoStyled, SwitchesContainer,
} from './styled';
import AuthForm from './components/authForm/AuthFormProvider';
import ThemeTogglerController from '../../components/ui/molecules/themeToggler/ThemeTogglerProvider';

const AuthPage: React.FC = () => (
  <AuthPageWrapper>
    <AuthFormContainer>
      <LogoStyled />
      <AuthForm />
      <SwitchesContainer>
        <ThemeTogglerController />
      </SwitchesContainer>
    </AuthFormContainer>
  </AuthPageWrapper>
);

export default AuthPage;
