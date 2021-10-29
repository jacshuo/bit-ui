import React from 'react';
import {ITypography} from './ITypography';
import typoStyles from './Typography.module.scss';
import classNames from 'classnames';

export interface IH1Props extends ITypography {

}

const H1: React.FunctionComponent<IH1Props> = (props) => {
  const {
    children,
    success,
    warn,
    danger,
    style,
  } = props;
  const cls = classNames(typoStyles['bit-typography'], typoStyles['h1'], {
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

export default H1;
