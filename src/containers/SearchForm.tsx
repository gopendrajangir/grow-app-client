import React, { HTMLAttributes } from 'react';

import { useForm } from 'react-hook-form';
import Button from '../components/shared/Button';
import FormGroup from '../components/Form/FormGroup';

import FormInput from '../components/Form/FormInput';
import FormLabel from '../components/Form/FormLabel';
import { fetchEmployees } from '../slices/employeesSlice';
import { useAppDispatch } from '../store';

export type FormValues = {
  firstname?: string;
  lastname?: string;
  dob?: Date;
  dateEnrolled?: Date;
};

interface SearchFormProps extends HTMLAttributes<HTMLFormElement> {
  setSearchData: React.Dispatch<React.SetStateAction<FormValues>>;
}

const SearchForm: React.FC<SearchFormProps> = ({ setSearchData, ...props }) => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form
      {...props}
      onSubmit={handleSubmit((data) => {
        setSearchData(data);
      })}
      className={`flex flex-wrap gap-y-2 items-end justify-start w-full text-sm gap-x-2 ${props.className}`}
    >
      <div className="flex flex-wrap gap-y-2 items-end justify-start text-sm gap-x-2">
        <FormGroup className="!flex-row items-center gap-x-2 w-min">
          <FormLabel className="w-20 md:w-max" htmlFor="firstname">
            First Name:
          </FormLabel>
          <FormInput type="text" {...register('firstname')} />
        </FormGroup>
        <FormGroup className="!flex-row items-center gap-x-2">
          <FormLabel className="w-20 md:w-max" htmlFor="lastname">
            Last Name:
          </FormLabel>
          <FormInput type="text" {...register('lastname')} />
        </FormGroup>
        <FormGroup className="!flex-row items-center gap-x-2">
          <FormLabel className="w-20 md:w-max" htmlFor="dob">
            Date of Birth:
          </FormLabel>
          <FormInput type="date" {...register('dob')} className="text-xs" />
        </FormGroup>
        <FormGroup className="!flex-row items-center gap-x-2">
          <FormLabel className="w-20 md:w-max" htmlFor="dateEnrolled">
            Date Enrolled:
          </FormLabel>
          <FormInput
            type="date"
            {...register('dateEnrolled')}
            className="text-xs"
          />
        </FormGroup>
      </div>
      <Button type="submit" className="">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
