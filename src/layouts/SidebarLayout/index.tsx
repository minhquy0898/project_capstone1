import { ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { ISidebarOption } from '../../types/common';

interface SidebarLayoutProps {
  children: ReactNode;
}

const sidebarItems: ISidebarOption[] = [
  {
    name: 'Quản lý thiết bị',
    path: '/setting-service-option',
    role: 'admin',
  },
];

function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <>
      <Header />
      <main className="relative mx-auto  z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <div className="grid grid-cols-12">
          <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8 pr-4 ">
            <div className="lg:fixed lg:top-20 mt-2 z-0 lg:h-[calc(100vh-121px)] min-w-[260px] max-w-[320px]">
              <Sidebar options={sidebarItems} />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-10 xl:col-span-10 lg:px-16 my-[100px] min-h-screen">
            {children}
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </>
  );
}

export default SidebarLayout;
