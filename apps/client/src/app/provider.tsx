'use client';

import { Provider as SharedProvder } from 'shared';

interface Props {
  readonly children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  return <SharedProvder>{children}</SharedProvder>;
};

export default Provider;
