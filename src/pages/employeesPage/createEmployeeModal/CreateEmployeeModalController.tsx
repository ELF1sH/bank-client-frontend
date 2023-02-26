import React from 'react';
import { useForm } from 'antd/es/form/Form';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import CreateEmployeeModalView from './CreateEmployeeModalView';
import { useFormError } from '../../../utils/form/useFormError';
import { CreateEmployeeModalViewModel } from './CreateEmployeeModalViewModel';
import { FieldData } from '../../../utils/form/fieldData';
import { JobPosition } from '../../../domain/entities/users/employee';
import { SelectOption } from '../../../components/ui/atoms/input/types';

interface CreateEmployeeModalControllerProps {
  viewModel: CreateEmployeeModalViewModel;
  isModalOpened: boolean;
  setIsModalOpened: (value: boolean) => void;
}

const CreateEmployeeModalController: React.FC<CreateEmployeeModalControllerProps> = ({
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
      .then(() => viewModel.createEmployee())
      .then((employee) => {
        if (employee) {
          navigate(employee.id);
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
    <CreateEmployeeModalView
      form={form}
      isModalOpened={isModalOpened}
      fields={viewModel.fieldsData}
      selectOptions={getSelectOptions()}
      onChange={onChange}
      handleOk={handleOk}
      handleCancel={handleCancel}
      getValidateMessages={getValidateMessages}
    />
  );
};

const getSelectOptions = (): SelectOption[] => {
  const keys = Object.keys(JobPosition).filter((key) => Number.isNaN(Number(key)));

  const values = Object.keys(JobPosition).filter((value) => !Number.isNaN(Number(value)));

  return values.reduce((acc: SelectOption[], curValue, curIndex) => [
    ...acc,
    { value: curValue, label: keys[curIndex] },
  ], []);
};

export default observer(CreateEmployeeModalController);
