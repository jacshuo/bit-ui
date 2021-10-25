import React, {FunctionComponent} from 'react';
import footerStyles from './Footer.module.scss';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface IReact extends IBitComponentProps<any> {

}

const Footer: FunctionComponent<IReact> = (props) => {
  const {children} = props;
  return <>
    <div className={footerStyles['bit-footer']}>
      {children}
    </div>
  </>;
};

export default Footer;
