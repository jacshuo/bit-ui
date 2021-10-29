import React from 'react';
import {ITypography} from './ITypography';
import typoStyles from './Typography.module.scss';
import classNames from 'classnames';

export interface IH3Props extends ITypography {

}

const H3: React.FunctionComponent<IH3Props> = (props) => {
  const {
    children,
    success,
    warn,
    danger,
    style,
  } = props;
  const cls = classNames(typoStyles['bit-typography'], typoStyles['h3'], {
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

export default H3;
