import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const RemoveMemberIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M11.5 21.75a.75.75 0 0 0 0-1.5v1.5Zm1.5-7a.75.75 0 0 0 0-1.5v1.5Zm-3.17 0h1.67v-1.5H9.83v1.5Zm1.67 5.5H3.171v1.5h8.33v-1.5Zm0-5.5H13v-1.5h-1.5v1.5Zm-7.75 6.08a6.08 6.08 0 0 1 6.08-6.08v-1.5a7.58 7.58 0 0 0-7.58 7.58h1.5Zm-1.5 0c0 .508.413.92.921.92v-1.5c.32 0 .58.26.58.58h-1.5Zm19.28-4.3a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-6.06 3.94a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm5-5-5 5 1.06 1.06 5-5-1.06-1.06Z"
        fill="currentColor"
      />
      <path
        d="M20.47 21.53a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.94-6.06a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm5 5-5-5-1.06 1.06 5 5 1.06-1.06Z"
        fill="currentColor"
      />
      <circle cx={12} cy={7} r={4} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
);
