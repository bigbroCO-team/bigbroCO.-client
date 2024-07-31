import { ProductOptionType } from 'shared/types';

export interface SelectOptionType extends Omit<ProductOptionType, 'status'> {
  count: number;
}
