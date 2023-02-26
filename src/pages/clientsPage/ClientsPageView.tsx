import React from 'react';

import ClientsTable from './clientsTable/ClientsTableProvider';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from '../../components/ui/atoms/icons/PlusIcon';
import Button from '../../components/ui/atoms/button/Button';
import CreateClientModal from './createClientModal/CreateClientModalProvider';

interface ClientsPageViewProps {
  isModalOpened: boolean;
  setIsModalOpened: (val: boolean) => void;
}

const ClientsPageView: React.FC<ClientsPageViewProps> = ({ isModalOpened, setIsModalOpened }) => (
  <>
    <PageHeader header="Clients">
      <Button type="text" icon={<PlusIcon />} onClick={() => setIsModalOpened(true)}>Create new client</Button>
    </PageHeader>

    <ClientsTable />

    <CreateClientModal
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  </>
);

export default ClientsPageView;
