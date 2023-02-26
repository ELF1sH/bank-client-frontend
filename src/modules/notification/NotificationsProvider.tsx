import React from 'react';
import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';

interface NotificationsProviderProps {
  children: React.ReactNode;
}

export const NotificationContext = React.createContext<NotificationInstance | undefined>(undefined);

const NotificationsProvider: React.FC<NotificationsProviderProps> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={api}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationsProvider;
