import { Button, useDisclosure } from '@nextui-org/react';
import { MdOutlineAdd } from 'react-icons/md';

import ModalAddServicePark from '../components/Modal/ModalAddServicePark';

function ServicePack() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <h1 className="font-bold text-4xl mb-4">Quản lý gói dịch vụ</h1>
      <Button
        onPress={onOpen}
        color="primary"
        className="text-white "
        startContent={
          <span className="text-white">
            <MdOutlineAdd size={20} />
          </span>
        }
      >
        Thêm gói dịch vụ
      </Button>

      <ModalAddServicePark
        onOpenChange={onOpenChange}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </div>
  );
}

export default ServicePack;
