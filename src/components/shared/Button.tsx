import React from 'react';

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  return (
    <button
      {...props}
      className={`flex items-center rounded bg-sky-900 hover:bg-sky-800 p-1 px-2.5 h-8 text-sm text-slate-100 fill-slate-100 dark:bg-slate-100 dark:text-slate-800 dark:fill-slate-800 dark:hover:bg-slate-200 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
