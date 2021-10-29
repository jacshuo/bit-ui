import React from 'react';
import {ITypography} from './ITypography';
import typoStyles from './Typography.module.scss';
import classNames from 'classnames';

export interface IH4Props extends ITypography {

}

const H4: React.FunctionComponent<IH4Props> = (props) => {
  const {
    children,
    success,
    warn,
    danger,
    style,
  } = props;
  const cls = classNames(typoStyles['bit-typography'], typoStyles['h4'], {
    [typoStyles['success']]: success,
    [typoStyles['warn']]: warn,
    [typoStyles['danger']]: danger,
  });
  return <>
    <span className={cls} style={style}>{
      children
    }</span>
  </>;
};

export default H4;
