import React, {FunctionComponent} from 'react';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface IReact extends IBitComponentProps<any> {

}

const Footer: FunctionComponent<IReact> = (props) => {
  const {children} = props;
  return <>
    {children}
  </>;
};

export default Footer;
