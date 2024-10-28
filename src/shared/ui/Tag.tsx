import { cn } from '@shared/lib/utils';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & {
  children?: string | number | boolean;
  Icon?: ReactNode;
};

const Tag = ({ className, children, Icon, ...props }: Props) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg px-2.5 h-6 shrink-0 flex gap-1 items-center justify-center font-medium text-xs leading-none bg-gray-500 dark:bg-gray-700 text-white',
        className,
      )}
      {...props}
    >
      {Icon ? Icon : null}
      {children}
    </div>
  );
};

export default Tag;
