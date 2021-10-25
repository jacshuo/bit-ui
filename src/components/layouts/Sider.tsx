import React, {FunctionComponent} from 'react';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface ISiderProps extends IBitLayoutComponentProps<any> {

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
