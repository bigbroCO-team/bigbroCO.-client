import { z } from 'zod';

export const AddAddressFormSchema = z.object({
  tag: z.string().min(1, { message: '배송지 이름을 입력해주세요.' }),
  name: z.string().min(1, { message: '이름을 입력해주세요.' }),
  zipcode: z.string({ required_error: '우편번호 입력해주세요.' }),
  address: z.string({ required_error: '주소를 입력해주세요.' }),
  detail: z.string().min(1, { message: '상세 주소를 입력해주세요.' }),
  phone: z.string().refine((string) => /^\d+$/.test(string), {
    message: '핸드폰 번호를 입력해주세요.',
  }),
});
