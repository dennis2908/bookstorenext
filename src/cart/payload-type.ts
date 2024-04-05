import { z } from 'zod';

export const payloadSchema = z
  .array(
    z.object({
      authFullName: z.string(),
      authEmail: z.string(),
    }),
  )
  .min(1);

export type Payload = z.infer<typeof payloadSchema>;
