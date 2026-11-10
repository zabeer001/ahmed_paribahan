import type { CSSProperties } from "react";

export type IconName = "arrow" | "pin" | "calendar" | "swap" | "search" | "sun" | "moon" | "menu" | "close" | "chevron" | "check" | "seat" | "shield" | "wallet" | "bus" | "leaf" | "snow" | "bag" | "plug" | "clock" | "ticket" | "headphones";
const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-13 5h2m4 0h2" /></>,
  swap: <path d="M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4" />,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  moon: <path d="M20.5 13A9 9 0 0 1 11 3.5 9 9 0 1 0 20.5 13Z" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  seat: <><path d="M6 3v11a3 3 0 0 0 3 3h9M9 5v7h8a3 3 0 0 1 3 3v2M8 17v4m10-4v4" /><path d="M5 3h4" /></>,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  wallet: <><rect x="3" y="5" width="18" height="15" rx="3" /><path d="M3 8V6a2 2 0 0 1 2-2h12m4 7h-6v5h6m-3-2.5h.01" /></>,
  bus: <><rect x="5" y="3" width="14" height="16" rx="4" /><path d="M5 11h14M9 3v8m-2 8v2m10-2v2M3 7v4m18-4v4M8 15h1m6 0h1" /></>,
  leaf: <><path d="M20 3C7 2 2 10 7 17s15 0 13-14ZM4 21l12-12" /></>,
  snow: <><path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3m-6 16 3-3 3 3M4 10l4-1-1-4m10 14-1-4 4-1M4 14l4 1-1 4m10-14-1 4 4 1" /></>,
  bag: <><rect x="5" y="7" width="14" height="14" rx="2" /><path d="M9 7V4h6v3m-6 4v6m6-6v6" /></>,
  plug: <><path d="M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-5 5v5m-5-10V8" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  ticket: <><path d="M3 7h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4V7Zm12 0v2m0 3v2m0 3v2" /></>,
  headphones: <><path d="M4 14v-3a8 8 0 0 1 16 0v6a4 4 0 0 1-4 4h-3" /><rect x="3" y="11" width="4" height="7" rx="2" /><rect x="17" y="11" width="4" height="7" rx="2" /></>,
};
export function Icon({ name, className = "h-5 w-5", style }: { name: IconName; className?: string; style?: CSSProperties }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>{paths[name]}</svg>;
}
