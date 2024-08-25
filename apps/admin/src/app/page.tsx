import { Delivery } from 'admin/components';

const deliveryData = {
  year: '2024-08-24',
  time: '14:32:00',
  product: [
    'Big Bro T-shirt (15,000원/1개)',
    'Small Bro T-shirt (12,000원/1개)',
  ],
  price: 27000,
  name: '김철수',
  address: '서울특별시 강남구 테헤란로 123',
  phoneNumber: 98765432,
  id: 'efgh5678',
};

export default function Home() {
  return <Delivery {...deliveryData} />;
}
