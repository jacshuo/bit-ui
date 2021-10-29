import React, {CSSProperties} from 'react';

export interface IBitLayoutComponentProps<T> extends React.PropsWithChildren<any> {
  theme?: 'dark' | 'light',
  style?: CSSProperties | undefined,
  render?: (props?: IBitLayoutComponentProps<any>) => React.ReactNode,
  className?: string | string[],
  componentConfig?: any,
}
