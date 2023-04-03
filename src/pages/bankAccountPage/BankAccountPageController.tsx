import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

import BankAccountPageView, { BankAccountPageViewProps } from './BankAccountPageView';
import { BankAccountPageViewModel } from './BankAccountPageViewModel';
import WithLoader from '../../components/ui/molecules/withLoader/WithLoader';
import { IOperation } from '../../domain/entities/bankAccounts/operation';

const BankAccountPageViewWithLoader = WithLoader<BankAccountPageViewProps>(
  BankAccountPageView,
  true,
);

interface BankAccountPageControllerProps {
  viewModel: BankAccountPageViewModel;
}

const BankAccountPageController: React.FC<BankAccountPageControllerProps> = ({
  viewModel,
}) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [operations, setOperations] = useState<IOperation[]>([]);

  useEffect(() => {
    viewModel.init(id!);
  }, [viewModel, id]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Websocket Соединение установлено.');

      ws.send(JSON.stringify({
        msg_type: 'operations-all',
        receiverId: id,
      }));
    };

    ws.onmessage = (e) => {
      console.info('Websocket message');
      console.log(e.data);

      const data = JSON.parse(e.data);

      if (Array.isArray(data)) {
        setOperations(data as IOperation[]);
      } else {
        setOperations((oldOperations) => [
          ...oldOperations,
          data as IOperation,
        ]);
      }
    };
  }, []);

  const backToTheClientPage = () => {
    navigate(-1);
  };

  return (
    <BankAccountPageViewWithLoader
      isLoading={viewModel.isLoading}
      bankAccount={viewModel.bankAccount!}
      operationsHistory={operations}
      withdrawSum={viewModel.withdrawSum}
      refillSum={viewModel.refillSum}
      updateWithdrawSum={viewModel.updateWithdrawSum}
      updateRefillSum={viewModel.updateRefillSum}
      backToTheClientPage={backToTheClientPage}
      closeBankAccount={() => viewModel.closeBankAccount()}
      withdraw={() => viewModel.withdraw()}
      refill={() => viewModel.refill()}
    />
  );
};

export default observer(BankAccountPageController);
