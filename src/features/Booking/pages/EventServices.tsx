import CardGroup from '../../../components/Card/CardGroup';

const cardList = {
  title: 'Tổ chức sự kiện',
  data: [
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
    {
      imageUrl: 'https://nextui.org/images/fruit-1.jpeg',
      title: 'Tên sự kiện',
    },
  ],
};

function EventServices() {
  return (
    <div>
      <CardGroup title="Tổ chức sự kiện" data={cardList.data} />
      <CardGroup title="Tổ chức sự kiện" data={cardList.data} />
      <CardGroup title="Tổ chức sự kiện" data={cardList.data} />
      <CardGroup title="Tổ chức sự kiện" data={cardList.data} />
      <CardGroup title="Tổ chức sự kiện" data={cardList.data} />
      <CardGroup title="Tổ chức sự kiện" data={cardList.data} />
    </div>
  );
}

export default EventServices;
