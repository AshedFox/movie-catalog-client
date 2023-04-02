import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = {
  id?: string;
  name: string;
  label: string;
  error?: string;
} & ComponentPropsWithoutRef<'input'>;

const Field = forwardRef<HTMLInputElement, Props>(
  (
    { id, label, type, name, error, required, onChange, ...otherProps }: Props,
    ref,
  ) => (
    <div>
      <label className="text-sm font-medium mb-2" htmlFor={id ?? name}>
        {label}
        {required && <span className="text-sm text-red-500">*</span>}
      </label>
      <input
        id={id}
        ref={ref}
        type={type}
        className={clsx(
          'appearance-none rounded w-full py-2 px-3 leading-tight',
          'bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-100',
          'border border-gray-200 dark:border-gray-600',
          'focus:outline-none',
          {
            'border-red-500': error,
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
