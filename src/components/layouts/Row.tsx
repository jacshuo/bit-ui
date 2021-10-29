import React, {CSSProperties, ReactElement} from 'react';
import styles from './Row.module.scss';
import clsNames from 'classnames';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IRowProps extends IBitLayoutComponentProps<any> {
  gutters?: number | [x: number, y: number] | undefined,
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between' | undefined,
  align?: 'start' | 'center' | 'end' | 'stretch' | undefined,
  style?: CSSProperties | undefined,
}

const Row: React.FunctionComponent<IRowProps> = (props) => {
  const {
    style,
    gutters,
    align,
    justify,
    children,
    className, // 外部传入的className
  } = props;
  const rowStyle = {margin: ''};
  const colPaddings = {padding: ''};
  if (Array.isArray(gutters) && gutters.length > 1) {
    Object.assign(rowStyle,
        {margin: `${gutters[1] / -2}px ${gutters[0] / -2}px`});
    colPaddings.padding = `${gutters[1] / 2}px ${gutters[0] / 2}px`;
  } else {
    Object.assign(rowStyle, {margin: `0 ${gutters as number / -2}px`});
    colPaddings.padding = `0 ${gutters as number / 2}px`;
  }


  const renderColumn = () => {
    return React.Children.map(children, (child) => {
      if (child && typeof (child) in ['string', 'number']) {
        return child;
      } else {
        return React.cloneElement(child as ReactElement, {colPaddings});
      }
    });
  };
  const cls = clsNames(styles['bit-row'],
      styles[`bit-row-flex-justify-${justify}`],
      styles[`bit-row-flex-align-${align}`],
      className);
  return <>
    <div className={cls} style={{...rowStyle, ...style}}>
      {renderColumn()}
    </div>
  </>;
};

export default Row;
