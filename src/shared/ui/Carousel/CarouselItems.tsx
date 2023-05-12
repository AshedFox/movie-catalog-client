import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  currentIndex: number;
  isItemVisible: (itemIndex: number) => boolean;
  height?: number;
  items: Array<{
    key: string;
    content: ReactNode;
  }>;
};

const CarouselItems = ({
  items,
  isItemVisible,
  currentIndex,
  height,
}: Props) => {
  return (
    <ul
      className="relative flex w-full items-center overflow-hidden shrink-0"
      style={{
        height,
      }}
    >
      {items.map(({ key, content }, index) => {
        const isVisible = isItemVisible(index);
        return (
          isVisible && (
            <li
              key={key}
              className={clsx(
                'flex flex-col shrink-0 overflow-hidden transition-all duration-500',
                {
                  'w-full mx-1': isVisible,
                  'opacity-75 scale-90': isVisible && index !== currentIndex,
                  'translate-x-full': !isVisible && index > currentIndex,
                  '-translate-x-full': !isVisible && index < currentIndex,
                },
              )}
            >
              {content}
            </li>
          )
        );
      })}
    </ul>
  );
};

export default CarouselItems;
