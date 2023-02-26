import React from 'react';
import { observer } from 'mobx-react-lite';

import { AuthViewModel } from './AuthViewModel';
import AuthFormView from './AuthFormView';
import { useFormError } from '../../../../utils/form/useFormError';

interface AuthFormControllerProps {
  viewModel: AuthViewModel;
}

const AuthFormController: React.FC<AuthFormControllerProps> = ({ viewModel }) => {
  const { getValidateMessages } = useFormError();

  const onSubmit = async (username: string, password: string) => {
    await viewModel.login(username, password);
  };

  return (
    <AuthFormView
      isLoading={viewModel.isLoading}
      onSubmit={onSubmit}
      getValidateMessages={getValidateMessages}
    />
  );
};

export default observer(AuthFormController);
