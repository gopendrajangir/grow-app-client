import axios from 'axios';
import { FormValues } from '../containers/SearchForm';

export const baseUrl = "http://localhost:8080";

export const getAllEmployees = (page: number, limit: number, searchData: FormValues) => {
  let queryString = '';
  (Object.keys(searchData) as Array<keyof FormValues>).forEach((key) => {
    if (searchData[key])
      queryString += `${key}=${searchData[key]}&`;
  })
  console.log(`${baseUrl}/employees?${queryString}page=${page}&limit=${limit}`);
  return axios.get(`${baseUrl}/employees?${queryString}page=${page}&limit=${limit}`)
};

export const createEmployee = (data: any) => axios.post(`${baseUrl}/employees`, data);

export const getEmployee = (id: string) => axios.get(`${baseUrl}/employees/${id}`);

export const getTotal = () => axios.get(`${baseUrl}/employees/total`);

export const updateEmployee = (id: string, data: any) => axios.patch(`${baseUrl}/employees/${id}`, data);

export const deleteEmployee = (id: string) => axios.delete(`${baseUrl}/employees/${id}`);
