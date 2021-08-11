import './PrimaryButton.scss'

type HandleClick = () => void

interface IProps {
  text: string
  handleClick?: HandleClick
  className?: string
}

const PrimaryButton: React.FC<IProps> = ({ text, handleClick, className }) => {
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
