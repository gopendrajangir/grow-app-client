import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import TableHeader from '../components/Table/TableHeader';
import TableBody from '../components/Table/TableBody';
import { fetchEmployees } from '../slices/employeesSlice';
import { RootState, useAppDispatch } from '../store';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import Error from '../components/Error';
import SearchBar from '../components/SearchBar';
import { FormValues } from '../containers/SearchForm';

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchData, setSearchData] = useState<FormValues>({});

  const { loading, data, total, error } = useSelector(
    (state: RootState) => state.employees
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees({ page, limit, searchData }));
  }, [page, limit, searchData, dispatch]);

  return (
    <div className="p-5 pt-3 h-full flex flex-col items-center">
      <SearchBar
        className="mb-4 w-full"
        setSearchData={setSearchData}
        setPage={setPage}
      />
      <div className="w-full overflow-auto rounded">
        <table className="table-auto w-full bg-slate-200 dark:bg-slate-700">
          <TableHeader />
          {!loading && !error && data && data.length ? (
            <TableBody data={data} page={page} limit={limit} />
          ) : null}
        </table>
      </div>
      <div className="mt-10">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : data && !data.length ? (
          'No Data available'
        ) : null}
      </div>
      {total ? (
        <Pagination
          page={page}
          limit={limit}
          total={total}
          setPage={setPage}
          setLimit={setLimit}
          className="mt-auto"
        />
      ) : null}
    </div>
  );
};

export default HomePage;
