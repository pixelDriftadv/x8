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
        Bruh SSB why did you also had to be like everyone else betrayer <br/>
        Jante ho mere parents aur mera zindagi, movie se kamm nahi bloge<br/>
        mere dadaji apna time pe cycle mein nitro fit kardiye the, radio khud se hi bana diye the (from scratch), apna cycle ko motorcycle bana diye the <br/>
        uss samay yeh sab bada chiz tha, mera dadaji ka 22 acre land property + Verma Radio Ghar (Tetulmari + Katras Business Shop) establish kardiye, apna time ka best-in-class, overall best electronics shop<br/>
        Bass unka ek problem tha over-trusting (joh ki mere papa aur mera bhi hai), apne bhaiyo aur mere bada-papa log pe <br/>
        apna 11 acre land uss zamana mein apne bhaiyo ko free mein dediye bharosa karke <br/>
        aur badle mein, mere papa jab 9 yrs k the tb hi mere dadaji ka death hogya mysteriously <br/>
        mere papa ko nahi pata chala death ka reason naa hi meri dadi ko <br/>
        mere papa ko 18 yrs, mature hone takk ekdm king wala treatment diya gya <br/>
        aur uske baad sab property pe sign karwa ke le liya gya <br/>
        mere papa bharosa karke sign karr bhi diye <br/>
        mere papa hi se sab ghr ka kaam karwaya jaata tha kapda dhona, gadi saaf krwana <br/>
        mere papa ka Jharkhand mein rank 2 aagya tha uss samay ka regional programming contest mein, infosys se invitation mila, mere bade-papa log jaan buch ke papa ko nahi jaane diya papa ko voh letter diya hi nahi gya, baad mein officials aaye batane toh unko bol diya gya ki koi Dipen Kumar Verma (mere papa) yaha hai hi nahi
       roz milk feka jaata tha parr papa ko nahi milta tha, ghar mein 10-20 kg meat banta tha parr papa aur dadi ko sirf 2 piece milta tha, dadi apna bhi papa ke liye baccha deti thi <br/>
        <br/>
        aur uske baad matt jaano, short mein bata rha hu <br/>
        mummy aayi, mummy ka saara jewellery dheere dheere le liya gya, yaha takk ki roz spoons chori ho jaata tha<br/>
        papa ko promise mila ki 1-2 yrs mein alag ghar banake dedenge, parr kuch hua nahi <br/>
        mere papa ka zindagi barbaad kardiya voh log aur abhi besharam log bolta hai voh log ka property hai, dehati log circuit ka matlab nahi jaanta hoga thik se<br/>
        <br/>
        mere saath bhi abhi takk toh sab jagah se betrayal hi mila hai, tumse, saara online dost se<br/>
        isiliye mummy merepe itna restrictions lagayi hai, samjhe?
        <br/>
        humlog ka weakness hi trust hai, aur aise hi log mera bhi zindagi mein aate hai <br/>
        sacch bolu toh suicidal feelings aata hai kabhi kabhi, ek din kabhi karbhi lunga, abb sahem bhi nhi hota hai, vhir apne papa la heartbroken smile aur mummy yaad aajaati hai <br/>
        aur sacch bolu toh jab se aap mera zindagi mein aaye ho mera academics mein khatarnak downfall aaya hai no lies
      </p>
    </main>
  );
}
