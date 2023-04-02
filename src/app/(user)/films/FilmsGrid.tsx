import React from 'react';
import { GetFilmsQuery } from '@lib/graphql/__generated__/graphql';
import FilmGridItem from './FilmGridItem';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type Props = {
  items: GetFilmsQuery['getFilms']['nodes'];
  variant: 'mini' | 'full';
};

const FilmsGrid = ({ items, variant }: Props) => {
  if (items.length === 0) {
    return <div className="m-auto">Nothing found...</div>;
  }

  return (
    <div
      className={clsx('grid gap-2', {
        ['grid-cols-1 divide-y']: variant === 'mini',
        ['lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4']:
          variant === 'full',
      })}
    >
      {items.map((film, index) => (
        <motion.div
          key={film.id}
          initial={{ opacity: 0, y: '50%' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '300px 0px 300px 0px ' }}
        >
          <FilmGridItem film={film} variant={variant} />
        </motion.div>
      ))}
    </div>
  );
};

export default FilmsGrid;
