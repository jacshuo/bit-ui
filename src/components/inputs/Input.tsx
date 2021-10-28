import React, {createRef, InputHTMLAttributes, useState} from 'react';
import classNames from 'classnames/bind';
import {IInputComponentProps} from './IInputComponentProps';
import inputStyles from './Input.module.scss';
import ControlClear from '../feedbacks/ControlClear';

export interface IInput extends IInputComponentProps<any> {

}

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const [showClear, setShowClear] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string | number | readonly string[] | undefined>(
      '');
  const inputRef = createRef<HTMLInputElement>();
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

  // 受控
  const controlledInputsProps: InputHTMLAttributes<any> = {
    maxLength: props.maxLen,
    minLength: props.minLen,
    disabled: props.disabled,
    readOnly: props.readOnly,
    type: props.type,
    value: props.value,
    placeholder: props.placeholder || '请输入',
    autoFocus: props.autoFocus,
    onChange: (e) => {
      return props.onChange && props.onChange(e);
    },
    onFocus: (e) => (props.onFocus && props.onFocus(e)),
    onBlur: (e) => (props.onBlur && props.onBlur(e)),
    onInput: (e) => (props.onInput && props.onInput(e)),
  };
  // 非受控，自管理状态
  const unControlledInputsProps: InputHTMLAttributes<any> = {
    maxLength: props.maxLen,
    minLength: props.minLen,
    disabled: props.disabled,
    readOnly: props.readOnly,
    type: props.type,
    value: inputVal,
    placeholder: props.placeholder || '请输入',
    autoFocus: props.autoFocus,
    onChange: (e) => {
      setInputVal(e.target.value);
      props.onChange && props.onChange(e);
    },
    onFocus: (e) => (props.onFocus && props.onFocus(e)),
    onBlur: (e) => (props.onBlur && props.onBlur(e)),
    onInput: (e) => (props.onInput && props.onInput(e)),
  };

  return <>
    <div className={cls} onMouseOverCapture={() => {
      setShowClear(true);
    }} onMouseLeave={() => {
      setShowClear(false);
    }}>
      {renderPrefix()
      }
      {!props.value ?
        // 外部未传入value，非受控input
        <input ref={inputRef}
          {...unControlledInputsProps}
        /> :
        // 外部传入value，受控input
        <input ref={inputRef}
          {...controlledInputsProps}
        />
      }
      {
        props.clearable && !props.disabled && !props.readOnly &&
        <ControlClear
          active={props.clearable}
          show={showClear}
          size={12}
          withSuffix={props.suffix != undefined}
          onClick={() => {
            setInputVal('');
            props.onClear && props.onClear();
          }}
        />
      }
      {
        renderSuffix()
      }
    </div>
  </>;
};

export default Input;
