import { z } from 'zod';
import { loginFormSchema } from 'client/schemas';

export type LoginFormType = z.infer<typeof loginFormSchema>;
