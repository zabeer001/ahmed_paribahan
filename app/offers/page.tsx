import Link from "next/link";
import { Offers } from "../components/home-content";
export const metadata = { title: "Offers" };
export default function OffersPage() {
  return <main id="main-content"><section className="hero"><div className="hero-in"><h1>Offers for your next journey</h1><p>Explore sample promotions and copy a code for your travel plans.</p></div></section><div className="services-intro"><Offers /></div><section className="sec"><h2>How to use an offer</h2><p className="sub">A few things to check before you book.</p><div className="steps"><div className="step"><b>Choose an offer</b><span>Select a code to copy it.</span></div><div className="step"><b>Check the conditions</b><span>Verify eligibility, payment requirements and validity with the operator.</span></div><div className="step"><b>Plan your journey</b><span>Explore routes and sample fares before choosing your trip.</span></div></div><Link className="services-link" href="/#search">Find a bus →</Link></section><p className="note">These promotions are sample design content. No checkout or discount redemption is connected.</p></main>;
}
