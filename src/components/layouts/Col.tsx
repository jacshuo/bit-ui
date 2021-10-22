import React, {PropsWithChildren} from 'react';
import RowStyle from './Row.module.scss';
import {IBitComponentProps} from '../../lib/ICompomentProps';

export interface IColProps extends IBitComponentProps<any> {
  span?: number | string;
  spanSM?: number;
  spanMD?: number;
  spanLG?: number;
  spanXL?: number;
  spanXXL?: number;
}

const Col: React.FunctionComponent<IColProps> = (props) => {
  const {
    span,
    spanSM,
    spanMD,
    spanLG,
    spanXL,
    spanXXL,
    children,
    style,
  } = props;
  console.log(props);
  if (span === 'responsive') {
    return <div className={[
      spanSM ? RowStyle[`bit-grid-col-span-responsive-sm-${spanSM}`] : null,
      spanMD ? RowStyle[`bit-grid-col-span-responsive-md-${spanMD}`] : null,
      spanLG ? RowStyle[`bit-grid-col-span-responsive-lg-${spanLG}`] : null,
      spanXL ? RowStyle[`bit-grid-col-span-responsive-xl-${spanXL}`] : null,
      spanXXL ? RowStyle[`bit-grid-col-span-responsive-xxl-${spanXXL}`] : null,
    ].join(' ')} style={style}>
      {children}
    </div>;
  }
  if (span) {
    return <div className={[
      RowStyle[`bit-grid-col-span-${span}`],
    ].join(' ')} style={style}>
      {children}
    </div>;
  }
  return <>{children}</>;
};

export default Col;
