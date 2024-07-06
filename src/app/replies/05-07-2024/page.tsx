'use client';

import Image from 'next/image';
import AnimatedGridPattern from '../../../../components/magicui/animated-grid-pattern';
import { cn } from '../../../../lib/utils';
import ReactPlayer from 'react-player';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-8">
      <Link href={'/replies/05-07-2024/1'}>
        <p className="z-10 text-blue-600 underline whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          {'1'}
        </p>
      </Link>
      <Link href={'/replies/05-07-2024/2'}>
        <p className="z-10 text-blue-600 underline whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          {'2'}
        </p>
      </Link>
      <Link href={'/replies/05-07-2024/3'}>
        <p className="z-10 text-blue-600 underline whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          {'3'}
        </p>
      </Link>
      <Link href={'/replies/05-07-2024/4'}>
        <p className="z-10 text-blue-600 underline whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          {'4'}
        </p>
      </Link>
      <Link href={'/replies/05-07-2024/5'}>
        <p className="z-10 text-blue-600 underline whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          {'5'}
        </p>
      </Link>
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[100%] skew-y-12'
        )}
      />
    </main>
  );
}
