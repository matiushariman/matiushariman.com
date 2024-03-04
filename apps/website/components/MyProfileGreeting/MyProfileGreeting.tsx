import Image from 'next/image';

import Socials from '../Socials/Socials';
import MapPin from '../Icons/MapPin/MapPin';

export function MyProfileGreeting() {
  return (
    <div className="grid items-center gap-4 md:gap-4">
      <div className="relative mx-auto mx-auto inline h-[120px] w-[120px] rounded-full bg-white dark:bg-[#0f1411] md:h-[200px] md:w-[200px]">
        <Image src="/headshot.png" alt="headshot memoji" fill />
      </div>
      <div className="grid gap-2">
        <h1 className="text-center text-xl md:text-2xl">
          Hi there! I'm{' '}
          <span className="text-gold text-2xl font-bold md:text-3xl">
            Matius
          </span>
        </h1>
        <p className="text-center">
          Senior Frontend Engineer &#x2022; Avid Boston Celtics Fan
        </p>
      </div>
      <div>
        <p className="text-center">
          <MapPin className="text-gold mr-1 inline animate-bounce" /> Singapore
        </p>
      </div>
      <div className="flex justify-around md:hidden">
        <Socials />
      </div>
    </div>
  );
}

export default MyProfileGreeting;
