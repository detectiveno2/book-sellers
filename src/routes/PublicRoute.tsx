import { Route } from 'react-router-dom'

interface IPublicRouteProps {
  path: string
  exact: boolean
  component: React.ElementType
}

const PublicRoute: React.FC<IPublicRouteProps> = ({
  path,
  exact,
  component: Component,
}) => {
  return (
    <Route path={path} exact={exact}>
      <Component />
    </Route>
  )
}

export default PublicRoute
