import { cn } from '@shared/lib/utils';
import { ReactElement } from 'react';

type Props = {
  className?: string;
  nothingClassName?: string;
  direction?: 'horizontal' | 'vertical';
  items: (null | string | number | ReactElement)[];
};

const List = ({ className, nothingClassName, items, direction = 'vertical' }: Props) => {
  if (items.length === 0) {
    return (
      <div
        className={cn('text-gray-500 text-xl flex items-center justify-center', nothingClassName)}
      >
        Nothing here...
      </div>
    );
  }

  return (
    <ul
      className={cn(
        'flex gap-2 flex-auto',
        {
          'flex-col': direction === 'vertical',
          'items-start': direction === 'horizontal',
        },
        className,
      )}
    >
      {items.map(
        (item) => !item || <li key={typeof item !== 'object' ? item : item.key}>{item}</li>,
      )}
    </ul>
  );
};

export default List;
