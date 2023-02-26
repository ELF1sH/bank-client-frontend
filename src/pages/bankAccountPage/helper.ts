import { OperationType } from '../../domain/entities/bankAccounts/operation';

export const getColorByOperationType = (type: OperationType) => {
  switch (type) {
    case OperationType.Incoming:
      return 'green';
    case OperationType.Withdrawal:
      return 'red';
    case OperationType.CreditIncoming:
      return 'yellow';
    case OperationType.CreditRepayment:
      return 'orange';
    default:
      return 'Неизвестная операция';
  }
};
