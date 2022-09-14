import React, { useEffect } from 'react';
import { Employee } from '../../slices/employeesSlice';
import { useNavigate } from 'react-router-dom';

interface TableBodyProps {
  data: Employee[];
  page: number;
  limit: number;
}

const TableBody: React.FC<TableBodyProps> = ({ data, page, limit }) => {
  const trClassName = 'h-10 hover:bg-slate-100 dark:hover:bg-slate-600';
  const tdClassName =
    'text-center capitalize p-1 border-b border-slate-100 dark:border-slate-600 text-sm dark:text-slate-300 min-w-max whitespace-nowrap';

  return (
    <tbody>
      {data.map(
        ({ _id, firstname, lastname, dob, dateEnrolled, department }, i) => {
          if (department === 'salesmarketing') department = 'Sales & Marketing';
          if (department === 'hr') department = 'HR';
          return (
            <tr key={_id} className={trClassName}>
              <td className={tdClassName}>{(page - 1) * limit + (i + 1)}.</td>
              <td className={tdClassName}>{firstname}</td>
              <td className={tdClassName}>{lastname}</td>
              <td className={tdClassName}>
                {new Date(dob).toLocaleDateString()}
              </td>
              <td className={tdClassName}>
                {new Date(dateEnrolled).toLocaleDateString()}
              </td>
              <td className={tdClassName}>{department}</td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default TableBody;
