import { css } from '../../styled-system/css'
import Modal from '../shared/Modal'
import PatientForm from './PatientForm'
import { Patient } from './types'

type Props = {
  patient?: Patient
  isOpen: boolean
  onClose: () => void
  onSave: (formData: Patient) => void
}

const PatientModal = ({ patient, isOpen, onClose, onSave }: Props) => {
  const handleSave = (patient: Patient) => {
    onSave(patient)
    onClose()
  }

  if (!isOpen) return null

  return (
    <Modal
      title={
        <h2 className={css({ fontSize: '2rem' })}>
          {patient ? 'Update' : 'New patient'}
        </h2>
      }
      handleClose={onClose}
    >
      <PatientForm patient={patient} handleSave={handleSave} />
    </Modal>
  )
}

export default PatientModal
