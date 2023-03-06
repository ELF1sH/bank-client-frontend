import { IBankAccountDetails } from '../../../../entities/bankAccounts/bankAccount';

export const getBankAccountDetails: IBankAccountDetails = {
  id: '1',
  accountNumber: 235236464,
  balance: 345.35,
  isClosed: false,
  isCredit: true,
  creditStatus: {
    totalSum: 100000,
    totalNumberOfPayments: 10,
    onePaymentSum: 11000,
    paymentsCompleted: 4,
    debt: 34000,
    creditTariff: {
      id: '1',
      name: 'credit-tariff-name',
      interestRate: 10,
      sum: 124435,
    },
  },
};
