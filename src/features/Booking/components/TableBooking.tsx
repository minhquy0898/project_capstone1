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

function TableBooking() {
  const { data: services } = useAllService();

  const { data: categoriesService } = useAllCategoriesService();

  console.log('categoriesService', categoriesService);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [listItem, setListItem] = useState<
    { id: string; quantity: number; price: number }[]
  >([]);

  useEffect(() => {
    if (services?.data.renters?.length) {
      setListItem(
        services.data.renters.map((service) => ({
          id: service.id,
          price: Number(service.price),
          quantity: 1,
        })),
      );
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

  const handleSubmit = () => {
    const objectSubmit = listItem.filter((item) =>
      selectedItems.includes(item.id),
    );

    console.log('objectSubmit', objectSubmit);
  };

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
                <TableCell>
                  <Checkbox
                    id={serviceItem.id}
                    defaultChecked={selectedItems.includes(serviceItem.id)}
                    onChange={() => handleCheckboxChange(serviceItem.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <button onClick={() => handleSubmit()}>check</button>
    </>
  );
}

export default TableBooking;
