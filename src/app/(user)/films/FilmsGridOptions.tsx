'use client';

import React, { useContext } from 'react';
import { Button } from '@components/ui';
import { FilmsGridContext } from './FilmsGridProvider';

const FilmsGridOptions = () => {
  const { setGridVariant } = useContext(FilmsGridContext);

  return (
    <div className="flex ml-auto gap-2">
      <Button size="sm" onClick={() => setGridVariant('mini')}>
        mini
      </Button>
      <Button size="sm" onClick={() => setGridVariant('full')}>
        full
      </Button>
    </div>
  );
};

export default FilmsGridOptions;
