'use client';

import React, { createContext, ReactNode, useState } from 'react';

type GridVariant = 'mini' | 'full';

type ContextProps = {
  gridVariant: GridVariant;
  setGridVariant: (newVariant: GridVariant) => void;
};

export const FilmsGridContext = createContext<ContextProps>(null!);

const gridVariantKey = 'grid-variant';

const FilmsGridProvider = ({ children }: { children: ReactNode }) => {
  let existingGridVariant = null;

  if (typeof window !== 'undefined') {
    existingGridVariant = localStorage.getItem(
      gridVariantKey,
    ) as GridVariant | null;

    if (
      !existingGridVariant ||
      !['mini', 'full'].includes(existingGridVariant)
    ) {
      localStorage.setItem(gridVariantKey, 'mini');
    }
  }

  const handleChange = (gridVariant: GridVariant) => {
    localStorage.setItem(gridVariantKey, gridVariant);
    setGridVariant(gridVariant);
  };

  const [gridVariant, setGridVariant] = useState<GridVariant>(
    existingGridVariant ?? 'mini',
  );

  return (
    <FilmsGridContext.Provider
      value={{
        gridVariant,
        setGridVariant: handleChange,
      }}
    >
      {children}
    </FilmsGridContext.Provider>
  );
};

export default FilmsGridProvider;
