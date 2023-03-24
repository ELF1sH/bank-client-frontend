import React, { useEffect, useState } from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Tag, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import PageHeader from '../../components/ui/molecules/pageHeader/PageHeader';
import Button from '../../components/ui/atoms/button/Button';
import BackIcon from '../../components/ui/atoms/icons/BackIcon';
import { ICreditAccount } from '../../domain/entities/credit/creditAccount';
import { useNotifications } from '../../modules/notification/useNotifications';
import { creditRepository } from '../../domain/repositories/api/CreditRepository';
import { GetCreditAccountUseCase } from '../../domain/useCases/credits/GetCreditAccountUseCase';
import { Loader } from '../../components/ui/atoms/spinner/styled';

const { Text } = Typography;

const CreditAccountPage: React.FC = () => {
  const { onError, onSuccess } = useNotifications();
  const getCreditAccountUseCase = new GetCreditAccountUseCase(
    creditRepository.getCreditAccount,
    onError,
    onSuccess,
  );

  const { id } = useParams();
  const navigate = useNavigate();

  const [creditAccount, setCreditAccount] = useState<ICreditAccount>();

  useEffect(() => {
    getCreditAccountUseCase.fetch({ id: id! })
      .then((response) => {
        if (response) {
          setCreditAccount(response);
        }
      });
  }, []);

  if (!creditAccount) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader header={`Credit account №${creditAccount.id}`}>
        <Button icon={<BackIcon />} onClick={() => navigate('/profile')}>Back to the client page</Button>
      </PageHeader>

      <Paragraph>
        <Text strong>Current balance:</Text>
        &nbsp;
        <Text keyboard>{creditAccount.balance}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Debt:</Text>
        &nbsp;
        <Text keyboard>{creditAccount.debt}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Account number:</Text>
        &nbsp;
        <Text keyboard>{creditAccount.accountNumber}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Percent:</Text>
        &nbsp;
        <Text keyboard>{creditAccount.percent}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Tariff id:</Text>
        &nbsp;
        <Text keyboard>{creditAccount.tariffId}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Is closed:</Text>
        &nbsp;
        <Text keyboard>{creditAccount.isClosed ? 'yes' : 'no'}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Owner id:</Text>
        &nbsp;
        <Text keyboard>{creditAccount.ownerId}</Text>
      </Paragraph>

      {
        creditAccount.isClosed ? <Tag color="red">Closed</Tag> : null
      }
    </>
  );
};

export default CreditAccountPage;
