import { Card } from '@shared/ui';

const Loading = () => {
  return (
    <main className="flex flex-col py-4 gap-3 flex-1 overflow-hidden">
      <h1 className="font-semibold text-5xl leading-tight">Series</h1>
      <div className="flex flex-col gap-3 flex-1">
        <div className="grid gap-2 lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {new Array(12).fill(0).map((_, index) => (
            <Card className="animate-pulse" key={index} title="" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
