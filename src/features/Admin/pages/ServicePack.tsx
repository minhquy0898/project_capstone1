import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import { MdOutlineAdd } from 'react-icons/md';

import ModalAddServicePark from '../components/Modal/ModalAddServicePark';
import { useAllServicePack } from '../apis/settingService.api';
import TitleBorderStart from '../../../components/TitleBorderStart/TitleBorderStart';

function ServicePack() {
  const { data: dataServicePack } = useAllServicePack();
  console.log('dataServicePack', dataServicePack);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <TitleBorderStart>Quản lý gói dịch vụ</TitleBorderStart>

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
      {dataServicePack &&
        dataServicePack?.data.services.length > 0 &&
        dataServicePack?.data.services.map((servicePack) => (
          <Card key={servicePack.id} className="mt-3">
            <CardHeader className="flex gap-3 font-semibold">
              {servicePack.title}
            </CardHeader>
            <Divider />
            <CardBody>
              {servicePack.settings.length > 0 &&
                servicePack.settings.map((setting) => (
                  <div key={setting.name} className="mt-3">
                    <h6>Gói dịch vụ: {setting.name}</h6>
                    {!!setting.renters.length && (
                      <Table>
                        <TableHeader>
                          <TableColumn>Tên thiết bị</TableColumn>
                          <TableColumn>Đơn vị tính</TableColumn>
                          <TableColumn>
                            Giá tiền<span className="ms-1">(VNĐ)</span>
                          </TableColumn>
                          <TableColumn>Số lượng</TableColumn>
                          <TableColumn>Ghi chú</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {setting.renters.map((renter) => (
                            <TableRow key={renter.renter.id}>
                              <TableCell>{renter.renter.name}</TableCell>
                              <TableCell>{renter.renter.unit}</TableCell>
                              <TableCell>{renter.renter.price}</TableCell>
                              <TableCell>{renter.quantity}</TableCell>
                              <TableCell>{renter.renter.note}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                    <Divider className="mt-3" />
                  </div>
                ))}
            </CardBody>
          </Card>
        ))}

      <ModalAddServicePark
        onOpenChange={onOpenChange}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </div>
  );
}

export default ServicePack;
