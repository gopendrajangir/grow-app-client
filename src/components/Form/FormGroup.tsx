import React, { HTMLAttributes } from 'react';

const FormGroup: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props} className={`flex flex-col gap-1 ${props.className}`}>
      {children}
    </div>
  );
};

export default FormGroup;
