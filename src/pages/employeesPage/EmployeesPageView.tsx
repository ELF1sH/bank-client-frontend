import React from 'react';

import EmployeesTable from './employeesTable/EmployeesTableProvider';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from '../../components/ui/atoms/icons/PlusIcon';
import Button from '../../components/ui/atoms/button/Button';
import CreateEmployeeModal from './createEmployeeModal/CreateEmployeeModalProvider';

interface ClientsPageViewProps {
  isModalOpened: boolean;
  setIsModalOpened: (val: boolean) => void;
}

const EmployeesPageView: React.FC<ClientsPageViewProps> = ({ isModalOpened, setIsModalOpened }) => (
  <>
    <PageHeader header="Employees">
      <Button type="text" icon={<PlusIcon />} onClick={() => setIsModalOpened(true)}>Create new employee</Button>
    </PageHeader>

    <EmployeesTable />

    <CreateEmployeeModal
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  </>
);

export default EmployeesPageView;
