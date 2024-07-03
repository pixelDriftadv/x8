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
      <p className="z-10 whitespace-pre-wrap text-center text-xl font-extrabold tracking-tighter text-black dark:text-white">
       I DONT UNDERSTAND WHATEVER THE LANG YOU USE, KINDLY REPLY IN HINDI/ENGLISH ONLY PLEASE?
        <br />
        <span className=" text-base font-medium">
          {' '}
           {'"weak" and why should I even text you back?'} 
                    <br />

          For another direct complain to my parents? <br /> <br />
          <br />
          Still, {'"weak"? '} <br />
          You abusing my sister, mocking at my works, blocking me dozens of time
          wasnt weakening? <br />
          Its not the text based that weakens but rather the opposite
          un-trustworthy person <br /> <br /> <br />
          Just a month {"you're"} already following itz_s_732? If you think I
          dont have any stalkers, well there are many but for confirmation check
          out @digital_nitya27/_pallavi_deyy/_vanshikaaaa26_ and name initial as the Name
          {/*  <br /> Dont believe me?
          <br />
          Let me just follow one  */} <br /> <br /> <br />
          The only reason I couldnt make a mom-promise that {"you'd"} be my
          lifetime partner because I dont really trust you after all the lies
          and abusing {"you've"} done <br /> <br /> <br />
          Look I wont really just simp over just because how beautiful you look
          and cry over and over again, as far I only loved your beautiful soul with a heartwarming dream<br />
          Also you have a chappri mindset you literally follow a boy with{' '}
          {'"itz"'} in the username and say to me text based are weak, then want
          do you want? <br /> Should I ride with you on a KTM? <br />
          And make lifetime promises and get caught with a new person the next
          day, instead of working and completing my dreams? <br />
          You just made me getting hurt by your actions a sort of daily habit{' '}
          <br />
          Dont trust me just leave me alone <br /> <br />
          <br />
          Following a boy i_s_732? <br />
          When you said your dad dont allow you to talk to us how much time it
          took me to say just block me then? <br />I remembered I forgot to ask
          for help because{' '}
          {
            '"a g" was physically harassing me and it was literalling screwing up my mental health and what you did in return, just blocked me?'
          }{' '}
          <br />
          And you think I should trust you? <br /> <br /> <br />
          Could you make a promise that you wont be talking to a boy ever again
          till we meet again (valid only in emergency conditions)? <br />I could
          do the same promise easily without even a second thought <br /> <br />{' '}
          <br />
          Also if you think {"I'm"} active talking to other gs on discord or
          other russian platforms then <br />I am aleady having the last year of
          my chance of qualifing jee adv, {"I'm"} busy <br />
          Want a challenge? <br />
          Qualify NEET and become a doctor or I will never be your partner,
          enough of kindly asking to study, now its a challenge <br />
          Perfect solution for you and me to stop wasting time <br /> <br />{' '}
          <br />
        </span>
      </p>
    </main>
  );
}
