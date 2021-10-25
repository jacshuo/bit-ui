import React from 'react';
import {IInputComponentProps} from './IInputComponentProps';
import inputStyles from './Input.module.scss';

export interface IInput extends IInputComponentProps<any> {

}

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  return <>
    <div className={inputStyles['bit-input']}>
      <input />
    </div>
  </>;
};

export default Input;
