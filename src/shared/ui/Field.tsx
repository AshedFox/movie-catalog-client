import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = {
  id?: string;
  name: string;
  label?: string;
  error?: string;
  stretch?: boolean;
} & ComponentPropsWithoutRef<'input'>;

const Field = forwardRef<HTMLInputElement, Props>(
  ({ id, label, name, error, disabled, stretch, required, ...otherProps }: Props, ref) => (
    <div
      className={clsx('flex flex-col gap-1', {
        'flex-auto': stretch,
      })}
    >
      {label && (
        <label className="text-sm font-medium" htmlFor={id ?? name}>
          {label}
          {required && <span className="text-sm text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        required={required}
        disabled={disabled}
        className={clsx(
          'appearance-none rounded w-full py-2 px-3 leading-tight',
          'bg-gray-50 dark:bg-gray-700',
          'border border-gray-200 dark:border-gray-600',
          'focus:outline-none placeholder:text-gray-500',
          {
            'border-red-500': error,
            'text-gray-600 dark:text-gray-400': disabled,
            'text-gray-800 dark:text-gray-100': !disabled,
          },
        )}
        name={name}
        {...otherProps}
      />
      {error && <p className="text-xs text-red-500 italic">{error}</p>}
    </div>
  ),
);

Field.displayName = 'Field';

export default Field;
