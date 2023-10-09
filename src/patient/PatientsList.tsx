import { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import AddNewPatient from './AddNewPatient'
import { Patient } from './types'
import PatientCard from './PatientCard'
import Loading from './Loading'

type Props = {
  patients: Patient[]
}

const PatientsList = ({ patients: initialPatients }: Props) => {
  const [patients, setPatients] = useState<Patient[]>([])

  const handleUpdatePatient = (patient: Patient) => {
    const updatedPatients = patients.map(p => {
      if (p.id === patient.id) {
        return patient
      }
      return p
    })
    setPatients(updatedPatients)
  }

  const handleNewPatient = (patient: Patient) => {
    setPatients([patient, ...patients])
  }

  useEffect(() => {
    if (initialPatients) {
      setPatients(initialPatients)
    }
  }, [initialPatients])

  if (!patients.length) {
    return <Loading />
  }

  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '1rem',
      })}
    >
      <AddNewPatient handleNewPatient={handleNewPatient} />
      {patients.map(patient => (
        <PatientCard
          key={patient.id}
          patient={patient}
          updatePatient={handleUpdatePatient}
        />
      ))}
    </div>
  )
}

export default PatientsList
