import React, {FunctionComponent} from 'react';
import headerStyle from './Header.module.scss';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface IHeader extends IBitComponentProps<any> {
}

const Header: FunctionComponent = (props: IHeader) => {
  const {children, style} = props;
  return <>
    <div className={headerStyle['bit-header']} style={style}>
      {children}
    </div>
  </>;
};

export default Header;
