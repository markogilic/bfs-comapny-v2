import * as z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Unestite email' })
    .email({ message: 'Unesite validan email' }),
  password: z.string().min(1, { message: 'Unesite Sifru' }),
  code: z.optional(z.string().min(1, { message: 'Unesite kod' })),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Molimo vas unesite email',
    })
    .email({
      message: 'Molimo vas unesite validan email',
    }),
  password: z
    .string()
    .min(1, {
      message: 'Molimo vas unesite lozinku',
    })
    .min(6, {
      message: 'Lozinka mora imati najmanje 6 karaktera',
    }),
  name: z.string().min(1, {
    message: 'Molimo vas unesite ime',
  }),
});

export const ResetPassSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Unestite email' })
    .email({ message: 'Unesite validan email' }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(1, {
      message: 'Molimo vas unesite lozinku',
    })
    .min(6, {
      message: 'Lozinka mora imati najmanje 6 karaktera',
    }),
});

export const TestRecordSchema = z.object({
  userId: z.string(),
  testType: z.string(),
  testName: z.string(),
  testResult: z.string(),
  testTime: z.optional(z.string()),
});

export const EmoTestSchema = z.object({
  userId: z.string(),
  testType: z.string(),
  totalPoints: z.number(),
  tetPoints: z.number(),
  seiPoints: z.number(),
  eiePoints: z.number(),
});
