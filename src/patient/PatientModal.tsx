import PatientForm from './PatientForm'
import { Patient } from './types'

type Props = {
  patient?: Patient
  isOpen: boolean
  onClose: () => void
  onEdit: (formData: Patient) => void
}

const PatientModal = ({ patient, isOpen, onClose, onEdit }: Props) => {
  const handleSave = (patient: Patient) => {
    onEdit(patient)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div>
      <button onClick={onClose}>x</button>
      <PatientForm patient={patient} handleSave={handleSave} />
    </div>
  )
}

export default PatientModal
