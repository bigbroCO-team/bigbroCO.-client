'use client';

import { Provider as P } from 'shared';

interface Props {
  readonly children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  return <P>{children}</P>;
};

export default Provider;
