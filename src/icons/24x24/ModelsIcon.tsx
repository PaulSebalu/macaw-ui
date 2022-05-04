import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const ModelsIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M6 5.5 12 3l6 2.5m-12 0L12 8M6 5.5v8l6 2.5m6-10.5L12 8m6-2.5v8L12 16m0-8v8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M20 16.2c1.256.501 2 1.125 2 1.8 0 1.261-2.595 2.341-6.27 2.785M12 21c-5.522 0-10-1.365-10-3.048 0-.743.871-1.423 2.318-1.952"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);