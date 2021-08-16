import { Route } from 'react-router-dom'

import HeaderLayout from '../layouts/Header/HeaderLayout'

interface IPrivateRouteProps {
  path: string
  exact: boolean
  component: React.ElementType
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  path,
  exact,
  component: Component,
}) => {
  return (
    <Route path={path} exact={exact}>
      <HeaderLayout>
        <Component />
      </HeaderLayout>
    </Route>
  )
}

export default PrivateRoute
