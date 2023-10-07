import { Patient } from './types'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  patient?: Patient
  handleSave: (patient: Patient) => void
}

const PatientForm = ({ patient, handleSave }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    event.preventDefault()
    console.log(formData)

    const newPatient: Patient = {
      ...(patient
        ? patient
        : { id: uuidv4(), createdAt: new Date().toISOString() }),
      avatar: formData.get('avatar') as string,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      website: formData.get('website') as string,
    }

    // TODO: validations?
    handleSave(newPatient)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="avatar">Avatar</label>
        <input name="avatar" type="text" defaultValue={patient?.avatar} />
      </div>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" defaultValue={patient?.name} />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        type="text"
        defaultValue={patient?.description}
      />
      <label htmlFor="website">Website</label>
      <input name="website" type="text" defaultValue={patient?.website} />
      <button>Save</button>
    </form>
  )
}

export default PatientForm
