'use client';

import { Frown } from 'lucide-react';
import React, { useEffect } from 'react';
import { Button } from 'shared/ui';

type Props = { error: Error; reset: () => void };

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container flex-1 flex flex-col items-center gap-6 justify-center">
      <div className="flex w-[480px] max-w-full gap-x-2.5 items-center">
        <Frown className="w-36 h-36 shrink-0" />
        <div>
          <div className="font-semibold text-lg">Something went wrong!</div>
          <div className="text-justify text-sm">{error.message}</div>
        </div>
      </div>

      <Button className="w-[480px] max-w-full" variant="outline" onClick={reset}>
        Reload
      </Button>
    </main>
  );
};

export default Error;
