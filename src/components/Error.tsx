import React, { HTMLAttributes } from 'react';
import Icon from './Icon';

interface ErrorProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message, ...props }) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-center dark:text-slate-300 dark:fill-slate-300 ${props.className}`}
    >
      <Icon icon="error_outline" className="w-10 h-10 mr-2" />
      <span>{message}</span>
    </div>
  );
};

export default Error;
