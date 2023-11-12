import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Spinner,
} from '@nextui-org/react';
import { MdOutlineClear } from 'react-icons/md';
import { useAllEvent } from '../../../apis/event.api';

function SettingEvent() {
  const { data: eventData, isLoading } = useAllEvent();

  return (
    <div>
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {!isLoading && eventData?.data.events.length && (
        <div className="my-6">
          <h3 className="font-bold mb-4 text-3xl">Các sự kiện</h3>

          <div className="gap-2 grid grid-cols-2 sm:grid-cols-5">
            {eventData?.data.events.map((cardItem) => (
              <div className="relative">
                <Button
                  className="absolute right-0 bg-rose-500 text-white z-20"
                  isIconOnly
                >
                  <MdOutlineClear size={18} />
                </Button>
                <Card
                  className="w-full"
                  key={cardItem.id}
                  shadow="sm"
                  isPressable
                  onPress={() => console.log('item pressed')}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={cardItem.banner}
                      className="w-full object-cover h-[140px]"
                      src={cardItem.banner}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b>{cardItem.title}</b>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingEvent;
