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
    <FormItem
      name="Username"
      rules={[{ required: true }]}
    >
      <Input placeholder="Username" />
    </FormItem>

    <FormItem
      name="Password"
      rules={[{ required: true }]}
    >
      <InputPassword placeholder="Password" />
    </FormItem>

    <LoginButton type="primary" htmlType="submit" loading={isLoading}>Login</LoginButton>
  </Form>
);

export default AuthFormView;
