import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
} as const;

export function ShopifyMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path fill="currentColor" d="M6.1 5.8h11.8l1.6 15H4.5l1.6-15Z" />
      <path
        fill="currentColor"
        d="M8 6V5a4 4 0 0 1 8 0v1h-1.7V5a2.3 2.3 0 0 0-4.6 0v1H8Z"
      />
      <path
        fill="currentColor"
        d="M14.8 10.4c-.7-.5-1.5-.8-2.4-.8-1.9 0-3.1 1-3.1 2.4 0 1.2.8 1.8 2.3 2.2 1 .3 1.4.5 1.4 1s-.4.7-1 .7c-.8 0-1.6-.3-2.2-.8l-.7 1.2c.8.6 1.8.9 2.9.9 1.8 0 3-1 3-2.5 0-1.2-.8-1.8-2.3-2.2-1.1-.3-1.4-.5-1.4-1s.4-.7 1-.7c.6 0 1.2.2 1.7.6l.8-1Z"
      />
    </svg>
  );
}

export function ManusMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M3 19 7.5 5h3.2L12 9l1.3-4h3.2L21 19h-3.4l-2.6-8-1.5 4.5h-3L9 11l-2.6 8H3Z"
      />
    </svg>
  );
}

export function KlaviyoMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M5 4h3.2v6.2L14.5 4H19l-6.8 7 7.1 9H15l-6.8-8.5V20H5V4Z"
      />
    </svg>
  );
}

export function WebildMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="m3 5 2.5 14h3L12 9l3.5 10h3L21 5h-3l-1.5 9L13 5h-2l-3.5 9L6 5H3Z"
      />
    </svg>
  );
}

export function SupabaseMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M13.8 2.5 4.2 13h6.7l-.7 8.5L19.8 11h-6.7l.7-8.5Z"
      />
    </svg>
  );
}

export function PantheonMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M5 20V4h7.2a6 6 0 1 1 0 12H8.5v4H5Zm3.5-7.2h3.5a2.5 2.5 0 1 0 0-5H8.5v5Z"
      />
    </svg>
  );
}

export function FhgMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path fill="currentColor" d="M4 5h16v3H8v3h8v3H8v5H4V5Z" />
      <path fill="currentColor" d="M14 15h6v4h-6v-4Z" />
    </svg>
  );
}

export function NeoLifeMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M12 21c-4.8-2.4-7-6-6.4-10.9C10.2 9.8 13 12 12.5 16c1.5-3.7 4-5.7 7.3-6.7.6 5-1.7 9.3-7.8 11.7Z"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 20c-.3-4.5-1.6-7.2-4.5-9.3M12 18c1.5-2.7 3.5-4.7 6.4-6.1"
      />
    </svg>
  );
}

export function SubstackMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M4 4h16v2H4V4Zm0 4h16v2H4V8Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Zm2 4h12v-2H6v2Z"
      />
    </svg>
  );
}

export function StoreMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M4 9h16v11H4V9Zm-1-1 2-4h14l2 4H3Zm5 5h8v7H8v-7Z"
      />
    </svg>
  );
}
export function AiCodeMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16"
      />
    </svg>
  );
}
export function AutomationMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8"
      />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}
export function ConsultationMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M8 3v4m8-4v4M4 9h16m-9 4h6m-6 3h4"
      />
    </svg>
  );
}
export function TeamMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" fill="currentColor" />
      <circle cx="16.5" cy="9" r="2.5" fill="currentColor" />
      <path
        fill="currentColor"
        d="M3.5 19c.3-3.5 2.1-5.5 5.5-5.5s5.2 2 5.5 5.5h-11Zm10 0c.2-2.2 1.3-3.8 3.5-3.8 2.1 0 3.2 1.3 3.5 3.8h-7Z"
      />
    </svg>
  );
}
export function AuditMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path stroke="currentColor" strokeWidth="2" d="M7 3h10v3h2v15H5V6h2V3Z" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="m8 14 2.2 2.2L16 10.5"
      />
    </svg>
  );
}

export function ClaudeMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fill="currentColor"
        d="M12 1.8c1.2 4.5 2.2 6.4 4.1 8.2 1.8 1.9 3.7 2.9 8.1 4.1-4.4 1.2-6.3 2.2-8.1 4.1-1.9 1.8-2.9 3.7-4.1 8.2-1.2-4.5-2.2-6.4-4.1-8.2C6.1 16.3 4.2 15.3-.2 14.1c4.4-1.2 6.3-2.2 8.1-4.1C9.8 8.2 10.8 6.3 12 1.8Z"
        transform="translate(1 0) scale(.92)"
      />
    </svg>
  );
}

export function WordPressMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        fill="currentColor"
        d="m5.6 7.2 3.5 9.7 1.9-5.2-1.1-3.1c-.2-.5-.6-.8-1.1-.8h-.3V6.6h5v1.2h-.5c-.4 0-.6.2-.6.5 0 .2.1.5.2.8l1 2.8 1.8-4.1c.1-.2.1-.4.1-.5 0-.3-.2-.5-.6-.5h-.5V6.6h3.6v1.2h-.4c-.5 0-.8.3-1.1.9l-3.8 9.6h-1.3l-1.8-4.9-1.8 4.9H7.5L4.2 9.2c-.3-.8-.7-1.4-1.2-1.7l1.1-.7h1.5Z"
      />
    </svg>
  );
}

export function N8nMark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M7 7.5 12 12m0 0 5-4.5M12 12l-5 4.5m5-4.5 5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="6" cy="6.5" r="2.4" fill="currentColor" />
      <circle cx="18" cy="6.5" r="2.4" fill="currentColor" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <circle cx="6" cy="17.5" r="2.4" fill="currentColor" />
      <circle cx="18" cy="17.5" r="2.4" fill="currentColor" />
    </svg>
  );
}
