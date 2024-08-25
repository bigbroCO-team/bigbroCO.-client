import { z } from 'zod';
import { AddAddressFormSchema } from 'shared/schemas';

export type AddAddressFormType = z.infer<typeof AddAddressFormSchema>;

export interface AddressDataType extends AddAddressFormType {
  id: number;
}
