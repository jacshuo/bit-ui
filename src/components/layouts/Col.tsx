import React from 'react';
import rowStyle from './Row.module.scss';
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
    flex,
    flexJustifyContent,
    flexAlignItems,
    flexJustifyItems,
    flexAlignContent,
  } = props;
  if (span === 'responsive') {
    return <div className={[
      spanSM ? rowStyle[`bit-grid-col-span-responsive-sm-${spanSM}`] : null,
      spanMD ? rowStyle[`bit-grid-col-span-responsive-md-${spanMD}`] : null,
      spanLG ? rowStyle[`bit-grid-col-span-responsive-lg-${spanLG}`] : null,
      spanXL ? rowStyle[`bit-grid-col-span-responsive-xl-${spanXL}`] : null,
      spanXXL ? rowStyle[`bit-grid-col-span-responsive-xxl-${spanXXL}`] : null,
      flex ? rowStyle[`bit-grid-col-flex`] : '',
      flexJustifyContent ?
        rowStyle[`bit-grid-col-flex-justify-content-${flexJustifyContent}`] :
        '',
      flexAlignItems ?
        rowStyle[`bit-grid-col-flex-align-items-${flexAlignItems}`] :
        '',
      flexJustifyItems ?
        rowStyle[`bit-grid-col-flex-justify-items-${flexJustifyItems}`] : '',
      flexAlignContent ?
        rowStyle[`bit-grid-col-flex-align-content-${flexAlignContent}`] : '',
    ].join(' ')} style={style}>
      {children}
    </div>;
  }
  if (span) {
    return <div className={[
      rowStyle[`bit-grid-col-span-${span}`],
      flex ? rowStyle[`bit-grid-col-flex`] : '',
      flexJustifyContent ?
        rowStyle[`bit-grid-col-flex-justify-content-${flexJustifyContent}`] :
        '',
      flexAlignItems ?
        rowStyle[`bit-grid-col-flex-align-items-${flexAlignItems}`] :
        '',
      flexJustifyItems ?
        rowStyle[`bit-grid-col-flex-justify-items-${flexJustifyItems}`] : '',
      flexAlignContent ?
        rowStyle[`bit-grid-col-flex-align-content-${flexAlignContent}`] : '',
    ].join(' ')} style={style}>
      {children}
    </div>;
  }
  return <>{children}</>;
};

export default Col;
