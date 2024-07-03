import Image from 'next/image';
import AnimatedGridPattern from '../../components/magicui/animated-grid-pattern';
import { cn } from '../../lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      <p className="z-10 whitespace-pre-wrap text-center text-sm font-extrabold tracking-tighter text-black dark:text-white">
       If I still couldnt make you unblock and make me a friend then goodbye, enjow your life with i_s_732, im leaving everything now</p>
    </main>
  );
}
