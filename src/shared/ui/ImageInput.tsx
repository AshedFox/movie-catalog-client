'use client';

import { cn } from '@shared/lib/utils';
import Image, { ImageProps } from 'next/image';
import { InputHTMLAttributes, forwardRef } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> &
  Pick<ImageProps, 'alt' | 'src' | 'title' | 'width' | 'height'>;

const ImageInput = forwardRef<HTMLInputElement, Props>(({ className, type, ...props }, ref) => {
  return (
    <>
      <Image
        src={url ?? '/blank_item.jpg'}
        alt="image"
        title="Image input"
        width={512}
        height={512}
        className={cn('cursor-pointer shrink-0 object-cover aspect-video', {
          ['rounded-full w-32 h-32 xl:w-48 xl:h-48']: imageForm === 'circle',
          ['rounded-lg w-full h-32 xl:h-48']: imageForm === 'square',
        })}
        onClick={() => ref?.current?.click()}
      />
      <input className="hidden" ref={ref} type="file" onChange={onChange} />
    </>
  );
});

ImageInput.displayName = 'ImageInput';

export default ImageInput;
