import React, {CSSProperties} from 'react';
import colStyle from './Col.module.scss';
import classNames from 'classnames';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IResponsiveProperties {
  span?: number,
  offset?: number,
  order?: number,
  pull?: number,
  push?: number,
}

export interface IColProps extends IBitLayoutComponentProps<any> {
  style?: CSSProperties;
  className?: string | string[];
  span?: number | string;
  offset?: number | string;
  order?: number;
  push?: number;
  pull?: number;
  xs?: number | IResponsiveProperties;
  sm?: number | IResponsiveProperties;
  md?: number | IResponsiveProperties;
  lg?: number | IResponsiveProperties;
  xl?: number | IResponsiveProperties;
  xxl?: number | IResponsiveProperties;
}

const Col: React.FunctionComponent<IColProps> = (props) => {
  const {
    style,
    className,
    span,
    offset,
    order,
    push,
    pull,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    children,
    colPaddings,
  } = props;

  let responsiveState = {};
  ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach((bk) => {
    // 自动生成断点className
    const breakVal = props[bk];
    if (breakVal && !Number.isInteger(breakVal)) {
      for (const [k, v] of Object.entries(breakVal)) {
        responsiveState = {
          ...responsiveState,
          [colStyle[`bit-col-${bk}-${k}-${v}`]]: v,
        };
      }
    }
  });
  const cls = classNames(colStyle['bit-col'], {
    [colStyle[`bit-col-span-${span}`]]: span,
    [colStyle[`bit-col-offset-${offset}`]]: offset,
    [colStyle[`bit-col-pull-${pull}`]]: pull,
    [colStyle[`bit-col-push-${push}`]]: push,
    [colStyle[`bit-col-order-${order}`]]: order,
    [colStyle[`bit-col-xs-span-${xs}`]]: Number.isInteger(xs) && xs,
    [colStyle[`bit-col-sm-span-${sm}`]]: Number.isInteger(sm) && sm,
    [colStyle[`bit-col-md-span-${md}`]]: Number.isInteger(md) && md,
    [colStyle[`bit-col-lg-span-${lg}`]]: Number.isInteger(lg) && lg,
    [colStyle[`bit-col-xl-span-${xl}`]]: Number.isInteger(xl) && xl,
    [colStyle[`bit-col-xxl-span-${xxl}`]]: Number.isInteger(xxl) && xxl,
  }, responsiveState, className);

  return <>
    <div className={cls} style={{...colPaddings, ...style}}>
      {children}
    </div>
  </>;
};

export default Col;
