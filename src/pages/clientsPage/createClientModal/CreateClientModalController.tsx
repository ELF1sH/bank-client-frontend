import React from 'react';
import { useForm } from 'antd/es/form/Form';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import CreateClientModalView from './CreateClientModalView';
import { useFormError } from '../../../utils/form/useFormError';
import { CreateClientModalViewModel } from './CreateClientModalViewModel';
import { FieldData } from '../../../utils/form/fieldData';

interface CreateClientModalControllerProps {
  viewModel: CreateClientModalViewModel;
  isModalOpened: boolean;
  setIsModalOpened: (value: boolean) => void;
}

const CreateClientModalController: React.FC<CreateClientModalControllerProps> = ({
  viewModel,
  isModalOpened,
  setIsModalOpened,
}) => {
  const [form] = useForm();

  const { getValidateMessages } = useFormError();

  const navigate = useNavigate();

  const handleOk = () => {
    form
      .validateFields()
      .then(() => viewModel.createClient())
      .then((client) => {
        if (client) {
          navigate(client.id);
        }

        setIsModalOpened(false);
      })
      .catch(((e) => {}));
  };

  const handleCancel = () => {
    setIsModalOpened(false);
  };

  const onChange = (fieldsData: FieldData[]) => {
    viewModel.setFieldsData(fieldsData);
  };

  return (
    <CreateClientModalView
      form={form}
      isModalOpened={isModalOpened}
      fields={viewModel.fieldsData}
      onChange={onChange}
      handleOk={handleOk}
      handleCancel={handleCancel}
      getValidateMessages={getValidateMessages}
    />
  );
};

export default observer(CreateClientModalController);
