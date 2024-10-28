import { cn } from '@shared/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('w-8 h-8 text-black dark:text-white', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 28 28"
    >
      <g fill="currentColor" clipPath="url(#clip0_73_12)">
        <path d="M27.503 12.851a.616.616 0 00-.62.008l-3.092 1.859v-2.913a.615.615 0 00-.614-.614h-2.644a5.98 5.98 0 002.371-4.764A6 6 0 0016.912.435c-2.907 0-5.334 2.08-5.878 4.83a4.27 4.27 0 00-3.17-1.413 4.288 4.288 0 00-4.283 4.284 4.27 4.27 0 001.286 3.055H2.808a.615.615 0 00-.614.614v2.485H.768a.615.615 0 00-.614.615v4.217c0 .34.275.615.614.615h1.426v2.485c0 .34.275.615.614.615h8.604l-3.962 3.63a.615.615 0 10.83.906l4.713-4.317 4.712 4.317a.611.611 0 00.869-.038.614.614 0 00-.039-.869l-3.962-3.63h8.604c.34 0 .615-.275.615-.614v-2.913l3.091 1.859a.614.614 0 00.932-.527v-7.255a.615.615 0 00-.313-.535zM16.912 1.664a4.769 4.769 0 014.763 4.763 4.769 4.769 0 01-4.763 4.764 4.769 4.769 0 01-4.763-4.764 4.769 4.769 0 014.763-4.763zm-3.622 9.527h-2.427c.44-.431.782-.956 1.005-1.541a6.03 6.03 0 001.422 1.54zM4.81 8.136a3.058 3.058 0 013.055-3.054 3.058 3.058 0 013.054 3.054 3.058 3.058 0 01-3.054 3.055A3.058 3.058 0 014.81 8.136zM1.383 18.508V15.52h.81v2.988h-.81zm21.18 3.1H3.422V12.42h19.14v9.187zm4.022-2.054l-2.793-1.679v-1.723l2.793-1.679v5.081z"></path>
        <path d="M8.251 21l-1.863-6.072H6.34l.032.656c.017.29.033.598.047.927.015.328.022.624.022.889V21H4.974v-7.74h2.234l1.832 5.919h.032l1.943-5.919h2.234V21h-1.53v-3.663c0-.244.003-.525.01-.842.011-.318.023-.62.038-.906l.031-.65h-.047L9.755 21H8.25zm13.024-7.74L18.644 21h-1.79l-2.626-7.74h1.657l1.456 4.606a23.745 23.745 0 01.291 1.117c.06.236.1.432.122.588.021-.156.058-.352.111-.588l.164-.672c.057-.216.098-.364.122-.445l1.467-4.606h1.657zM16.912 9.637c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21zm0-5.19c-1.092 0-1.98.888-1.98 1.98s.888 1.98 1.98 1.98 1.98-.888 1.98-1.98-.888-1.98-1.98-1.98zM7.865 10.234a2.1 2.1 0 01-2.098-2.098A2.1 2.1 0 017.865 6.04a2.1 2.1 0 012.097 2.097 2.1 2.1 0 01-2.097 2.098zm0-2.966a.87.87 0 000 1.736.87.87 0 000-1.736z"></path>
      </g>
      <defs>
        <clipPath id="clip0_73_12">
          <path fill="#fff" d="M0 0H28V28H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};