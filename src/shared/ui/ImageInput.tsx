'use client';

import React, { ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  url?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageForm: 'circle' | 'square';
};

const ImageInput = ({ url, onChange, imageForm }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Image
        src={url ?? '/blank_item.jpg'}
        alt="image"
        title="Image input"
        width={512}
        height={512}
        priority={true}
        className={clsx('cursor-pointer shrink-0 object-cover', {
          ['rounded-full w-32 h-32 xl:w-48 xl:h-48']: imageForm === 'circle',
          ['rounded-lg w-full h-32 xl:h-48']: imageForm === 'square',
        })}
        onClick={() => inputRef.current?.click()}
      />
      <input
        className="hidden"
        ref={inputRef}
        type="file"
        onChange={onChange}
      />
    </>
  );
};

export default ImageInput;
