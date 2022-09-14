import React, { HTMLAttributes, HTMLInputTypeAttribute } from 'react';

interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={`h-8 px-2 rounded outline-none border border-1 dark:border-slate-700 bg-transparent w-36 ${props.className}`}
      />
    );
  }
);

export default FormInput;
