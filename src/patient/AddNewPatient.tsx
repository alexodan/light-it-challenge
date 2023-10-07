import { useState } from 'react'
import PatientModal from './PatientModal'
import { Patient } from './types'

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
      <button onClick={() => setIsEditModalOpen(true)}>Add</button>
      <PatientModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEdit={createPatient}
      />
    </>
  )
}

export default AddNewPatient
