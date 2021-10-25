import React from 'react';
import bslStyles from './BasicLayout.module.scss';
import {IBitLayoutComponentProps} from './ILayoutCompomentProps';

export interface IBasicLayout extends IBitLayoutComponentProps<any> {

}

const BasicLayout: React.FunctionComponent<IBasicLayout> = (props: IBasicLayout) => {
  const {children, style} = props;
  let hasSider = false;
  React.Children.forEach(children, (child, index) => {
    if (child.type.name === 'Sider') {
      hasSider = true;
      return;
    }
  });
  if (hasSider) {
    return <>
      <div className={[
        bslStyles['bit-basic-layout'],
        bslStyles['bit-basic-layout-h-m-s-f'],
      ].join(' ')} style={style}>
        {<>{children}</>}
      </div>
    </>;
  }
  return <>
    <div className={[
      bslStyles['bit-basic-layout'],
      bslStyles['bit-basic-layout-h-m-f'],
    ].join(' ')} style={style}>
      {<>{children}</>}
    </div>
  </>;
};

export default BasicLayout;
