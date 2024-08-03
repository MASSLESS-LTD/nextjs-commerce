'use client';
import clsx from 'clsx';
import { useRef } from 'react';

type Props = {
  children: any;
  className?: string;
};

export const ArcCard = ({ children = null, className = '' }: Props) => {
  const boundingRef = useRef<DOMRect | null>(null);

  return (
    <div className="flex flex-col [perspective:800px]">
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 20;
          const yRotation = (0.5 - yPercentage) * 20;

          ev.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
          ev.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
          ev.currentTarget.style.setProperty('--x', `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty('--y', `${yPercentage * 100}%`);
        }}
        className={clsx(
          'group relative mx-auto grid w-[50%] grid-rows-[200px_120px_40px] rounded-md p-4 transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] lg:w-[100%]',
          className
        )}
      >
        {children}
        {/* light shine */}
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
      </div>
    </div>
  );
};
