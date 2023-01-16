import cc from 'classcat';
import type { SVGProps } from 'react';

export interface HeartProps extends SVGProps<SVGSVGElement> {}

export function Heart({ className, ...rest }: HeartProps) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      className={cc(['icon icon-tabler icon-tabler-heart', className])}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </svg>
  );
}

export default Heart;
