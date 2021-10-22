import React from 'react';

export interface IBitComponentProps<T> extends React.PropsWithChildren<any> {
  theme?: 'dark' | 'light',
  render?: (props?: IBitComponentProps<any>) => React.ReactNode
  componentConfig?: any,
}
