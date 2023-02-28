import React from 'react';

import TariffsGrid from './tariffsGrid/TariffsGridProvider';
import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';

const TariffsPageView: React.FC = () => (
  <>
    <PageHeader header="Credit tariffs" />

    <TariffsGrid />
  </>
);

export default TariffsPageView;
