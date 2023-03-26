import React from 'react';
import { Form } from 'antd';

import Input from '../../../../components/ui/atoms/input/Input';
import InputPassword from '../../../../components/ui/atoms/input/InputPassword';
import { FormItem, LoginButton } from './styled';
import { FormErrors } from '../../../../utils/form/useFormError';

interface AuthFormViewProps {
  isLoading: boolean;
  onSubmit: (username: string, password: string) => Promise<void>;
  getValidateMessages: () => FormErrors;
}

const AuthFormView: React.FC<AuthFormViewProps> = ({
  isLoading,
  onSubmit,
  getValidateMessages,
}) => (
  <Form
    onFinish={(values) => onSubmit(values.Username, values.Password)}
    layout="vertical"
    validateMessages={getValidateMessages()}
  >
    <LoginButton type="primary" htmlType="submit" loading={isLoading} role="link" href="http://localhost:3002?redirect=client">
      Войти
    </LoginButton>
  </Form>
);

export default AuthFormView;
