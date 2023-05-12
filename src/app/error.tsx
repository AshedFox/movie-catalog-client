'use client';

import React, { useEffect } from 'react';
import { Button } from 'shared/ui';

type Props = { error: Error; reset: () => void };

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-grow justify-center">
      <main className="w-work flex flex-col my-10 gap-5 overflow-hidden ">
        <p>Something went wrong!</p>
        <Button variant="primary" onClick={reset}>
          Reload
        </Button>
      </main>
    </div>
  );
};

export default Error;
