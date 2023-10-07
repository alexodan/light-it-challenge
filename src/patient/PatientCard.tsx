import { useState } from 'react'
import PatientModal from './PatientModal'
import { Patient } from './types'

type Props = {
  patient: Patient
  updatePatient: (patient: Patient) => void
}

const PatientCard = ({ patient, updatePatient }: Props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  return (
    <div>
      <div>
        <img src={patient.avatar} alt={patient.name} />
      </div>
      <h2>{patient.name}</h2>
      <p>{patient.description}</p>
      <button>See more</button>
      <a href={patient.website}>{patient.website}</a>
      <button onClick={() => setIsEditModalOpen(true)}>Edit</button>
      <PatientModal
        patient={patient}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEdit={updatePatient}
      />
    </div>
  )
}

export default PatientCard
