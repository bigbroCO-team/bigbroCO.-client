import { addressUrl, get } from 'shared/libs';
import { AddressDataType } from 'shared/types';

export const getAddress = async (id: number) => {
  const response = await get<AddressDataType>(addressUrl.getAddressById(id));

  return response;
};
