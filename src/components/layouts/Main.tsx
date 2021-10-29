import React, {FunctionComponent} from 'react';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';
import {Route, Switch} from 'react-router-dom';
import bitRoutes from '../../config/routes';

export interface IMainProps extends IBitLayoutComponentProps<any> {

}

const Main: FunctionComponent<IMainProps> = (props) => {
  return <Switch>
    {
      bitRoutes.map((routeProps, key) => {
        return <Route key={key} path={routeProps.path} exact={true}
          component={routeProps.component} />;
      })
    }
  </Switch>;
};

export default Main;
