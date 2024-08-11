import { create } from 'zustand';

interface StoreType {
  selectedAddress: number | null;
  setSelectedAddress: (id: number) => void;
}

const useStore = create<StoreType>((set) => ({
  selectedAddress: null,
  setSelectedAddress: (id) => set(() => ({ selectedAddress: id })),
}));

export default useStore;
