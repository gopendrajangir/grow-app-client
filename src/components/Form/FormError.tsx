import React, { HTMLAttributes } from 'react';

const FormError: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p {...props} className={`text-red-400 text-sm`}>
      {children}
    </p>
  );
};

export default FormError;
