'use client';

import Image from 'next/image';
import AnimatedGridPattern from '../../../../../components/magicui/animated-grid-pattern';
import { cn } from '../../../../../lib/utils';
import ReactPlayer from 'react-player';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-8">
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
      <ReactPlayer
        url="/5july/5july2.mp4"
        controls={true}
        width="80vw" // Show native player controls
      />
      <br /> <br />
      <p className="z-10 whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
        {'My interpretations, if I dont understand what youre trying to say'}
      </p>
      <br /> <br />
      <p className="z-10 flex flex-col items-center justify-center space-x-2 whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
        {'"even if"'}{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-move-right mx-2"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>{' '}
        Text based r? <br />
        So that I can show you I truly {'...'} you, not just for disgusting
        benefits of your beauty, yes I can say it honestly and purely
      </p>
    </main>
  );
}
