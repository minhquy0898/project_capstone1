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
import {
  useAllCategoriesService,
  useAllService,
} from '../../Admin/apis/settingService.api';
import { useEffect, useState } from 'react';
import { IRenterItemPay } from '../../../types/common';

const dataServicePack = [
  {
    id: '654b9d49bf030f180453fd94',
    quantity: 12,
    price: 5000,
  },
];

type ITableBookingProps = {
  handleConfirm: (item: IRenterItemPay) => void;
};
function TableBooking({ handleConfirm }: ITableBookingProps) {
  const { data: services } = useAllService();

  // const { data: categoriesService } = useAllCategoriesService();

  // console.log('categoriesService', categoriesService);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [error, setError] = useState<string>();

  const [listItem, setListItem] = useState<
    { id: string; quantity: number; price: number }[]
  >([]);

  useEffect(() => {
    if (services?.data.renters?.length) {
      let listServicePack = [...dataServicePack];
      const additionalServices = services.data.renters
        .filter((service) =>
          listServicePack.every(
            (checkedService) => checkedService.id !== service.id,
          ),
        )
        .map(({ id, price }) => ({ id, price, quantity: 1 }));

      const listData = [...listServicePack, ...additionalServices];

      setListItem(listData);
    }
  }, [services]);

  useEffect(() => {
    if (dataServicePack.length > 0) {
      setSelectedItems(dataServicePack.map((service) => service.id));
    }
  }, [services]);

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
    setError('');
    if (selectedItems.length < 1) {
      setError('Vui lòng chọn thiết bị!');
    }
    const objectSubmit = listItem.filter((item) =>
      selectedItems.includes(item.id),
    );

    console.log(objectSubmit);

    const totalMoney = objectSubmit.reduce((total, service) => {
      return total + service.quantity * service.price;
    }, 0);

    setTotalAmount(totalMoney);
    handleConfirm({
      renters: objectSubmit,
      totalAmount: totalAmount,
    } as unknown as IRenterItemPay);
  };

  console.log('selected', typeof services?.data.renters[0].id);

  return (
    <>
      {services && services.data.renters.length > 0 && (
        <Table aria-label="Example table with dynamic content">
          <TableHeader>
            <TableColumn>Tên thiết bị</TableColumn>
            <TableColumn>Đơn vị tính</TableColumn>
            <TableColumn>
              Giá tiền<span className="ms-1">(VNĐ)</span>
            </TableColumn>
            <TableColumn>Số lượng</TableColumn>
            <TableColumn>Ghi chú</TableColumn>
            <TableColumn>Khác</TableColumn>
          </TableHeader>
          <TableBody>
            {services.data.renters.map((serviceItem, index) => (
              <TableRow key={serviceItem.id}>
                <TableCell>
                  <Checkbox
                    id={serviceItem.id}
                    defaultSelected={selectedItems.includes(serviceItem.id)}
                    checked
                    onChange={() => handleCheckboxChange(serviceItem.id)}
                  />
                </TableCell>
                <>{serviceItem.name}</>
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
        <span>{totalAmount}vnd</span>
      </p>
    </>
  );
}

export default TableBooking;
