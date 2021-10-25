import React, {FunctionComponent} from 'react';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IMainProps extends IBitLayoutComponentProps<any> {

}

const Main: FunctionComponent<IMainProps> = (props) => {
  const {children} = props;
  return <>
    <div>
      {children}
    </div>
  </>;
};

export default Main;
