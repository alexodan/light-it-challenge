import '../styled-system/styles.css'

import { Patient } from './patient/types'
import { css } from '../styled-system/css'
import { useFetch } from 'usehooks-ts'
import PatientsList from './patient/PatientsList'

const API_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users'

function App() {
  const { data: initialPatients } = useFetch<Patient[]>(API_URL)

  return (
    <main
      className={css({
        bg: '#1D212F',
        color: '#eee',
        display: 'flex',
        justifyContent: 'center',
        minH: '100vh',
      })}
    >
      <div className={css({ maxW: '1280px', p: 4 })}>
        <h1 className={css({ fontSize: '2.4rem', my: 2 })}>Light-it</h1>
        <PatientsList patients={initialPatients ?? []} />
      </div>
    </main>
  )
}

export default App
