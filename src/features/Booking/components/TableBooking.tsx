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

type ITableBookingProps = {
  handleConfirm: (item: IRenterItemPay) => void;
  renterList: IRenterItem[] | [];
};
function TableBooking({ handleConfirm, renterList }: ITableBookingProps) {
  // const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [selectedItems, setSelectedItems] = useState<string[]>(
    renterList.map((service) => service.id),
  );
  const [totalAmount, setTotalAmount] = useState<number>();
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
      // set so tien mac dinh theo goi
      // const totalMoney = renterList.reduce((total, service) => {
      //   return total + service.quantity * service.price;
      // }, 0);

      // setTotalAmount(totalMoney);
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
  console.log(selectedItems);

  const handleSubmit = () => {
    console.log('selectedItems', selectedItems);

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
    console.log('totalMoney', totalMoney);

    console.log('selectedItems', totalAmount);

    handleConfirm({
      renters: objectSubmit,
      totalAmount: totalAmount,
    } as unknown as IRenterItemPay);
  };

  return (
    <>
      {services && services.data.renters.length > 0 && (
        <Table
          aria-label="Controlled table example with dynamic content"
          // selectionMode="multiple"
          // selectedKeys={selectedKeys}
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
          <TableBody>
            {services.data.renters.map((serviceItem, index) => (
              <TableRow key={serviceItem.id}>
                <TableCell>
                  <Checkbox
                    id={serviceItem.id}
                    defaultChecked={selectedItems.includes(
                      String(serviceItem.id),
                    )}
                    onChange={() => handleCheckboxChange(serviceItem.id)}
                  />
                </TableCell>
                <TableCell>{serviceItem.name}</TableCell>
                <TableCell>{serviceItem.unit}</TableCell>
                <TableCell>{serviceItem.price}</TableCell>
                <TableCell>
                  <div className="flex gap-1 items-center">
                    <Button
                      disabled={listItem[index]?.quantity === 1}
                      size="sm"
                      isIconOnly
                      onClick={() =>
                        setQuantityForItem(
                          serviceItem.id,
                          listItem[index].quantity - 1,
                        )
                      }
                    >
                      <AiOutlineMinus />
                    </Button>
                    <span>{listItem[index]?.quantity}</span>
                    <Button
                      disabled={
                        listItem[index]?.quantity === serviceItem.quantity
                      }
                      size="sm"
                      isIconOnly
                      onClick={() =>
                        setQuantityForItem(
                          serviceItem.id,
                          listItem[index].quantity + 1,
                        )
                      }
                    >
                      <AiOutlinePlus />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{serviceItem.note}</TableCell>
              </TableRow>
            ))}
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
