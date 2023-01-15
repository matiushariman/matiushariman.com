import clsx from 'clsx';
import type { SVGProps } from 'react';

export interface MapPinProps extends SVGProps<SVGSVGElement> {}

export function MapPin({ className, ...rest }: MapPinProps) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('icon icon-tabler icon-tabler-map-pin', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="12" cy="11" r="3"></circle>
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
    </svg>
  );
}

export default MapPin;
