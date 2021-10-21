import React from 'react';
import styles from './Container.module.scss';

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
  return <>
    <div
      className={
        [
          styles['bit-container'],
          fluidSM ? styles['bit-container-fluid-sm'] : null,
          fluidMD ? styles['bit-container-fluid-md'] : null,
          fluidLG ? styles['bit-container-fluid-lg'] : null,
          fluidXL ? styles['bit-container-fluid-xl'] : null,
          fluidXXL ? styles['bit-container-fluid-xxl'] : null,
        ].join(
            ' ')}>{props.children}</div>
  </>;
};

export default Container;
