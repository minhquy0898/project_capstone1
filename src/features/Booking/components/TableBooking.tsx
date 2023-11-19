import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useAllService } from '../../Admin/apis/settingService.api';
import { useEffect, useState } from 'react';
import { IRenterItem, IRenterItemPay } from '../../../types/common';
import React from 'react';

type ITableBookingProps = {
  handleConfirm: (item: IRenterItemPay) => void;
  renterList: IRenterItem[] | [];
};

function TableBooking({ handleConfirm, renterList }: ITableBookingProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['2']));
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [listItem, setListItem] = useState<IRenterItem[]>([]);
  const [error, setError] = useState<string>();
  const { data: services } = useAllService();

  useEffect(() => {
    if (services?.data.renters?.length) {
      let listServicePack = [...renterList];
      const additionalServices = services.data.renters
        .filter((service) =>
          listServicePack.every(
            (checkedService) => checkedService.id !== service.id,
          ),
        )
        .map(({ id, price }) => ({ id, price, quantity: 1 }));

      const listData = [...listServicePack, ...additionalServices];

      setListItem(listData);
      const totalMoney = renterList.reduce((total, service) => {
        return total + service.quantity * service.price;
      }, 0);

      setTotalAmount(totalMoney);
    }
  }, [renterList]);

  useEffect(() => {
    if (renterList.length > 0) {
      setSelectedItems(renterList.map((service) => service.id));
    } else {
      setSelectedItems([]);
    }
  }, [renterList]);

  // tăng giảm số lượng thiết bị
  const setQuantityForItem = (id: string, quantity: number) => {
    const updatedList = listItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    setListItem(updatedList);
  };

  const handleCheckboxChange = (id: string) => {
    const isSelected = selectedItems.includes(id);
    setSelectedItems((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id],
    );
  };

  const handleSubmit = () => {
    setError('');
    if (selectedItems.length < 1) {
      setError('Vui lòng chọn thiết bị!');
    }

    const objectSubmit = listItem.filter((item) =>
      selectedItems.includes(item.id),
    );
    const totalMoney = objectSubmit.reduce((total, service) => {
      return total + service.quantity * service.price;
    }, 0);

    setTotalAmount(totalMoney);

    handleConfirm({
      renters: objectSubmit,
      totalAmount: totalAmount,
    } as unknown as IRenterItemPay);
  };
  console.log(
    'selectedItems',
    selectedItems[0] === services?.data.renters[0].id,
  );
  console.log('services', services);

  return (
    <>
      {services && services.data.renters.length > 0 && (
        <Table
          aria-label="Example table with dynamic content"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          // onSelectionChange={setSelectedKeys}
        >
          <TableHeader>
            <TableColumn>No.</TableColumn>
            <TableColumn>Tên thiết bị</TableColumn>
            <TableColumn>Đơn vị tính</TableColumn>
            <TableColumn>
              Giá tiền<span className="ms-1">(VNĐ)</span>
            </TableColumn>
            <TableColumn>Số lượng</TableColumn>
            <TableColumn>Ghi chú</TableColumn>
          </TableHeader>
          <TableBody items={services.data.renters ?? []}>
            {(serviceItem) => (
              <TableRow key={serviceItem.id}>
                <TableCell>
                  <Checkbox
                    isSelected={
                      selectedItems[0] === services?.data.renters[0].id
                    }
                    // defaultSelected={
                    //   selectedItems[0] === '654b9d49bf030f180453fd94'
                    // }
                    onChange={() => handleCheckboxChange(serviceItem.id)}
                  />
                </TableCell>
                <TableCell>{serviceItem.name}</TableCell>
                <TableCell>{serviceItem.unit}</TableCell>
                <TableCell>{serviceItem.price}</TableCell>
                <TableCell>
                  <div className="flex gap-1 items-center">
                    <Button
                      disabled={
                        listItem.find((item) => item.id === serviceItem.id)
                          ?.quantity === 1
                      }
                      size="sm"
                      isIconOnly
                      onClick={() =>
                        setQuantityForItem(
                          serviceItem.id,
                          listItem.find((item) => item.id === serviceItem.id)
                            ?.quantity ?? 1 - 1,
                        )
                      }
                    >
                      <AiOutlineMinus />
                    </Button>
                    <span>
                      {
                        listItem.find((item) => item.id === serviceItem.id)
                          ?.quantity
                      }
                    </span>
                    <Button
                      disabled={
                        listItem.find((item) => item.id === serviceItem.id)
                          ?.quantity === serviceItem.quantity
                      }
                      size="sm"
                      isIconOnly
                      onClick={() =>
                        setQuantityForItem(
                          serviceItem.id,
                          listItem.find((item) => item.id === serviceItem.id)
                            ?.quantity ?? 1 + 1,
                        )
                      }
                    >
                      <AiOutlinePlus />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{serviceItem.note}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      {error && <p className="text-danger text-xs">{error}</p>}
      <Button className="mt-5" onClick={() => handleSubmit()}>
        Xác nhận
      </Button>

      <p>
        <b>Tổng cộng: </b>
        <span>{totalAmount} vnd</span>
      </p>
    </>
  );
}

export default TableBooking;
