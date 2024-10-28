import { cn } from '@shared/lib/utils';
import { ReactElement } from 'react';

type Props = {
  className?: string;
  nothingClassName?: string;
  items: (null | string | number | ReactElement)[];
};

const Grid = ({ className, nothingClassName, items }: Props) => {
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
    <div className="grid gap-2 lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {items}
    </div>
  );
};

export default Grid;
