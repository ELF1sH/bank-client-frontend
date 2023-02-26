import React, { useContext } from 'react';

import TariffsGrid from './tariffsGrid/TariffsGridProvider';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from '../../components/ui/atoms/icons/PlusIcon';
import Button from '../../components/ui/atoms/button/Button';

interface TariffsPageViewProps {
  setIsModalOpened: (val: boolean) => void;
}

const TariffsPageView: React.FC<TariffsPageViewProps> = ({
  setIsModalOpened,
}) => (
  <>
    <PageHeader header="Credit tariffs">
      <Button type="text" icon={<PlusIcon />} onClick={() => setIsModalOpened(true)}>Create new credit tariff</Button>
    </PageHeader>

    <TariffsGrid />
  </>
);

export default TariffsPageView;
