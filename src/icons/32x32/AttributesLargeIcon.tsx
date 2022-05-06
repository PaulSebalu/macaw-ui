import * as React from "react";
import { forwardRef, Ref, SVGProps } from "react";
export const AttributesLargeIcon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M5 12v16m0-16H3m2 0h2M5 28H3m2 0h2M29 6H11m18 0V4m0 2v2M11 6V4m0 2v2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m11 16.5-.685-.305a.75.75 0 0 0-.065.305H11Zm18 0h.75a.75.75 0 0 0-.065-.305L29 16.5Zm-9.257 5.154.386.643-.386-.643Zm.514 0 .386-.643-.386.643Zm-2 .892.386.643-.386-.643Zm9.007-9.952-.685.305.685-.305Zm-14.528 0-.685-.305.685.305Zm-.685-.305-1.736 3.906 1.37.61 1.736-3.906-1.37-.61ZM10.25 16.5V27h1.5V16.5h-1.5ZM12 28.75h16v-1.5H12v1.5ZM29.75 27V16.5h-1.5V27h1.5Zm-.065-10.805L27.95 12.29l-1.37.61 1.736 3.906 1.37-.61ZM26.35 11.25h-12.7v1.5h12.7v-1.5Zm-15.35 6h6.5v-1.5H11v1.5Zm5.75-.75v5.617h1.5V16.5h-1.5Zm1.893 6.689 1.486-.892-.772-1.286-1.486.892.772 1.286Zm1.228-.892 1.486.892.772-1.287-1.486-.89-.772 1.285ZM17.5 17.25h5v-1.5h-5v1.5Zm5 0H29v-1.5h-6.5v1.5Zm.75 4.867V16.5h-1.5v5.617h1.5Zm-1.893 1.072c.833.5 1.893-.1 1.893-1.072h-1.5a.25.25 0 0 1 .379-.215l-.772 1.287Zm-1.228-.892a.25.25 0 0 1-.258 0l.772-1.286a1.25 1.25 0 0 0-1.286 0l.772 1.287ZM28 28.75A1.75 1.75 0 0 0 29.75 27h-1.5a.25.25 0 0 1-.25.25v1.5Zm-11.25-6.633a1.25 1.25 0 0 0 1.893 1.072l-.772-1.287a.25.25 0 0 1 .379.215h-1.5ZM10.25 27c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25h-1.5Zm17.7-14.71a1.75 1.75 0 0 0-1.6-1.04v1.5a.25.25 0 0 1 .229.149l1.37-.61Zm-14.529.609a.25.25 0 0 1 .229-.149v-1.5a1.75 1.75 0 0 0-1.6 1.04l1.371.609Z"
        fill="currentColor"
      />
    </svg>
  )
) as React.ForwardRefExoticComponent<
  Partial<React.PropsWithoutRef<SVGProps<SVGSVGElement>>> &
    React.RefAttributes<SVGSVGElement>
>;
