import { create } from 'zustand';

interface StoreType {
  selectedAddress: number | null;
  setSelectedAddress: (id: number) => void;
  width: number;
  setWidth: (width: number) => void;
}

const useStore = create<StoreType>((set) => ({
  selectedAddress: null,
  setSelectedAddress: (id) => set(() => ({ selectedAddress: id })),
  width: 1920,
  setWidth: (width) => set(() => ({ width: width })),
}));

export default useStore;
