import Heart from '../Icons/Heart/Heart';

export function MadeWithLove() {
  return (
    <p className="text-xs md:text-sm">
      Made with <Heart className="-mt-1 inline text-red-600" />. Powered by
      TailwindCSS & NextJS.
    </p>
  );
}

export default MadeWithLove;
