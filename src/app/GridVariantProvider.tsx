'use client';

import React, { createContext, ReactNode, useEffect, useState } from 'react';

type GridVariant = 'mini' | 'full';

type ContextProps = {
  gridVariant: GridVariant;
  setGridVariant: (newVariant: GridVariant) => void;
};

export const GridVariantContext = createContext<ContextProps>(null!);

const gridVariantKey = 'grid-variant';

const GridVariantProvider = ({ children }: { children: ReactNode }) => {
  const [gridVariant, setGridVariant] = useState<GridVariant>('mini');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const existingGridVariant = localStorage.getItem(
        gridVariantKey,
      ) as GridVariant | null;

      if (
        !existingGridVariant ||
        !['mini', 'full'].includes(existingGridVariant)
      ) {
        localStorage.setItem(gridVariantKey, 'mini');
      } else {
        setGridVariant(existingGridVariant);
      }
    }
  }, []);

  const handleChange = (gridVariant: GridVariant) => {
    localStorage.setItem(gridVariantKey, gridVariant);
    setGridVariant(gridVariant);
  };

  return (
    <GridVariantContext.Provider
      value={{
        gridVariant,
        setGridVariant: handleChange,
      }}
    >
      {children}
    </GridVariantContext.Provider>
  );
};

export default GridVariantProvider;
