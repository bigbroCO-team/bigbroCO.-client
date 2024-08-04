import { ProductLayout } from 'client/layouts';

interface Param {
  params: { id: string };
}

const Page: React.FC<Param> = ({ params: { id } }) => {
  return <ProductLayout id={id} />;
};

export default Page;
