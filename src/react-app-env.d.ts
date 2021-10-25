// / <reference types="react-scripts" />
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.png' {
  const value: any;
  export default value;
}
declare module '*.ico' {
  const value: any;
  export default value;
}
declare module '*.svg' {
  const value: any;
  export default value;
}
