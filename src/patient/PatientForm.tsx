import { css } from '../../styled-system/css'
import Button from '../shared/Button'
import { formStyles, formGroupStyles } from './PatientForm.styles'
import { Patient } from './types'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  patient?: Patient
  handleSave: (patient: Patient) => void
}

const PatientForm = ({ patient, handleSave }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string

    const newPatient: Patient = {
      ...(patient
        ? patient
        : { id: uuidv4(), createdAt: new Date().toISOString() }),
      name,
      avatar:
        (formData.get('avatar') as string) ||
        `https://robohash.org/${name.trim().split(' ').join('-')}.png`,
      description: formData.get('description') as string,
      website: formData.get('website') as string,
    }

    // more validations?
    handleSave(newPatient)
  }

  return (
    <form onSubmit={handleSubmit} className={formStyles}>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="avatar">
          Avatar
        </label>
        <input
          className={css({ p: 1 })}
          placeholder="https://robohash.org/stefan-one"
          name="avatar"
          type="text"
          defaultValue={patient?.avatar}
        />
      </div>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="name">
          Name
        </label>
        <input
          required
          className={css({ p: 1 })}
          placeholder="Jane Doe"
          name="name"
          type="text"
          defaultValue={patient?.name}
        />
      </div>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="description">
          Description
        </label>
        <textarea
          required
          className={css({ p: 1 })}
          placeholder="About"
          name="description"
          defaultValue={patient?.description}
          rows={4}
        />
      </div>
      <div className={formGroupStyles}>
        <label className={css({ fontSize: '1.1rem' })} htmlFor="website">
          Website
        </label>
        <input
          required
          className={css({ p: 1 })}
          placeholder="http://website.com"
          name="website"
          type="text"
          defaultValue={patient?.website}
        />
      </div>
      <Button className={css({ mt: 4 })}>Save</Button>
    </form>
  )
}

export default PatientForm
