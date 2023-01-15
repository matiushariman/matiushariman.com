import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

export interface CompanyImageProps extends Pick<ImageProps, 'src' | 'alt'> {
  isCurrent?: boolean;
}

export function CompanyImage({ src, alt, isCurrent }: CompanyImageProps) {
  return (
    <div className="relative h-[90px] w-[152px]">
      <Image
        className={clsx(
          !isCurrent && 'grayscale transition-all hover:filter-none'
        )}
        src={src}
        alt={alt}
        fill
      />
    </div>
  );
}

export default CompanyImage;
