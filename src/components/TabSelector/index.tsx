import React, { useState, useRef, HTMLAttributes, ReactElement } from 'react';
import Tab, { TabProps } from './Tab';

interface TabSelectorProps extends HTMLAttributes<HTMLDivElement> {
  defaultTab?: number;
  gliderClassName?: string;
  selectedTabClassName?: string;
  children: ReactElement<TabProps>[];
}

const TabSelector: React.FC<TabSelectorProps> = ({
  defaultTab = 0,
  gliderClassName = '',
  selectedTabClassName,
  ...props
}) => {
  const [selectedTabIdx, setSelectedTabIdx] = useState(defaultTab);

  const selectedTabRef = useRef(null);
  const previousSelectedTabRef = useRef(null);

  return (
    <div {...props} className={`flex relative rounded ${props.className}`}>
      {props.children.map((child, i) => {
        return React.cloneElement(child, {
          key: i,
          selectedTabRef,
          previousSelectedTabRef,
          gliderClassName,
          selectedTabClassName,
          selectedTabIdx,
          setSelectedTabIdx,
          index: i,
        });
      })}
    </div>
  );
};

export default React.memo(TabSelector);
