import React from 'react';
import clsx from 'clsx';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

type Props = {
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  value: boolean;
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'w-8 h-4',
  md: 'w-14 h-7',
  lg: 'w-20 h-10',
};

const SIZE_CLASSES_BALL: Record<Size, string> = {
  sm: 'w-4 h-4',
  md: 'w-7 h-7',
  lg: 'w-10 h-10',
};

const LIGHT_THEME_CLASSES: Record<Variant, string> = {
  primary: 'bg-primary-500 hover:bg-primary-600',
  secondary: 'bg-gray-500 hover:bg-gray-600',
  success: 'bg-green-500 hover:bg-green-600',
  warning: 'bg-yellow-500 hover:bg-yellow-600',
  danger: 'bg-red-500 hover:bg-red-600',
};

const DARK_THEME_CLASSES: Record<Variant, string> = {
  primary: 'dark:bg-primary-700 dark:hover:bg-primary-600',
  secondary: 'dark:bg-gray-700 dark:hover:bg-gray-600',
  success: 'dark:bg-green-700 dark:hover:bg-green-600',
  warning: 'dark:bg-yellow-700 dark:hover:bg-yellow-600',
  danger: 'dark:bg-red-700 dark:hover:bg-red-600',
};

const RING_CLASSES: Record<Variant, string> = {
  primary: 'focus:ring-primary-500',
  secondary: 'focus:ring-gray-500',
  success: 'focus:ring-green-500',
  warning: 'focus:ring-yellow-500',
  danger: 'focus:ring-red-500',
};

const Switch = ({
  onClick,
  variant = 'primary',
  size = 'md',
  value,
}: Props) => {
  return (
    <div
      className={clsx(
        'cursor-pointer flex items-center relative shrink-0 overflow-hidden rounded-full',
        'ring-1 ring-gray-300 dark:ring-gray-600',
        'bg-gray-100 dark:bg-gray-800',
        SIZE_CLASSES[size],
        RING_CLASSES[variant],
      )}
      onClick={onClick}
    >
      <div
        className={clsx(
          'rounded-full transition duration-300 ease-in-out',
          SIZE_CLASSES_BALL[size],
          LIGHT_THEME_CLASSES[variant],
          DARK_THEME_CLASSES[variant],
          {
            ['ml-0']: !value,
            ['ml-auto']: value,
          },
        )}
      />
    </div>
  );
};

export default Switch;
