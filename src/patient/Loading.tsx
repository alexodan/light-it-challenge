import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { css } from '../../styled-system/css'

const Loading = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '1rem',
      }}
      className={css({
        width: '300px',
        md: {
          width: '600px',
        },
        lg: {
          width: '1280px',
        },
      })}
    >
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Skeleton
            key={i}
            baseColor="#1D212F"
            containerClassName={css({ flex: 1 })}
            className={css({ width: '240px', height: '500px' })}
          />
        ))}
    </div>
  )
}

export default Loading
