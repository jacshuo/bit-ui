import React from 'react';
import classNames from 'classnames/bind';
import {IInputComponentProps} from './IInputComponentProps';
import inputStyles from './Input.module.scss';

export interface IInput extends IInputComponentProps<any> {

}

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const cls = classNames.bind(inputStyles)('bit-input', {
    'bit-input-small': props.size === 'small',
    'bit-input-large': props.size === 'large',
    'success': props.success,
    'warn': props.warn,
    'danger': props.danger,
    'bit-input-with-prefix': props.prefix,
    'bit-input-with-suffix': props.suffix,
    'rounded': props.rounded,
    'readonly': props.readOnly,
    'disabled': props.disabled,
  });
  const renderPrefix = (): React.ReactNode => {
    switch (typeof (props.prefix)) {
      case 'function':
        return (<div
          className={inputStyles['bit-input-prefix']}>{props.prefix()}</div>);
      case 'string':
        return (<div
          className={inputStyles['bit-input-prefix']}>{props.prefix}</div>);
      default:
        return null;
    }
  };
  const renderSuffix = (): React.ReactNode => {
    switch (typeof (props.suffix)) {
      case 'function':
        return (<div
          className={inputStyles['bit-input-suffix']}>{props.suffix()}</div>);
      case 'string':
        return (<div
          className={inputStyles['bit-input-suffix']}>{props.suffix}</div>);
      default:
        return null;
    }
  };

  return <>
    <div className={cls}>
      {
        renderPrefix()
      }
      <input
        maxLength={props.maxLen}
        minLength={props.minLen}
        disabled={props.disabled}
        readOnly={props.readOnly}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder || '请输入'}
        autoFocus={props.autoFocus}
      />
      {
        renderSuffix()
      }
    </div>
  </>;
};

export default Input;
