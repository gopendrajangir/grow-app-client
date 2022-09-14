import React, { HTMLAttributes, useState } from 'react';
import SearchForm, { FormValues } from '../containers/SearchForm';
import Icon from './Icon';

interface SearchBarProps extends HTMLAttributes<HTMLDivElement> {
  setSearchData: React.Dispatch<React.SetStateAction<FormValues>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setSearchData,
  setPage,
  ...props
}) => {
  const [opened, setOpened] = useState(true);
  return (
    <div
      {...props}
      className={`flex flex-col items-end text-slate-800 dark:text-slate-300 dark:fill-slate-300 ${props.className}`}
    >
      <button
        className="flex items-center text-sm"
        onClick={() => setOpened(!opened)}
      >
        {!opened ? (
          <>
            <Icon icon="search" className="h-4 w-4 mr-1" />
            <span>Search</span>
            <Icon icon="keyboard_arrow_down" className="h-5 w-5" />
          </>
        ) : (
          <Icon icon="clear" className="h-6 w-6" />
        )}
      </button>
      {opened && (
        <SearchForm
          className="mt-2"
          setSearchData={setSearchData}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default SearchBar;
