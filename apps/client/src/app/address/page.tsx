import { AddressLayout } from 'client/layouts';
import { Suspense } from 'react';

const Page = () => (
  <Suspense>
    <AddressLayout />
  </Suspense>
);

export default Page;
