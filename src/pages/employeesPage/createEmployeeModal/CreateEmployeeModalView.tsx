import React from 'react';
import { Form, FormInstance, Modal } from 'antd';

import { FieldData } from '../../../utils/form/fieldData';
import Input from '../../../components/ui/atoms/input/Input';
import { FormErrors } from '../../../utils/form/useFormError';
import { SelectOption } from '../../../components/ui/atoms/input/types';
import SelectStyled from '../../../components/ui/atoms/input/Select';

interface CreateEmployeeViewProps {
  form: FormInstance;
  isModalOpened: boolean;
  fields: FieldData[];
  selectOptions: SelectOption[];
  onChange: (fields: FieldData[]) => void;
  handleOk: () => void;
  handleCancel: () => void;
  getValidateMessages: () => FormErrors;
}

const CreateEmployeeModalView: React.FC<CreateEmployeeViewProps> = ({
  form,
  isModalOpened,
  fields,
  selectOptions,
  onChange,
  handleOk,
  handleCancel,
  getValidateMessages,
}) => (
  <Modal title="Create new employee" open={isModalOpened} onOk={handleOk} onCancel={handleCancel}>
    <Form
      form={form}
      layout="vertical"
      fields={fields}
      onFieldsChange={(_, allFields) => { onChange(allFields); }}
      validateMessages={getValidateMessages()}
    >
      <Form.Item
        name="firstName"
        label="First name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="List name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="middleName"
        label="Middle name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="jobPosition"
        label="Job Position"
        rules={[{ required: true }]}
      >
        <SelectStyled
          options={selectOptions}
        />
      </Form.Item>
    </Form>
  </Modal>
);

export default CreateEmployeeModalView;
