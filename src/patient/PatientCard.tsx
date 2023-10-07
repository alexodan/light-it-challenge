import { useState } from 'react'
import PatientModal from './PatientModal'
import { Patient } from './types'
import { containerStyle, avatarStyle } from './PatientCard.styles'
import { css } from '../../styled-system/css'
import Button from '../shared/Button'

type Props = {
  patient: Patient
  updatePatient: (patient: Patient) => void
}

const substring = (str: string, length = 150) =>
  str.length < length ? str : str.substring(0, length) + '...'

const PatientCard = ({ patient, updatePatient }: Props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const { avatar, name, description, website } = patient

  return (
    <div className={containerStyle}>
      <img className={avatarStyle} src={avatar} alt={name} />
      <div
        className={css({
          p: 2,
          overflow: 'scroll',
          height: '300px',
        })}
      >
        <h2 className={css({ fontWeight: '700', fontSize: '1.5rem' })}>
          {name}
        </h2>
        <p>{showFullDescription ? description : substring(description)}</p>
        <Button
          visual="outline"
          className={css({ textDecoration: 'underline' })}
          onClick={() => {
            setShowFullDescription(!showFullDescription)
          }}
        >
          {showFullDescription ? 'Show less' : 'Show more...'}
        </Button>
        <span className={css({ display: 'block', my: 2 })}>
          Website:{' '}
          <a className={css({ textDecoration: 'underline' })} href={website}>
            {website}
          </a>
        </span>
        <Button onClick={() => setIsEditModalOpen(true)}>Edit</Button>
      </div>
      <PatientModal
        patient={patient}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={updatePatient}
      />
    </div>
  )
}

export default PatientCard
