import { Loader } from '@shared/ui';
import { buttonVariants } from '@shared/ui/Button';
import { Header } from '@widgets/header';
import { RandomMoviesList } from '@widgets/random-movies-block';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Home',
};

const Page = () => {
  return (
    <>
      <Header className="relative" />
      <main>
        <section className="h-screen flex bg-primary-500 dark:bg-primary-700">
          <div className="container flex flex-col justify-center items-center m-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-bold mb-6 text-white text-center">
              Watch all you want whenever you want!
            </h1>
            <p className="text-xs lg:text-sm text-gray-200 dark:text-gray-300 text-center mb-12">
              Lorem ipsum dolor sit amet consectetur. Ut ipsum interdum leo aenean morbi gravida
              porta vitae a. Sollicitudin nisl pellentesque tincidunt urna purus. Sed eget feugiat
              integer facilisis quam ut nunc.
            </p>
            <div className="flex gap-5">
              <Link href="/films" className={buttonVariants({ size: 'lg' })}>
                Explore
              </Link>
              <Link href="/sign-up" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                Sign Up
              </Link>
            </div>
          </div>
        </section>
        <section className="h-screen flex bg-gray-50 dark:bg-gray-900">
          <div className="container flex flex-col justify-center items-center m-auto">
            <div className="flex flex-col gap-2">About</div>
          </div>
        </section>
        <section className="h-screen flex relative bg-primary-500 dark:bg-primary-700">
          <div className="container flex flex-col justify-center items-center m-auto">
            <div className="flex flex-col gap-2">Subscriptions</div>
          </div>
        </section>
        <section className="h-screen flex relative py-10">
          <div className="container flex flex-col justify-center items-center m-auto max-h-full overflow-hidden">
            <h2 className="mb-6 text-4xl font-bold">
              Don&apos;t know what to watch? Explore random movies collection!
            </h2>
            <div className="w-full overflow-y-auto p-2">
              <Suspense
                fallback={
                  <div className="flex flex-auto items-center justify-center">
                    <Loader />
                  </div>
                }
              >
                <RandomMoviesList count={10} />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
