'use client';

import React, {
  Children,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';

type Props = PropsWithChildren<{
  visibleCount: number;
  autoMoveInterval?: number;
}>;

const Carousel = ({ visibleCount, autoMoveInterval, children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isItemVisible = (index: number) => {
    const halfVisibleCount = Math.floor(visibleCount / 2);
    const totalCount = Children.count(children);

    if (currentIndex <= halfVisibleCount) {
      return index < visibleCount;
    } else if (currentIndex >= totalCount - halfVisibleCount - 1) {
      return index >= totalCount - visibleCount;
    } else {
      return (
        index >= currentIndex - halfVisibleCount &&
        index <= currentIndex + halfVisibleCount
      );
    }
  };

  const moveNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === Children.count(children) - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, [children]);

  const movePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return Children.count(children) - 1;
      }
      return prev - 1;
    });
  }, [children]);

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
      <div className="flex flex-auto flex-col gap-4">
        <ul className="relative flex flex-shrink-0 w-full gap-2 overflow-hidden">
          {Children.map(children, (child, index) => {
            /* TODO: Fix animation */

            const isVisible = isItemVisible(index);
            return (
              isVisible && (
                <li
                  key={index}
                  className={clsx('transition-all duration-500 w-full', {
                    'w-full': isVisible,
                    'w-0 overflow-hidden ': !isVisible,
                    'scale-90 opacity-[80%]':
                      isVisible && index !== currentIndex,
                    'translate-x-full': !isVisible && index > currentIndex,
                    '-translate-x-full': !isVisible && index < currentIndex,
                  })}
                >
                  {child}
                </li>
              )
            );
          })}
        </ul>
        <ul className="flex justify-center gap-1">
          {Children.map(children, (_, index) => (
            <li
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
