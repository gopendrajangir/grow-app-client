import React, { HTMLAttributes } from 'react';

import Sprite from '../assets/img/sprite.svg';

interface IconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: string;
}

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${Sprite}#icon-${icon}`} />
    </svg>
  );
};

export default Icon;
