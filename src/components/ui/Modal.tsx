'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  rootId?: string;
  title?: string;
  children: ReactNode;
  showModal?: boolean;
  onClose?: () => void;
  id?: string;
  zIndex?: number;
  closable?: boolean;
};

const Modal = ({
  rootId,
  id,
  zIndex = 10,
  showModal = true,
  onClose,
  title = '',
  children,
  closable = true,
}: Props) => {
  const modalRootRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    modalRootRef.current = rootId
      ? document.getElementById(rootId)
      : document.body;
    setMounted(true);
  }, [rootId]);

  if (!mounted || !modalRootRef.current || !showModal) {
    return <></>;
  }

  return createPortal(
    <div
      style={{ zIndex }}
      id={id}
      className="fixed z-10 flex w-screen h-screen left-0 top-0 bg-black/50 overflow-hidden"
      onClick={onClose}
    >
      <div
        className="relative m-auto overflow-hidden max-w-[95%] max-h-[95%] gap-4 bg-white rounded text-black flex flex-col min-w-[50%] dark:bg-black dark:text-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 items-center">
          <h2>{title}</h2>
          {closable && (
            <button
              onClick={onClose}
              className="cursor-pointer ml-auto transition-colors duration-300 text-gray-900 dark:text-gray-50 focus:outline-none hover:text-red-500 dark:hover:text-red-700"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                stroke="none"
              >
                <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
              </svg>
            </button>
          )}
        </div>
        <div className="flex overflow-hidden">{children}</div>
      </div>
    </div>,
    modalRootRef.current,
  );
};

export default Modal;
