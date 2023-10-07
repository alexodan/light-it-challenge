import { useState } from 'react'
import PatientModal from './PatientModal'
import { Patient } from './types'
import Button from '../shared/Button'

type Props = {
  handleNewPatient: (formData: Patient) => void
}

const AddNewPatient = ({ handleNewPatient }: Props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const createPatient = (formData: Patient) => {
    handleNewPatient(formData)
  }

  return (
    <>
      <Button onClick={() => setIsEditModalOpen(true)}>Add</Button>
      <PatientModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={createPatient}
      />
    </>
  )
}

export default AddNewPatient
