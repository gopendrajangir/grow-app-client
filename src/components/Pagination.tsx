import React, { HTMLAttributes } from 'react';
import Icon from './Icon';

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  total: number;
  page: number;
  limit: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  page,
  limit,
  setPage,
  setLimit,
  ...props
}) => {
  const left = Math.floor((total - page * limit) / limit);

  return (
    <div
      {...props}
      className={`flex items-center w-full dark:text-slate-300 ${props.className}`}
    >
      <div className="flex items-center ml-auto mr-auto">
        <button
          className="bg-sky-800 dark:bg-white dark:fill-slate-800 hover:bg-sky-700 disabled:bg-slate-400 dark:disabled:bg-slate-300 fill-slate-50 hover:bg-slate-200 h-8 w-8 rounded flex items-center justify-center"
          disabled={page < 2}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <Icon
            icon="minus"
            className="h-4 w-5 flex items-center justify-center"
          />
        </button>
        <div className="h-5 w-10 flex items-center justify-center text-lg">
          {page}
        </div>
        <button
          disabled={left <= 0}
          onClick={() => {
            if (left > 0) {
              setPage(page + 1);
            }
          }}
          className="bg-sky-800 dark:bg-white dark:fill-slate-800 hover:bg-sky-700 disabled:bg-slate-400 dark:disabled:bg-slate-300 fill-slate-50 hover:bg-slate-200 h-8 w-8 rounded flex items-center justify-center"
        >
          <Icon
            icon="add"
            className="h-5 w-5 flex items-center justify-center"
          />
        </button>
      </div>
      <div className="ml-auto text-sm dark:text-slate-300 sm:absolute right-5">
        <span>Results per page :</span>
        <span> {limit}</span>
      </div>
    </div>
  );
};

export default Pagination;
