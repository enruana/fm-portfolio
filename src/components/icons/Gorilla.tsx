import { SVGProps } from 'react';

export function Gorilla(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 4c-4.5-1-9 3-9 8v6" />
      <path d="M8 12h8" />
      <path d="M9 20h6" />
      <path d="M12 16v4" />
      <circle cx="12" cy="8" r="4" />
      <path d="M16 16v4" />
      <path d="M8 16v4" />
    </svg>
  );
}
