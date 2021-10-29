import React from 'react';
import {ITypography} from './ITypography';
import typoStyles from './Typography.module.scss';
import classNames from 'classnames';

export interface IH2Props extends ITypography {

}

const H2: React.FunctionComponent<IH2Props> = (props) => {
  const {
    children,
    success,
    warn,
    danger,
    style,
  } = props;
  const cls = classNames(typoStyles['bit-typography'], typoStyles['h2'], {
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

export default H2;
