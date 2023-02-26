import { IClient } from '../../../../entities/users/client';

export const getClientResponse: IClient = {
  id: '2134123',
  firstName: 'Иван',
  lastName: 'Иванов',
  middleName: 'Иванович',
  isBlocked: false,
  numberOfBankAccounts: 34,
  numberOfCredits: 23,
};

export const getClientResponseBlocked: IClient = {
  id: '2134123',
  firstName: 'Иван',
  lastName: 'Иванов',
  middleName: 'Иванович',
  isBlocked: true,
  numberOfBankAccounts: 34,
  numberOfCredits: 23,
};
