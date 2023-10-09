import { z } from 'zod'
import { css } from '../../styled-system/css'

export const patientSchema = z.object({
  name: z.string().min(1, 'Enter a full name'),
  avatar: z.string().url('Avatar must be a valid URL').or(z.literal('')),
  description: z.string().min(1, 'Enter a description'),
  website: z.string().url('Website must be a valid URL'),
})

export type PatientInput = z.infer<typeof patientSchema>

export function getInputError(
  errors:
    | Partial<
        Record<
          'name' | 'avatar' | 'description' | 'website',
          string[] | undefined
        >
      >
    | undefined,
  field: keyof PatientInput
) {
  return errors?.[field] ? (
    <span className={css({ color: '#c00' })}>
      <p id={`${field}Error`}>{errors[field]?.[0]}</p>
    </span>
  ) : null
}

export function createPatient(patientInput: PatientInput) {
  return {
    ...patientInput,
    avatar:
      patientInput.avatar ||
      `https://robohash.org/${patientInput.name
        .trim()
        .split(' ')
        .join('-')}.png`,
  }
}
