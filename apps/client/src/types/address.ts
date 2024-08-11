import { z } from 'zod';
import { AddAddressFormSchema } from 'client/schemas';

export type AddAddressFormType = z.infer<typeof AddAddressFormSchema>;
