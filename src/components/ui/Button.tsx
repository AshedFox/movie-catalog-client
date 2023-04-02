import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  type?: 'button' | 'submit' | 'reset';
  stretch?: boolean;
}>;

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const LIGHT_THEME_CLASSES: Record<Variant, string> = {
  primary: 'bg-primary-500 hover:bg-primary-600',
  secondary: 'bg-gray-500 hover:bg-gray-600',
  success: 'bg-green-500 hover:bg-green-600',
  warning: 'bg-amber-500 hover:bg-amber-600',
  danger: 'bg-red-500 hover:bg-red-600',
};

const DARK_THEME_CLASSES: Record<Variant, string> = {
  primary: 'dark:bg-primary-700 dark:hover:bg-primary-600',
  secondary: 'dark:bg-gray-700 dark:hover:bg-gray-600',
  success: 'dark:bg-green-700 dark:hover:bg-green-600',
  warning: 'dark:bg-amber-700 dark:hover:bg-amber-600',
  danger: 'dark:bg-red-700 dark:hover:bg-red-600',
};

const RING_CLASSES: Record<Variant, string> = {
  primary: 'focus:ring-primary-500',
  secondary: 'focus:ring-gray-500',
  success: 'focus:ring-green-500',
  warning: 'focus:ring-amber-500',
  danger: 'focus:ring-red-500',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  stretch = false,
  type,
  children,
}) => {
  return (
    <button
      className={clsx(
        'text-white rounded-md transition duration-300 ease-in-out',
        'focus:outline-none focus:ring-2',
        SIZE_CLASSES[size],
        LIGHT_THEME_CLASSES[variant],
        DARK_THEME_CLASSES[variant],
        RING_CLASSES[variant],
        {
          'opacity-50 cursor-not-allowed': disabled,
          'flex-auto': stretch,
        },
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
