import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const TokenLargeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M21 20a9 9 0 1 0-8.466-5.94L2 25v5h5.5l2-2v-2H12v-2h2v-2h2l2.035-2.5A8.98 8.98 0 0 0 21 20Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <circle cx={23} cy={9} r={2.25} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
);