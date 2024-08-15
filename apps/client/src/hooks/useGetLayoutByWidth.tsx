import { MobileWidth } from 'shared/constants';
import { useStore } from 'client/stores';

const useGetLayoutByWidth = (
  PCLayout: () => JSX.Element,
  MobileLayout: () => JSX.Element
) => {
  const { width } = useStore();

  if (width > MobileWidth) return <PCLayout />;
  else return <MobileLayout />;
};

export default useGetLayoutByWidth;
