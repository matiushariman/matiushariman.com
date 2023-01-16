import Image, { ImageProps } from 'next/image';

export interface CompanyImageProps extends Pick<ImageProps, 'src' | 'alt'> {}

export function CompanyImage({ src, alt }: CompanyImageProps) {
  return (
    <div className="relative h-[90px] w-[152px] transition-all hover:scale-110 hover:cursor-pointer hover:shadow">
      <Image className="rounded" src={src} alt={alt} fill />
    </div>
  );
}

export default CompanyImage;
