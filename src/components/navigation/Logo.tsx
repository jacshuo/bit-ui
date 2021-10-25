import React, {FunctionComponent} from 'react';
import {IBitLayoutComponentProps} from '../layouts/ILayoutCompomentProps';


export interface ILogoSize {
  width: number;
  height: number;
}

export interface ILogoProps extends IBitLayoutComponentProps<any> {
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
