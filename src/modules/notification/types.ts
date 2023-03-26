export type ShowErrorFunction = (errorType: ErrorNotificationType) => void;

export enum ErrorNotificationType {
  INCORRECT_LOGIN_OR_PASSWORD = 'incorrectLoginOrPassword',
  FAILED_TO_FETCH_DATA = 'failedToFetchData',
  FAILED_TO_SEND_DATA = 'failedToSendData',
  FAILED_TO_AUTHENTICATE = 'failedToAuthenticate',
  FAILED_TO_AUTHORIZE = 'failedToAuthorized',
}

export type ShowSuccessNotificationFunction = (successMessageType: SuccessNotificationType) => void;

export enum SuccessNotificationType {
  CHANGES_SUCCESSFULLY_SAVED = 'changesSuccessfullySaved',
  SUCCESSFULLY_CREATED = 'successfullyCreated',
  SUCCESSFULLY_BLOCKED = 'successfullyBlocked',
  SUCCESSFULLY_CLOSED = 'successfullyClosed',
  SUCCESSFULLY_COMPLETED = 'successfullyCompleted'
}
