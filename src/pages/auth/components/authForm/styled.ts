import styled from 'styled-components';
import { Form } from 'antd';

import Button from '../../../../components/ui/atoms/button/Button';

export const FormItem = styled(Form.Item)`
  margin-bottom: 35px;
`;

export const LoginButton = styled(Button)`
  && {
    width: 100%;
  }
`;
