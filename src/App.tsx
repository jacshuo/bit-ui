import React from 'react';
import './App.scss';
import Home from './pages/Home';
import {
  Route,
  RouteProps,
  Switch,
} from 'react-router-dom';
import ColorPlate from './pages/ColorPlate';

// 助手路由
const bitRoutes: RouteProps[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/colors',
    component: ColorPlate,
  },
];

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <Switch>
        {
          bitRoutes.map((routeProps, key) => {
            return <Route key={key} path={routeProps.path} exact={true}
              component={routeProps.component} />;
          })
        }
      </Switch>
    </div>
  );
}

export default App;
