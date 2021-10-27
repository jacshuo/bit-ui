import React from 'react';
import rowStyle from './Row.module.scss';
import classNames from 'classnames/bind';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IColProps extends IBitLayoutComponentProps<any> {
  span?: number | string;
  spanSM?: number;
  spanMD?: number;
  spanLG?: number;
  spanXL?: number;
  spanXXL?: number;
}

const Col: React.FunctionComponent<IColProps> = (props) => {
  const cls = classNames.bind(rowStyle);
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
  const responsiveSpansClass = cls({
    [`bit-grid-col-span-responsive-sm-${spanSM}`]: spanSM,
    [`bit-grid-col-span-responsive-md-${spanMD}`]: spanMD,
    [`bit-grid-col-span-responsive-lg-${spanLG}`]: spanLG,
    [`bit-grid-col-span-responsive-xl-${spanXL}`]: spanXL,
    [`bit-grid-col-span-responsive-xxl-${spanXXL}`]: spanXXL,
    'bit-grid-col-flex': flex,
    [`bit-grid-col-flex-justify-content-${flexJustifyContent}`]: flexJustifyContent,
    [`bit-grid-col-flex-align-items-${flexAlignItems}`]: flexAlignItems,
    [`bit-grid-col-flex-justify-items-${flexJustifyItems}`]: flexJustifyItems,
    [`bit-grid-col-flex-align-content-${flexAlignContent}`]: flexAlignContent,
  });
  const spannedClass = cls(`bit-grid-col-span-${span}`, {
    'bit-grid-col-flex': flex,
    [`bit-grid-col-flex-justify-content-${flexJustifyContent}`]: flexJustifyContent,
    [`bit-grid-col-flex-align-items-${flexAlignItems}`]: flexAlignItems,
    [`bit-grid-col-flex-justify-items-${flexJustifyItems}`]: flexJustifyItems,
    [`bit-grid-col-flex-align-content-${flexAlignContent}`]: flexAlignContent,
  });
  if (span === 'responsive') {
    return <div className={responsiveSpansClass} style={style}>
      {children}
    </div>;
  }
  if (span) {
    return <div className={spannedClass} style={style}>
      {children}
    </div>;
  }
  return <>{children}</>;
};

export default Col;
