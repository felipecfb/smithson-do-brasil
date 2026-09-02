import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']).default('production'),
  VITE_MAINTENANCE_MODE: z
    .enum(['true', 'false'])
    .transform((value) => value === 'true')
    .default('false'),
})

export const env = envSchema.parse(import.meta.env)
