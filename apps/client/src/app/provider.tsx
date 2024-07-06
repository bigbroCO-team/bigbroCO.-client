'use client';

import { Wrapper } from 'shared';

interface Props {
  readonly children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Provider;
