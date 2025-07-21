'use client';

import { useEffect } from 'react';
import LogRocket from 'logrocket';

interface LogRocketProps {
  userInfo?: {
    userId?: string;
    email?: string;
    name?: string;
    subscriptionType?: string;
    customerType?: string;
  };
}

export default function LogRocketComponent({ userInfo }: LogRocketProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      LogRocket.init('0aoeka/brush-club');
      
      // Identify user if userInfo is provided
      if (userInfo?.userId && userInfo?.email) {
        LogRocket.identify(userInfo.userId, {
          name: userInfo.name || '',
          email: userInfo.email,
          subscriptionType: userInfo.subscriptionType || 'customer',
          customerType: userInfo.customerType || 'eco-dental-kit-buyer',
        });
      }
    }
  }, [userInfo]);

  return null; // This component doesn't render anything
} 