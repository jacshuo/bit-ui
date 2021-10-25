import React, {FunctionComponent} from 'react';
import {IBitComponentProps} from '../../lib/ICompomentProps';


export interface ILogoSize {
  width: number;
  height: number;
}

export interface ILogoProps extends IBitComponentProps<any> {
  media?: string,
  size?: ILogoSize,
}

const Logo: FunctionComponent<ILogoProps> = (props) => {
  const {media, size} = props;
  return <>
    <img style={{width: size?.width, height: size?.height}} src={media} />
  </>;
};

export default Logo;
