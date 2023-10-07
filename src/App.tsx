import '../styled-system/styles.css'

import { useEffect, useState } from 'react'
import { Patient } from './patient/types'
import PatientCard from './patient/PatientCard'
import AddNewPatient from './patient/AddNewPatient'
import { css } from '../styled-system/css'

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
    <main
      className={css({
        bg: '#1D212F',
        color: '#eee',
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      <div className={css({ maxW: '1280px', p: 4 })}>
        <h1 className={css({ fontSize: '2.4rem', my: 2 })}>Light-it</h1>
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
      </div>
    </main>
  )
}

export default App
