'use client';

import Image from 'next/image';
import AnimatedGridPattern from '../../components/magicui/animated-grid-pattern';
import { cn } from '../../lib/utils';
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
{/*       <Link href={'/replies'}>
        <p className="z-10 text-blue-600 underline whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter ">
          My direct replies{' '}
        </p>
      </Link>
      <p>
        <span className=" text-xl opacity-90 text-white font-medium">
          {' '}
          to the person I trust the most{' '}
        </span>
      </p>
      <br /> <br /> */}
      {/* <br />
      <br />
      <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black dark:text-white">
        I am currently learning{' '}
        <span className=" underline text-blue-600">
          <Link href={'https://dart.dev/'}>dart</Link>
        </span>{' '}
        and{' '}
        <span className=" underline text-blue-600">
          <Link href={'https://flutter.dev/'}>flutter</Link>
        </span>{' '}
        for building Native Apps for Android and iOS
      </p>
      <br />
      <ReactPlayer
        url="/and_std.mp4"
        controls={true}
        width="80vw" // Show native player controls
      />
      <br />
      <br /> */}
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        {"You can't even unblock my profile"} <br/> 
        <Link href={"https://www.instagram.com/p/C6w1v8bsPsp/?igsh=YTRmZzQ4Mzlxb3dv"}>
        <span className='text-blue-600 underline'>{'https://www.instagram.com/p/C6w1v8bsPsp/?igsh=YTRmZzQ4Mzlxb3dv'}</span>
        </Link> (even you know it yourself I would never ask for the physical one)
        <br/>
        And I trusted you enough to say personal things about me <br/>
      </p>
{/*       <Image
        src="/bg.png"
        unoptimized
        alt="pc_bg"
        width={100}
        height={100}
        className="w-[80vw] h-auto rounded-xl shadow-xl py-24"
      /> */}
      {/* <br />
      <br />
      <br />
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        {
          "Don't worry about me, I won't physically hurt myself, whenever I feel depressed I just remember what my dad had gone through at my age and my pain just disappears"
        }{' '}
        <br />I <s>remember</s> <span className="font-extrabold">love</span> you
        everyday, I left discord so I {"can't"} sponsor your account anymore
      </p> */}
      {/* <p>
        The thing I hate the most about you is that whenever I need help from you just completely go blank, like this way you are going to complete your own hospital dream and helping poor people? <br/>
        bolte ho weak r? <br/>
        mera haar ek credentials mein tumhara birthday hai main frankly bol deta hu <br/>
        mera desktop wallpaper mein tumhara birthday hai, screen startup ke time hi dekh k tumhara yaad aata hai <br/>
        main kabhi weak nahi hone dunga mera promise, jhuth aap bol sakte ho aur weak/end aap hi karsakte ho, parr bharosa matt todiye direct bol dijiega, mereko jhutha dilasa/aasha ya kuch bhi nahi chahiye<br/>
        Bruh SSB why did you also had to be like everyone else betrayer <br />
        Jante ho mere parents aur mera zindagi, movie se kamm nahi bloge
        <br />
        mere dadaji apna time pe cycle mein nitro fit kardiye the, radio khud se
        hi bana diye the (from scratch), apna cycle ko motorcycle bana diye the{' '}
        <br />
        uss samay yeh sab bada chiz tha, mera dadaji ka 22 acre land property +
        Verma Radio Ghar (Tetulmari home + Katras Business Shop) establish
        kardiye, apna time ka best-in-class, overall best electronics shop
        <br />
        Bass unka ek problem tha over-trusting (joh ki mere papa aur mera bhi
        hai), apne bhaiyo aur mere bada-papa log pe <br />
        apna 11 acre land uss zamana mein apne bhaiyo ko free mein dediye
        bharosa karke <br />
        aur badle mein, mere papa jab 9 yrs k the tb hi mere dadaji ka death
        hogya mysteriously <br />
        mere papa ko nahi pata chala death ka reason naa hi meri dadi ko <br />
        mere papa ko 18 yrs, mature hone takk ekdm king wala treatment diya gya{' '}
        <br />
        aur uske baad sab property pe sign karwa ke le liya gya <br />
        mere papa bharosa karke sign karr bhi diye <br />
        mere papa hi se sab ghr ka kaam karwaya jaata tha kapda dhona, gadi saaf
        krwana <br />
        mere papa ka Jharkhand mein rank 2 aagya tha uss samay ka regional
        programming contest mein, infosys se invitation mila, mere bade-papa log
        jaan buch ke papa ko nahi jaane diya papa ko voh letter diya hi nahi
        gya, baad mein officials aaye batane toh unko bol diya gya ki koi Dipen
        Kumar Verma (mere papa) yaha hai hi nahi roz milk feka jaata tha parr
        papa ko nahi milta tha, ghar mein 10-20 kg meat banta tha parr papa aur
        dadi ko sirf 2 piece milta tha, dadi apna bhi papa ke liye baccha deti
        thi <br />
        <br />
        aur uske baad matt jaano, short mein bata rha hu <br />
        mummy aayi, mummy ka saara jewellery dheere dheere le liya gya, yaha
        takk ki roz spoons chori ho jaata tha
        <br />
        papa ko promise mila ki 1-2 yrs mein alag ghar banake dedenge, parr kuch
        hua nahi <br />
        mere papa ka zindagi barbaad kardiya voh log aur abhi besharam log bolta
        hai voh log ka property hai, dehati log circuit ka matlab nahi jaanta
        hoga thik se
        <br />
        <br />
        mere saath bhi abhi takk toh sab jagah se betrayal hi mila hai, tumse,
        saara online dost se
        <br />
        isiliye mummy merepe itna restrictions lagayi hai, samjhe?
        <br />
        humlog ka weakness hi trust hai, aur aise hi log mera bhi zindagi mein
        aate hai <br />
        sacch bolu toh suicidal feelings aata hai kabhi kabhi, ek din kabhi
        karbhi lunga, abb sahem bhi nhi hota hai, vhir apne papa la heartbroken
        smile aur mummy yaad aajaati hai <br />
        aur sacch bolu toh jab se aap mera zindagi mein aaye ho mera academics
        mein khatarnak downfall aaya hai no lies <br />
        <br />
        apna zindagi aisa hi bass chala rha hu aur tumhara tension alag, kaha ho
        drop liye ya koi college kaise nye dost bana rhe ho <br />
        <br />
        <br />
        nahi baat karta koi g se mereko interest bhi nahi hai yeh sab chiz mein,
        SAB, SAA se sirf formality se ke liye baat karta tha dushman thori bana
        lunga kisiko jabki voh dosti karna chahta hai aur naa hi main gs k taraf
        dekhta bhi hu mann se (you are the only exception)
        <br />
        <br />
        <br />
        <br />
        aur sunna chahte ho? mera 12th boards exam k phele mera ghar mein civil
        war chal rha tha, mere papa mummy silent nature ke hai toh aunty humesa
        humlog se hi ladai karti hai bina koi vajah k<br />
        har roz speaker mein gaana bajati thi mera exam k phele, boards k *10
        din phele apna dost ka ghr jaake padhta tha*, jab aaplog aaram se apna
        ghar mein padhte the, main hopeless tha target bhi sirf 75+ rakha tha,
        *mera 12th maths board exam k ek din phele ghr pe police aaye the, pura
        exam sirf police k baare mein sochte rah gya, exam bhi faltu gya* <br />
        Aunty ek din ladai karti hai haanth mein knife rakhke bolti hai mere
        papa ko tera vansh (family) khatam kardenge, dono baccha ko maar denge
        (me and my brother), jisko bhi batata hu sab bolta hai ki koi itna ganda
        kaise hosakta hai jabki main face kiya hu
        <br />
        class 10th se hi suicide wala thoughts aate rhta h emotionless hogya
        tha, aaap aaye tab thora din smile karna sikha parr aap bhi, abb main
        bhi toh insaan hi hu jyada tolerate nahi karpaunga <br />
        aur aaap bhi merese humesa ladai hi karte ho, jab samne wala ka mental
        state nahi jaante toh kuch bolo toh nahi kamm se kamm, kya pta main kuch
        kar baithu <br />
        ek din sab chiz khatam krlene ka mann karta h vahi sabse aasan rahega
        parr vhir meri pyari mummy
      </p> */}
    </main>
  );
}
