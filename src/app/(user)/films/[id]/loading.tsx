import { Loader } from 'lucide-react';
import React from 'react';

const Loading = () => {
  return (
    <main className="flex items-center justify-center flex-auto">
      <Loader className="animate-spin w-12 h-12" />
    </main>
  );
};

export default Loading;
