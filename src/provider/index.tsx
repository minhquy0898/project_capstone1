import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <NextUIProvider>{children} </NextUIProvider>;
}

export default AppProvider;
