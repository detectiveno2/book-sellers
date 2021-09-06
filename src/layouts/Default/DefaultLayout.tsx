import './DefaultLayout.scss'

interface IDefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => {
  return <div className='default-layout'>{children}</div>
}

export default DefaultLayout
