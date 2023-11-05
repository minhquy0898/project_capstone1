import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
