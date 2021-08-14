import { Header } from '../components'
import './HeaderLayout.scss'

interface IHeaderLayoutProps {
  children: React.ReactNode
}

const HeaderLayout: React.FC<IHeaderLayoutProps> = ({ children }) => {
  return (
    <div className='header-layout'>
      <div className='header-wrapper'>
        <Header />
      </div>
      <div className='header-layout__content-wrapper'>{children}</div>
    </div>
  )
}

export default HeaderLayout
