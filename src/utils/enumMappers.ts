import { OperationType } from '../domain/entities/bankAccounts/operation';
import { JobPosition } from '../domain/entities/users/employee';

export const getOperationType = (type: OperationType) => {
  switch (type) {
    case OperationType.Incoming:
      return 'Пополнение';
    case OperationType.Withdrawal:
      return 'Снятие';
    case OperationType.CreditIncoming:
      return 'Приход кредита';
    case OperationType.CreditRepayment:
      return 'Плата за кредит';
    default:
      return 'Неизвестная операция';
  }
};

export const getJobPosition = (jobPosition: JobPosition) => {
  switch (jobPosition) {
    case JobPosition.Cashier:
      return 'Cashier';
    case JobPosition.Manager:
      return 'Manager';
    case JobPosition.Director:
      return 'Director';
    default:
      return 'Unknown';
  }
};
