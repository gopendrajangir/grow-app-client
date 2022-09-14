import React from 'react';

import { ThreeDots } from 'react-loader-spinner';

interface LoaderProps {
  height?: string;
  width?: string;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  height = '80',
  width = '80',
  color = '#ddd',
}) => {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default Loader;
