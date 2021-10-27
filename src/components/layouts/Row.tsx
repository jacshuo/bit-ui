import React, {
  ReactComponentElement,
} from 'react';
import styles from './Row.module.scss';
import classNames from 'classnames/bind';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IRowProps extends IBitLayoutComponentProps<any> {
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
  const childCount = React.Children.count(children);
  const cls = classNames.bind(styles);
  const renderChild = (columns: number) => {
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
      <div className={
        cls(
            'bit-row',
            'bit-grid-row',
            `bit-grid-row-${cols}`,
            {
              'bit-grid-row-auto-fit': (cols || 24) % childCount !== 0,
            },
            `bit-grid-row-gutter-${gutters}`,
        )
      } style={style}>{renderChild(
            cols)}</div> :
      <div className={cls('bit-row', 'bit-grid-row', `bit-grid-row-${cols}`, {
        'bit-grid-row-auto-fix': (cols || 24) % childCount !== 0,
      })} style={style}>{renderChild(cols)}</div>;
  }
  return gutters ?
    <div className={cls('bit-row', 'bit-grid-row', `bit-grid-row-24`, {
      'bit-grid-row-auto-fit': (cols || 24) % childCount !== 0,
    }, `bit-grid-row-gutter-${gutters}`)} style={style}>{renderChild(24)}</div> :
    <div className={cls('bit-row', 'bit-grid-row', 'bit-grid-row-24', {
      'bit-grid-row-auto-fit': (cols || 24) % childCount !== 0,
    })} style={style}>{renderChild(24)}</div>;
};

export default Row;
