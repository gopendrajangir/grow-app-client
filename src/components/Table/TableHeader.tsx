import React from 'react';

const TableHeader: React.FC = React.memo(() => {
  const headings = [
    'Sr No.',
    'First Name',
    'Last Name',
    'Date of Birth',
    'Date Enrolled',
    'Department',
  ];
  return (
    <thead className="h-10 bg-slate-300 dark:bg-cyan-900 text-slate-900 dark:text-slate-300">
      <tr>
        {headings.map((heading) => {
          console.log(heading);
          return (
            <th
              key={heading}
              className="font-medium text-sm whitespace-nowrap px-2"
            >
              {heading}
            </th>
          );
        })}
      </tr>
    </thead>
  );
});

export default TableHeader;
