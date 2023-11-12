import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function TableBooking() {
  return (
    <Table>
      <TableHeader>
        <TableColumn className="w-[40px]">STT</TableColumn>
        <TableColumn className="w-[450px]">Tên thiết bị</TableColumn>
        <TableColumn className="w-[140px]">Số lượng</TableColumn>
        <TableColumn className="w-[100px]">Đơn vị tính</TableColumn>
        <TableColumn className="w-[160px]">Giá tiền</TableColumn>
        <TableColumn>Ghi chú</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Loa</TableCell>
          <TableCell>
            <div className="flex gap-1 items-center">
              <Button size="sm" isIconOnly>
                <AiOutlineMinus />
              </Button>
              <span className="mx-2">10</span>
              <Button size="sm" isIconOnly>
                <AiOutlinePlus />
              </Button>
            </div>
          </TableCell>
          <TableCell>cái</TableCell>
          <TableCell>20000</TableCell>
          <TableCell>loa nghe vui vui</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Loa</TableCell>
          <TableCell>
            <div className="flex gap-1 items-center">
              <Button size="sm" isIconOnly>
                <AiOutlineMinus />
              </Button>
              <span className="mx-2">10</span>
              <Button size="sm" isIconOnly>
                <AiOutlinePlus />
              </Button>
            </div>
          </TableCell>
          <TableCell>cái</TableCell>
          <TableCell>20000</TableCell>
          <TableCell>loa nghe vui vui</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Loa</TableCell>
          <TableCell>
            <div className="flex gap-1 items-center">
              <Button size="sm" isIconOnly>
                <AiOutlineMinus />
              </Button>
              <span className="mx-2">10</span>
              <Button size="sm" isIconOnly>
                <AiOutlinePlus />
              </Button>
            </div>
          </TableCell>
          <TableCell>cái</TableCell>
          <TableCell>20000</TableCell>
          <TableCell>loa nghe vui vui</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Loa</TableCell>
          <TableCell>
            <div className="flex gap-1 items-center">
              <Button size="sm" isIconOnly>
                <AiOutlineMinus />
              </Button>
              <span className="mx-2">10</span>
              <Button size="sm" isIconOnly>
                <AiOutlinePlus />
              </Button>
            </div>
          </TableCell>
          <TableCell>cái</TableCell>
          <TableCell>20000</TableCell>
          <TableCell>loa nghe vui vui</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableBooking;
