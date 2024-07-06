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
        url="/5july/5july.mp4"
        controls={true}
        width="80vw" // Show native player controls
      />
      <br /> <br />
      <p className="z-10 whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
        {'My interpretations, I dont understand what youre trying to say'}
      </p>
      <br /> <br />
      <p className="z-10 flex flex-col items-center justify-center space-x-2 whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
        {'"no relation"'}{' '}
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
        I want to spend most of my time with you before we come to a complete
        end <br />
        I am grateful you told it directly without any further wastage of time
        for both of us <br />I remember all the time we spent together, all the
        good memories <br />I knew it had to come to an end oneday, but I am not
        mentally prepared right now, atleast tell the reason where I went wrong,
        I would definitely recorrect it <br />
        Not gonna lie youre one of the prettiest, purest and the most precious
        thing I could ever afford, I dont want to lose you <br />
        But still if you want to leave, I wont forcefully say you to be attached
        with me either <br />I would make you a sacrifice just like the hundreds
        of time you made for me, thank you so much for everything
      </p>
      <br />
      <br />
      <p className="z-10 flex flex-col items-center justify-center text-center space-x-2 whitespace-pre-wrap text-center text-xl font-bold tracking-tighter ">
        {'"baseless"'}{' '}
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
        That wasnt a script or a movie, that actually happened to my father,
        from the most brilliant in his time, whole state (that time Jharkhand
        was also a part of Bihar) rank 2 with just one book and limited access
        to computer and no access to the internet, to an average business, from
        building a custom operating system and being qualified in Infosys,
        Bangalore at the age of 22, to being an average person
        <br />
        when my grandmother died she had a little dream of seeing of a little
        but happy house of her own child, my father, but gone without even
        seeing the dream being completed <br />
        the first time I saw my father cried, you know how heartbroken he was{' '}
        <br />
        they took everything from my dad and my dad just says to me,{' '}
        {
          '"let them take everything, I believe you\'d make an empire far larger than this, they cant take away your mind"'
        }{' '}
        <br />
        while my mother being an artist never gotten any further opportunities
        just because she was a {'"girl"'}, thats why I always keep telling you
        to purse your dreams instead of things draining your mind power <br />
        my mother fears of my getting betrayed just like my grandfather, father
        so she kept me far away from the society by restrictions <br /> <br />
        I see tears in my dads eyes everyday which he controls, the potential to
        build an empire of his own to wasting his prime years working for the
        people he trusted, to being completely betrayed and still regrets about
        his whole life being wasted <br /> <br />
        I can guarantee you can never see my fathers true laugh or even smile,
        just the fake ones (if you ever see him)
        <br />
        the only time I see him smile is when either I or my brother achieves
        something, the true love
        <br /> <br /> No emotional drama, these are the pain in my head I hide
        behind my fake smile
        <br /> <br /> <br />I trust you, dont betray me this time if you clearly
        want us to end the relation post a {'"no relation"'} story again or
        anything opposite if this is a misinterpretation <br />
        Even I dont know how heartbroken I am gonna be for the rest of my life{' '}
        <br />
        <br />
        Even so, I would like you to request you something
        <br />
        <br />
        <span className="text-red-500">Please be mine</span> <br />
        <span className="text-red-500">Please dont leave me</span>
        <br />
        <span className="text-blue-400">
          Please take care of yourself, everytime I see bad news I just thank
          god my family and you, your family is safe, be careful, stay away from
          strangers dont take anything from strangers, dont go outside after
          20:00, look back even in group/with friends, listen to your parents,
          just remember some restrictions are not restrction its just something
          you havent seen what your parents have
        </span>
      </p>
    </main>
  );
}
