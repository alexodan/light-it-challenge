import { useCallback, useEffect } from 'react'
import { css } from '../../styled-system/css'
import Button from './Button'

const container = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, .75)',
  zIndex: '9999',
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const header = css({
  my: 2,
})

const content = css({
  background: '#1D212F',
  px: 8,
  pt: 4,
  pb: 8,
  borderRadius: '4px',
  position: 'relative',
})

type ModalProps = {
  children: React.ReactNode
  title?: React.ReactNode
  handleClose: () => void
}

const ESCAPE_KEY = 'Escape'

export default function Modal({ children, title, handleClose }: ModalProps) {
  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY) {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey, false)
    return () => {
      document.removeEventListener('keydown', handleEscKey, false)
    }
  }, [handleEscKey])

  return (
    <div className={container}>
      <div className={content}>
        <div className={header}>{title}</div>
        <div>
          <Button
            className={css({
              pos: 'absolute',
              top: 4,
              right: 8,
            })}
            onClick={handleClose}
          >
            X
          </Button>
          {children}
        </div>
      </div>
    </div>
  )
}
