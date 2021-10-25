import React, {FunctionComponent} from 'react';
import footerStyles from './Footer.module.scss';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IReact extends IBitLayoutComponentProps<any> {

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
