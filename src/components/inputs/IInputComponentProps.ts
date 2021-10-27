import React, {HTMLInputTypeAttribute} from 'react';

export interface IInputComponentProps<T> extends React.PropsWithChildren<any> {
  size?: 'small' | 'middle' | 'large'; // 组件大小
  rounded?: boolean; // 圆角
  readOnly?: boolean;// 只读
  disabled?: boolean; // 禁用
  clearable?: boolean; // 可否清除
  maxLen?: number; // 最大输入长度
  minLen?: number; // 最小输入长度
  regExp?: RegExp; // 过滤正则表达式
  type?: HTMLInputTypeAttribute
  success?: boolean,
  warn?: boolean,
  danger?: boolean,
  rows?: number; // 输入行数，对textarea有效
  placeholder?: string;
  loading?: (() => React.ReactNode) | boolean | null;
  autoFocus?: boolean;
  focused?: boolean;
  focus?: () => void;
  blur?: () => void;
  onFocus?: () => void;
  onClear?: () => void;
  onBlur?: () => void;
  onChange?: () => void;
  onInput?: () => void;
  prefix?: string | (() => React.ReactNode) | null; // 输入框头部内容
  suffix?: (() => React.ReactNode) | string | null; // 输入框尾部内容
  separator?: (() => React.ReactNode) | string | null; // 成对输入框之间分隔符
  value?: string | ReadonlyArray<string> | number | undefined;
}
