import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import Button from '../shared/Button';

import FormGroup from '../components/Form/FormGroup';
import FormInput from '../components/Form/FormInput';
import FormLabel from '../components/Form/FormLabel';

import { RootState } from '../store';
import Loader from '../components/Loader';

export type FormValues = {
  firstname?: string;
  lastname?: string;
  dob?: Date;
  dateEnrolled?: Date;
};

interface SearchFormProps extends HTMLAttributes<HTMLFormElement> {
  setSearchData: React.Dispatch<React.SetStateAction<FormValues>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchForm: React.FC<SearchFormProps> = ({
  setSearchData,
  setPage,
  ...props
}) => {
  const [searching, setSearching] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>();

  const { loading } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    if (!loading) setSearching(false);
  }, [loading, setSearching]);

  return (
    <form
      {...props}
      onSubmit={handleSubmit((data) => {
        setPage(1);
        setSearchData(data);
        setSearching(true);
      })}
      className={`flex flex-wrap gap-y-2 items-end justify-start w-full text-sm gap-x-2 ${props.className}`}
    >
      <div className="flex flex-wrap gap-y-2 items-end justify-start text-sm gap-x-2">
        <FormGroup className="!flex-row items-center gap-x-2 w-min">
          <FormLabel className="w-20 lg:w-max" htmlFor="firstname">
            First Name:
          </FormLabel>
          <FormInput type="text" {...register('firstname')} />
        </FormGroup>
        <FormGroup className="!flex-row items-center gap-x-2">
          <FormLabel className="w-20 lg:w-max" htmlFor="lastname">
            Last Name:
          </FormLabel>
          <FormInput type="text" {...register('lastname')} />
        </FormGroup>
        <FormGroup className="!flex-row items-center gap-x-2">
          <FormLabel className="w-20 lg:w-max" htmlFor="dob">
            Date of Birth:
          </FormLabel>
          <FormInput type="date" {...register('dob')} className="text-xs" />
        </FormGroup>
        <FormGroup className="!flex-row items-center gap-x-2">
          <FormLabel className="w-20 lg:w-max" htmlFor="dateEnrolled">
            Date Enrolled:
          </FormLabel>
          <FormInput
            type="date"
            {...register('dateEnrolled')}
            className="text-xs"
          />
        </FormGroup>
      </div>
      <Button type="submit" disabled={loading || searching} className="">
        {searching ? <Loader height="30" width="30" /> : 'Search'}
      </Button>
    </form>
  );
};

export default SearchForm;
