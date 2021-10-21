import React, {
  PropsWithChildren,
  ReactComponentElement,
} from 'react';
import styles from './Row.module.scss';

export interface IRowProps extends PropsWithChildren<any> {
  cols?: 12 | 18 | 24,
  gutters?: number,
}

const Row: React.FunctionComponent<IRowProps> = (props) => {
  const {
    cols,
    gutters,
    children,
    style,
  } = props;
  const renderChild = (columns: number) => {
    const childCount = React.Children.count(children);
    return React.Children.map(children, (child) => {
      if (child && childCount) {
        const col = child as ReactComponentElement<any>;
        if (col.type.name === 'Col') {
          if (!col.props.span && !col.props.spanSM && !col.props.spanMD &&
            !col.props.spanLG && !col.props.spanXL && !col.props.spanXXL) {
            // 未传span，自动计算
            return React.cloneElement(col,
                {cols: columns, span: Math.floor((cols || 24) / childCount)});
          } else {
            if (col.props.spanSM || col.props.spanMD || col.props.spanLG ||
              col.props.spanXL || col.props.spanXXL) {
              return React.cloneElement(col,
                  {cols: columns, span: 'responsive'});
            }
          }
          return React.cloneElement(col,
              {cols: columns});
        }
        return child;
      }
      return null;
    });
  };
  if (cols) {
    return gutters ?
      <div className={[
        styles['bit-row'],
        styles['bit-grid-row'],
        styles[`bit-grid-row-${cols}`],
        styles[`bit-grid-row-gutter-${gutters}`]].join(
          ' ')} style={style}>{renderChild(cols)}</div> :
      <div className={[
        styles['bit-row'],
        styles['bit-grid-row'],
        styles[`bit-grid-row-${cols}`]].join(
          ' ')} style={style}>{renderChild(cols)}</div>;
  }
  return gutters ? <div className={[
    styles['bit-row'],
    styles['bit-grid-row'],
    styles['bit-grid-row-24'],
    styles[`bit-grid-row-gutter-${gutters}`]].join(
      ' ')} style={style}>{renderChild(24)}</div> :
    <div className={[
      styles['bit-row'],
      styles['bit-grid-row'],
      styles['bit-grid-row-24']].join(
        ' ')} style={style}>{renderChild(24)}</div>;
};

export default Row;
