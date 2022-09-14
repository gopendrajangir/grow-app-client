import React from 'react';

import { Link, LinkProps } from 'react-router-dom';

const LinkButton: React.FC<LinkProps> = (props) => {
  return (
    <Link
      {...props}
      to="/employees/create"
      className={`flex items-center rounded bg-sky-900 hover:bg-sky-800 p-1.5 pr-3 text-slate-100 fill-slate-100 dark:bg-slate-100 dark:text-slate-800 dark:fill-slate-800 dark:hover:bg-slate-200 ${props.className}`}
    >
      {props.children}
    </Link>
  );
};

export default LinkButton;
