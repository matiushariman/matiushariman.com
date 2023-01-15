import Image from 'next/image';

export function MyProfileGreeting() {
  return (
    <div className="grid gap-2 md:gap-4">
      <div className="relative mx-auto mx-auto inline h-[120px] w-[120px] rounded-full bg-white md:h-[200px] md:w-[200px]">
        <Image src="/headshot.png" alt="headshot memoji" fill />
      </div>
      <h1 className="text-center text-xl text-white md:text-2xl">
        Hi there! I'm{' '}
        <span className="text-gold text-3xl font-bold md:text-4xl">Matius</span>
      </h1>
    </div>
  );
}

export default MyProfileGreeting;
