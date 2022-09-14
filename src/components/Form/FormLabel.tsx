import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ children, ...props }) => {
  return (
    <label {...props} className={`text-xs w-max ${props.className}`}>
      {children}
    </label>
  );
};

export default FormLabel;
