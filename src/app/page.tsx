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
       bruh Sana you are the prettiest and the most precious thing i could ever have (after my family) so be safe and healthy and qualify NEET, become a doctor, complete your dreams, instead of focusing on me, I am a human afterall and yeah unblock me, I blocked 695 ppl on discord, I am being blocked by someone for the first time in my life</p>
    </main>
  );
}
