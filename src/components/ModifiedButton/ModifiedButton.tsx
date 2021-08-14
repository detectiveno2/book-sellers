import './ModifiedButton.scss'

type HandleClick = () => void

interface IModifiedButtonProps {
  activeIcon: React.ElementType
  disableIcon: React.ElementType
  condition: boolean
  handleClick: HandleClick
}

const ModifiedButton: React.FC<IModifiedButtonProps> = ({
  activeIcon: ActiveIcon,
  disableIcon: DisableIcon,
  condition,
  handleClick,
}) => {
  return (
    <button onClick={handleClick} className='modified-btn'>
      {condition ? <ActiveIcon /> : <DisableIcon />}
    </button>
  )
}

export default ModifiedButton
