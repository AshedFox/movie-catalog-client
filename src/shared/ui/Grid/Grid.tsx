import React, { ReactNode } from 'react';
import GridItemWrapper from './GridItemWrapper';

type Props = {
  items: Array<{
    key: string | number;
    content: ReactNode;
  }>;
};

const Grid = ({ items }: Props) => {
  if (items.length === 0) {
    return <div className="m-auto">Nothing found...</div>;
  }

  return (
    <div className="grid gap-2 lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map(({ key, content }, index) => (
        <GridItemWrapper key={key}>{content}</GridItemWrapper>
      ))}
    </div>
  );
};

export default Grid;
