import { createContext } from 'react';

interface valueProps {
  sentNotification: boolean,
  sentMessage: string,
  sendData: (formData: any) => Promise<void>,
}

const ContentContext = createContext<valueProps | null>(null);

export default ContentContext;
