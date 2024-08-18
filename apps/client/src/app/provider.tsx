'use client';

import { useStore } from 'client/stores';
import { useEffect } from 'react';
import { Provider as SharedProvder } from 'shared/components';

interface Props {
  readonly children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const { setWidth } = useStore();

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SharedProvder>{children}</SharedProvder>;
};

export default Provider;
