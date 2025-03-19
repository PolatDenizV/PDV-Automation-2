import { useState, useCallback } from 'react';

interface NotificationState {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

export function useNotification() {
  const [notification, setNotification] = useState<NotificationState>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const showNotification = useCallback((message: string, type: 'success' | 'error') => {
    setNotification({
      message,
      type,
      isVisible: true,
    });
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(prev => ({
      ...prev,
      isVisible: false,
    }));
  }, []);

  return {
    notification,
    showNotification,
    hideNotification,
  };
}