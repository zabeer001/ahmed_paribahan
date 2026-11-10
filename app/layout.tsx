import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PreviewNotice } from "./components/preview-notice";
import { PageMotion } from "./components/page-motion";
import "./globals.css";
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
export const metadata: Metadata = { title: { default: "Ahmed Paribahan – Book bus tickets online", template: "%s | Ahmed Paribahan" }, description: "Book bus tickets across Bangladesh. Explore routes, coach options and offers with Ahmed Paribahan." };
const themeScript = `(function(){try{var t=localStorage.getItem('ahmed-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning className={poppins.variable}><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /><PreviewNotice /><PageMotion /></body></html>;
}
