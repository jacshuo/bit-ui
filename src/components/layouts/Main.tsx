import React, {FunctionComponent} from 'react';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface IMainProps extends IBitComponentProps<any> {

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
