import React, {FunctionComponent, PropsWithChildren} from 'react';
import {IoCloseOutline} from 'react-icons/io5';
import styles from './ControlClear.module.scss';
import classNames from 'classnames';

export interface IControlClearProps extends PropsWithChildren<any> {
  active?: boolean;
  size?: string | number;
  withSuffix?: boolean;
  show?: boolean;
  onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const ControlClear: FunctionComponent<IControlClearProps> = (props) => {
  const {active, size, withSuffix, show, onClick} = props;
  const cls = classNames(styles['bit-control-clear'], {
    [styles['with-suffix']]: withSuffix,
    [styles['show']]: show,
  });
  return <>
    {active && <span className={cls} onClick={(e) => {
      onClick(e);
    }}>
      <IoCloseOutline size={size} />
    </span>}
  </>;
};


export default ControlClear;
