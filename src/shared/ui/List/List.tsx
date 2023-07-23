import clsx from 'clsx';
import React, { ReactNode } from 'react';
import ListItemWrapper from './ListItemWrapper';

type Props = {
  direction?: 'horizontal' | 'vertical';
  items: Array<{
    key: string | number;
    content: ReactNode;
  }>;
};

const List = ({ items, direction = 'vertical' }: Props) => {
  if (items.length === 0) {
    return <div className="m-auto">Nothing here...</div>;
  }

  return (
    <ul
      className={clsx('flex gap-2 flex-auto', {
        'flex-col': direction === 'vertical',
        'items-start': direction === 'horizontal',
      })}
    >
      {items.map(({ key, content }, index) => (
        <ListItemWrapper key={key}>{content}</ListItemWrapper>
      ))}
    </ul>
  );
};

export default List;
