import React, {
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useRef,
  HTMLAttributes,
} from 'react';
import { useEffect } from 'react';
import slideGlider from './slideGlider';

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  index?: number;
  selectedTabIdx?: number;
  selectedTabRef?: React.MutableRefObject<HTMLButtonElement | null>;
  previousSelectedTabRef?: React.MutableRefObject<HTMLButtonElement | null>;
  setSelectedTabIdx?: Dispatch<SetStateAction<number>>;
  gliderClassName?: string;
  selectedTabClassName?: string;
  clickHandler?: () => void;
}

const Tab: React.FC<TabProps> = ({
  children,
  setSelectedTabIdx,
  gliderClassName,
  selectedTabClassName,
  selectedTabRef,
  previousSelectedTabRef,
  index,
  selectedTabIdx,
  clickHandler,
  ...props
}: TabProps) => {
  const gliderRef = useRef(null);

  useEffect(() => {
    if (selectedTabIdx === index && previousSelectedTabRef && selectedTabRef) {
      slideGlider(gliderRef, previousSelectedTabRef, selectedTabRef);
    }
  }, [selectedTabIdx]);

  return (
    <button
      {...props}
      ref={index === selectedTabIdx ? selectedTabRef : null}
      onClick={() => {
        if (
          previousSelectedTabRef &&
          selectedTabRef &&
          setSelectedTabIdx &&
          (index == 0 || index) &&
          clickHandler
        ) {
          previousSelectedTabRef.current = selectedTabRef.current;
          setSelectedTabIdx(index);
          clickHandler();
        }
      }}
      className={`flex justify-center items-center text-sm pointer relative text-capitalize text-theme-toggler-text font-bold ${
        props.className
      } ${index === selectedTabIdx ? selectedTabClassName : ''}`}
    >
      {index === selectedTabIdx && (
        <div
          ref={gliderRef}
          className={`absolute h-full w-full rounded ${gliderClassName} `}
        ></div>
      )}
      <span className="relative">{children}</span>
    </button>
  );
};

export default Tab;
