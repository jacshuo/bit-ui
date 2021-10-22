import React, {FunctionComponent} from 'react';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface ISiderProps extends IBitComponentProps<any> {

}

const Sider: FunctionComponent<ISiderProps> = (props: ISiderProps) => {
  const {children} = props;
  return <>
    <div>
      {children}
    </div>
  </>;
};

export default Sider;
