import React from 'react';

export interface IBitLayoutComponentProps<T> extends React.PropsWithChildren<any> {
  theme?: 'dark' | 'light',
  render?: (props?: IBitLayoutComponentProps<any>) => React.ReactNode
  flex?: boolean,
  flexJustifyContent?: 'center' | 'flex-start' | 'flex-end',
  flexAlignItems?: 'center' | 'flex-start' | 'flex-end',
  flexJustifyItems?: 'center' | 'flex-start' | 'flex-end',
  flexAlignContent?: 'center' | 'flex-start' | 'flex-end',
  componentConfig?: any,
}
