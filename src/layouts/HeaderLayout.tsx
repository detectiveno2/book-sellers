import { Header, Container } from '../components'
import './HeaderLayout.scss'

interface IHeaderLayoutProps {
  children: React.ReactNode
}

const HeaderLayout: React.FC<IHeaderLayoutProps> = ({ children }) => {
  return (
    <div className='header-layout'>
      <div className='header-wrapper'>
        <Container>
          <Header />
        </Container>
      </div>
      <div className='header-layout__content-wrapper'>
        <Container>{children}</Container>
      </div>
    </div>
  )
}

export default HeaderLayout
