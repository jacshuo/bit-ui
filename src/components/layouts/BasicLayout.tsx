import React from 'react';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface IBasicLayout extends IBitComponentProps<any> {

}

const BasicLayout: React.FunctionComponent<IBasicLayout> = (props: IBasicLayout) => {
  const {children, style} = props;
  return <>
    <div style={style}>
      {children}
    </div>
  </>;
};

export default BasicLayout;
