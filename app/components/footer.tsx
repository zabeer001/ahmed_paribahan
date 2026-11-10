"use client";
import Link from "next/link";
import { Brand } from "./brand";
import { showPreviewNotice } from "./preview-notice";
export function Footer() {
  return <footer className="foot"><div className="foot-in"><div className="fgrid"><div><Brand footer /><p>Book bus tickets across Bangladesh, simply and safely.</p></div><div><h4>Company</h4><Link href="/services">About us</Link>{["Careers", "Contact us", "Blog"].map(title => <a key={title} href="#" onClick={event => { event.preventDefault(); showPreviewNotice(title, "This section is not available in the frontend preview."); }}>{title}</a>)}</div><div><h4>Support</h4><Link href="/help">Help centre</Link><Link href="/manage-booking">Manage booking</Link>{["Cancel ticket", "Refund policy"].map(title => <a key={title} href="#" onClick={event => { event.preventDefault(); showPreviewNotice(title, "Booking management and refunds are not connected in this frontend preview."); }}>{title}</a>)}</div><div><h4>Legal</h4>{["Terms and conditions", "Privacy policy", "Cookie policy"].map(title => <a key={title} href="#" onClick={event => { event.preventDefault(); showPreviewNotice(title, "Final policy content has not been supplied for this website preview."); }}>{title}</a>)}</div></div><div className="fbot"><span>© 2026 Ahmed Paribahan. All rights reserved.</span><span>bKash · Nagad · Visa · Mastercard</span></div></div></footer>;
}
