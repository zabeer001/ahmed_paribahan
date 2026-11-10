import { BookingLookup } from "../components/booking-lookup";
export const metadata = { title: "Manage booking" };
export default function ManageBookingPage() {
  return <main id="main-content"><section className="hero"><div className="hero-in"><h1>Manage your booking</h1><p>Find your trip with a booking reference.</p></div></section><BookingLookup /></main>;
}
