import { css } from '../../styled-system/css'
import Button from '../shared/Button'
import { formStyles, formGroupStyles } from './PatientForm.styles'
import { Patient } from './types'
import { v4 as uuidv4 } from 'uuid'
import {
  PatientInput,
  createPatient,
  getInputError,
  patientSchema,
} from './utils'
import { useState } from 'react'

type Props = {
  patient?: Patient
  handleSave: (patient: Patient) => void
}

const PatientForm = ({ patient, handleSave }: Props) => {
  const [errors, setErrors] =
    useState<Partial<Record<keyof PatientInput, string[] | undefined>>>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const result = patientSchema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
      const errors = result.error.formErrors.fieldErrors
      setErrors(errors)
    } else {
      const newPatient = createPatient(result.data)
      handleSave(
        patient
          ? { ...patient, ...newPatient }
          : { id: uuidv4(), createdAt: new Date().toISOString(), ...newPatient }
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles}>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="name">
          Name *
        </label>
        <input
          aria-label="Enter a full name"
          aria-invalid={getInputError(errors, 'name') ? 'true' : 'false'}
          aria-describedby="nameError"
          className={css({ p: 1 })}
          placeholder="Jane Doe"
          name="name"
          type="text"
          defaultValue={patient?.name}
        />
        {getInputError(errors, 'name')}
      </div>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="description">
          Description *
        </label>
        <textarea
          aria-label="Enter a description"
          aria-invalid={getInputError(errors, 'description') ? 'true' : 'false'}
          aria-describedby="descriptionError"
          className={css({ p: 1 })}
          placeholder="About"
          name="description"
          defaultValue={patient?.description}
          rows={4}
        />
        {getInputError(errors, 'description')}
      </div>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="website">
          Website *
        </label>
        <input
          aria-label="Patient's website URL"
          aria-invalid={getInputError(errors, 'website') ? 'true' : 'false'}
          aria-describedby="websiteError"
          className={css({ p: 1 })}
          placeholder="http://website.com"
          name="website"
          type="text"
          defaultValue={patient?.website}
        />
        {getInputError(errors, 'website')}
      </div>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="avatar">
          Avatar (optional)
        </label>
        <input
          aria-label="Avatar url (optional)"
          aria-invalid={getInputError(errors, 'avatar') ? 'true' : 'false'}
          aria-describedby="avatarError"
          className={css({ p: 1 })}
          placeholder="https://robohash.org/stefan-one"
          name="avatar"
          type="text"
          defaultValue={patient?.avatar}
        />
        {getInputError(errors, 'avatar')}
      </div>
      <Button className={css({ mt: 4 })}>Save</Button>
    </form>
  )
}

export default PatientForm
