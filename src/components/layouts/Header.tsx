import React, {FunctionComponent} from 'react';
import headerStyle from './Header.module.scss';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface IHeader extends IBitComponentProps<any> {
}

const Header: FunctionComponent = (props: IHeader) => {
  const {children} = props;
  return <>
    <div>
      {children}
    </div>
  </>;
};

export default Header;
