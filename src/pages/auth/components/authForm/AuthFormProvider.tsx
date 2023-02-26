import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthViewModel } from './AuthViewModel';
import { LoginUseCase } from '../../../../domain/useCases/auth/LoginUseCase';
import { authRepository } from '../../../../domain/repositories/api/AuthRepository';
import { tokenRepository } from '../../../../domain/repositories/other/TokenRepository';
import AuthFormController from './AuthFormController';
import { useNotifications } from '../../../../modules/notification/useNotifications';

const AuthFormProvider: React.FC = () => {
  const navigate = useNavigate();

  const { onError } = useNotifications();

  const loginUseCase = new LoginUseCase(
    authRepository,
    tokenRepository,
    onError,
    navigate,
  );

  const viewModel = new AuthViewModel(loginUseCase);

  return (
    <>
      <AuthFormController viewModel={viewModel} />
    </>
  );
};

export default AuthFormProvider;
