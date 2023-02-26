import React, { useContext } from 'react';
import { useForm } from 'antd/es/form/Form';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import CreateTariffModalView from './CreateTariffModalView';
import { useFormError } from '../../../utils/form/useFormError';
import { CreateTariffModalViewModel } from './CreateTariffModalViewModel';
import { FieldData } from '../../../utils/form/fieldData';
import { ModalCreateTariffContext } from '../TariffsPageController';

interface CreateTariffModalControllerProps {
  viewModel: CreateTariffModalViewModel;
}

const CreateTariffModalController: React.FC<CreateTariffModalControllerProps> = ({
  viewModel,
}) => {
  const [form] = useForm();

  const { getValidateMessages } = useFormError();

  const { isModalOpened, setIsModalOpened } = useContext(ModalCreateTariffContext)!;

  const handleOk = () => {
    form
      .validateFields()
      .then(() => {
        setIsModalOpened(false);
        return viewModel.createTariff();
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
    <CreateTariffModalView
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

export default observer(CreateTariffModalController);
