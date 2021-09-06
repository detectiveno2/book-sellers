import './ModifiedButton.scss'

type HandleClick = () => void

interface IModifiedButtonProps {
  activeIcon: React.ElementType
  disableIcon: React.ElementType
  condition: boolean
  handleClick?: HandleClick
  className?: string
}

const ModifiedButton: React.FC<IModifiedButtonProps> = ({
  activeIcon: ActiveIcon,
  disableIcon: DisableIcon,
  condition,
  handleClick,
  className: extraClass,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`modified-btn ${extraClass ? extraClass : ''}`}
    >
      {condition ? <ActiveIcon /> : <DisableIcon />}
    </button>
  )
}

export default ModifiedButton
