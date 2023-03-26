import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthViewModel } from './AuthViewModel';
import AuthFormController from './AuthFormController';
import { useNotifications } from '../../../../modules/notification/useNotifications';

const AuthFormProvider: React.FC = () => {
  const navigate = useNavigate();

  const { onError } = useNotifications();

  const viewModel = new AuthViewModel();

  return (
    <>
      <AuthFormController viewModel={viewModel} />
    </>
  );
};

export default AuthFormProvider;
