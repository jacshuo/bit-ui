import React, {CSSProperties} from 'react';

export interface ITypography extends React.PropsWithChildren<any> {
  success?: boolean;
  warn?: boolean;
  danger?: boolean;
  plain?: boolean;
  style?: CSSProperties | undefined;
}


