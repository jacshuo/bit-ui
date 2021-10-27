import React from 'react';
import bslStyles from './BasicLayout.module.scss';
import classNames from 'classnames/bind';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IBasicLayout extends IBitLayoutComponentProps<any> {

}

const BasicLayout: React.FunctionComponent<IBasicLayout> = (props: IBasicLayout) => {
  const {children, style} = props;
  let hasSider = false;
  const cls = classNames.bind(bslStyles)(
      'bit-basic-layout',
      {
        'bit-basic-layout-h-m-s-f': hasSider,
        'bit-basic-layout-h-m-f': !hasSider,
      },
  );
  React.Children.forEach(children, (child, index) => {
    if (child.type.name === 'Sider') {
      hasSider = true;
      return;
    }
  });
  return <>
    <div className={cls} style={style}>
      {<>{children}</>}
    </div>
  </>;
};

export default BasicLayout;
