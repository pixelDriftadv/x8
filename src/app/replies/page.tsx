'use client';

import Image from 'next/image';
import AnimatedGridPattern from '../../../components/magicui/animated-grid-pattern';
import { cn } from '../../../lib/utils';
import ReactPlayer from 'react-player';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-8">
      <p className="z-10  whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
        {
          'After going through things like you not recognizing me and only interaction through stories, there might be a possibilty your stories are not meant for anybody or upon checking the time of upload of your stories they sync with the time of stories upload of'
        }{' '}
        <span className=" text-blue-600 underline">
          <Link href={'https://instagram.com/itz_sahil_732'}>
            @itz_sahil_732
          </Link>
        </span>{' '}
        and also the profile picture
      </p>
      <p className="z-10  whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
        So if they are really for me then unblock my
        <span className=" text-blue-600 underline">
          <Link href={'https://instagram.com/advwastaken'}>
            {' @advwastaken '}
          </Link>
        </span>
        account I wont send any friend request or messages or any views, just to
        verify it, so please understand
      </p>
      <Link href={'/replies/05-07-2024'}>
        <p className="z-10 text-blue-600 underline whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
          {'05-07-2024'}
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
