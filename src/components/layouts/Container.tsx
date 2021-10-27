import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';

export interface IContainer extends React.PropsWithChildren<any> {
  fluidSM?: boolean;
  fluidMD?: boolean;
  fluidLG?: boolean;
  fluidXL?: boolean;
  fluidXXL?: boolean;
}

const Container: React.FunctionComponent<IContainer> = (props: IContainer) => {
  const {
    fluidSM,
    fluidMD,
    fluidLG,
    fluidXL,
    fluidXXL,
  } = props;
  const cls = classNames.bind(styles)(
      'bit-container',
      {
        'bit-container-fluid-sm': fluidSM,
        'bit-container-fluid-md': fluidMD,
        'bit-container-fluid-lg': fluidLG,
        'bit-container-fluid-xl': fluidXL,
        'bit-container-fluid-xxl': fluidXXL,
      },
  );
  return <>
    <div
      className={cls}>{props.children}</div>
  </>;
};

export default Container;
