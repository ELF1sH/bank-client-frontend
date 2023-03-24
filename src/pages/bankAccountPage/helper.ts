export const getColorByOperationType = (type: string) => {
  switch (type) {
    case 'Incoming':
      return 'green';
    case 'Withdrawal':
      return 'red';
    case 'CreditIncoming':
      return 'yellow';
    case 'CreditRepayment':
      return 'orange';
    default:
      return 'Неизвестная операция';
  }
};
