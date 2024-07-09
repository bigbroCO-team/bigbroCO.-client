import { z } from 'zod';

export const loginFormSchema = z.object({
  id: z.string(),
  password: z.string().min(8, '8자 이상으로 입력해주세요.'),
});
