import './PrimaryButton.scss'

type HandleClick = () => void

interface IPrimaryButtonProps {
  text: string
  handleClick?: HandleClick
  className?: string
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  text,
  handleClick,
  className,
}) => {
  return (
    <button
      className={`primary-btn ${className ? className : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
