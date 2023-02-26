import { useContext } from 'react';

import { NotificationContext } from './NotificationsProvider';
import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from './types';

export const useNotifications = () => {
  const api = useContext(NotificationContext);

  const onError: ShowErrorFunction = (errorType: ErrorNotificationType) => {
    api?.error({
      message: getErrorText(errorType),
      placement: 'top',
    });
  };

  const onSuccess: ShowSuccessNotificationFunction = (
    successMessageType: SuccessNotificationType,
  ) => {
    api?.success({
      message: getSuccessMessageText(successMessageType),
      placement: 'top',
    });
  };

  return {
    onError,
    onSuccess,
  };
};

const getErrorText = (errorType: ErrorNotificationType) => {
  switch (errorType) {
    case ErrorNotificationType.INCORRECT_LOGIN_OR_PASSWORD:
      return 'Incorrect login or password';
    case ErrorNotificationType.FAILED_TO_FETCH_DATA:
      return 'Failed to fetch data';
    case ErrorNotificationType.FAILED_TO_SEND_DATA:
      return 'Failed to send data';
    default:
      return 'Unknown error';
  }
};

const getSuccessMessageText = (messageType: SuccessNotificationType) => {
  switch (messageType) {
    case SuccessNotificationType.CHANGES_SUCCESSFULLY_SAVED:
      return 'Changes successfully saved';
    case SuccessNotificationType.SUCCESSFULLY_CREATED:
      return 'Successfully created';
    case SuccessNotificationType.SUCCESSFULLY_BLOCKED:
      return 'Successfully blocked';
    case SuccessNotificationType.SUCCESSFULLY_CLOSED:
      return 'Bank account was successfully closed';
    default:
      return 'Successfully done';
  }
};
