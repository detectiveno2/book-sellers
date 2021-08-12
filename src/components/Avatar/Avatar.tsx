import './Avatar.scss'

interface IProps {
  src: string
  alt?: string
  diameter?: number
}

const Avatar: React.FC<IProps> = ({ src, alt, diameter }) => {
  return (
    <div
      style={{
        width: diameter ? diameter : 'auto',
        height: diameter ? diameter : 'auto',
      }}
      className='avatar'
    >
      <img src={src} alt={alt} />
    </div>
  )
}

export default Avatar
