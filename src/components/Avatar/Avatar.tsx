import './Avatar.scss'

interface IAvatarProps {
  src: string
  alt?: string
  diameter?: number
}

const Avatar: React.FC<IAvatarProps> = ({ src, alt, diameter }) => {
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
