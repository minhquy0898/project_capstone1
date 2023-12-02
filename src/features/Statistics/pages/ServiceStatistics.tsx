import { Card, CardHeader, Divider, CardBody } from '@nextui-org/react';
import ShowDataRow from '../components/ShowDataRow';
import { useFetchUser } from '../../../apis/auth.api';
import { useGetServiceStatistic } from '../apis/statistic.api';
import TableService from '../components/Table/TableService';
import TitleBorderStart from '../../../components/TitleBorderStart/TitleBorderStart';

function ServiceStatistics() {
  const { data: dataUser } = useFetchUser();

  const { data: dataStatistic } = useGetServiceStatistic(
    String(dataUser?.data.account.id),
    dataUser?.data.account.role,
  );

  return (
    <>
      <div>
        <TitleBorderStart>Thống kê dịch vụ</TitleBorderStart>
        {dataStatistic &&
          dataStatistic.data.orders?.length > 0 &&
          dataStatistic?.data.orders.map((order) => (
            <Card className="mt-3" id={order?.id}>
              <CardHeader className="flex gap-3 font-semibold text-xl">
                Thông tin dịch vụ: {order?.servicePack}
              </CardHeader>
              <Divider />
              <CardBody>
                <ShowDataRow
                  title="Tên"
                  data={`${order?.user.firstName} ${order?.user.lastName} `}
                />
                <ShowDataRow title="Địa chỉ" data={order?.address} />
                <ShowDataRow title="Số điện thoại" data={order?.phone} />
                <ShowDataRow
                  title="Số lượng khách"
                  data={order?.numberOfAttendes}
                />
                <ShowDataRow
                  title="Tổng số tiền"
                  data={order?.renters.reduce((preValue, currValue) => {
                    return (
                      preValue + currValue.quantity * currValue.renter.price
                    );
                  }, 0)}
                />
                <ShowDataRow title="Mã thanh toán" data={order?.paypalId} />

                <TableService renters={order.renters} />
              </CardBody>
            </Card>
          ))}
      </div>
    </>
  );
}

export default ServiceStatistics;
