import { useEffect, useState } from 'react'
import { Patient } from './patient/types'
import PatientCard from './patient/PatientCard'
import AddNewPatient from './patient/AddNewPatient'

const API_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users'

function App() {
  const [patients, setPatients] = useState<Patient[]>([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPatients(data))
  }, [])

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

  return (
    <>
      <h1>Light-it</h1>
      <div>
        <AddNewPatient handleNewPatient={handleNewPatient} />
        {patients.map(patient => (
          <PatientCard
            key={patient.id}
            patient={patient}
            updatePatient={handleUpdatePatient}
          />
        ))}
      </div>
    </>
  )
}

export default App
