import React, { FC, memo } from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

type Size = 'sm' | 'md' | 'lg';

const sizeMap: Record<Size, string> = {
  sm: 'w-5 h-5 lg:w-6 lg:h-6 2xl:h-7 2xl:w-7',
  md: 'w-8 h-8 lg:w-9 lg:h-9 2xl:h-10 2xl:w-10',
  lg: 'w-12 h-12 lg:w-14 lg:h-14 2xl:h-16 2xl:w-16',
};

type Props = {
  className?: string;
  size?: Size;
  imageSrc?: string | StaticImageData;
};

const Avatar: FC<Props> = ({ size = 'md', imageSrc, className }) => {
  return (
    <Image
      className={clsx(
        'overflow-hidden rounded-full border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800',
        sizeMap[size],
        className,
      )}
      loading="lazy"
      src={imageSrc ?? '/blank_profile.png'}
      alt="avatar"
      width={256}
      height={256}
    />
  );
};

export default memo(Avatar);
