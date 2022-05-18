import { createContext } from 'react';

interface valueProps {
  sentNotification: boolean,
  sentMessage: string,
  sendData: (formData: {
    nombreCompleto: string,
    email: string,
    mensaje: string,
  }) => Promise<void>,
}

const ContentContext = createContext<valueProps | null>(null);

export default ContentContext;
