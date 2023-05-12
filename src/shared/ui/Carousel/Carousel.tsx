'use client';

import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import CarouselItems from './CarouselItems';

type Props = {
  visibleCount: number;
  autoMoveInterval?: number;
  itemsHeight?: number;
  items: Array<{
    key: string;
    content: ReactNode;
  }>;
};

const Carousel = ({
  visibleCount,
  autoMoveInterval,
  items,
  itemsHeight,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isItemVisible = (index: number) => {
    const halfVisibleCount = Math.floor(visibleCount / 2);

    if (currentIndex <= halfVisibleCount) {
      return index < visibleCount;
    } else if (currentIndex >= items.length - halfVisibleCount - 1) {
      return index >= items.length - visibleCount;
    } else {
      return (
        index >= currentIndex - halfVisibleCount &&
        index <= currentIndex + halfVisibleCount
      );
    }
  };

  const moveNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === items.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, [items.length]);

  const movePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return items.length - 1;
      }
      return prev - 1;
    });
  }, [items.length]);

  useEffect(() => {
    if (autoMoveInterval) {
      const timer = setInterval(() => {
        moveNext();
      }, autoMoveInterval);

      return () => clearInterval(timer);
    }
  }, [autoMoveInterval, moveNext]);

  return (
    <div className="relative flex gap-5 items-center">
      <button
        className="transition-colors duration-300 cursor-pointer text-gray-900 dark:text-gray-50 focus:outline-none hover:text-primary-500 dark:hover:text-primary-700"
        onClick={movePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex flex-col flex-auto gap-4">
        <CarouselItems
          items={items}
          height={itemsHeight}
          isItemVisible={isItemVisible}
          currentIndex={currentIndex}
        />
        <ul className="flex justify-center gap-1">
          {items.map((_, index) => (
            <li
              key={index}
              className={clsx(
                'cursor-pointer h-3 rounded-xl',
                'transition-all duration-500',
                index === currentIndex
                  ? 'bg-primary-500 dark:bg-primary-700 w-8'
                  : 'bg-gray-500 dark:bg-gray-700 hover:bg-gray-600 w-3',
              )}
              onClick={() => {
                setCurrentIndex(index);
              }}
            />
          ))}
        </ul>
      </div>
      <button
        className="cursor-pointer transition-colors duration-300 text-gray-900 dark:text-gray-50 focus:outline-none hover:text-primary-500 dark:hover:text-primary-700"
        onClick={moveNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
