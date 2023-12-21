import Header from "../header/header";
import Hero from "../hero-section/hero";
import Service from "../service-section/service";
import AboutUs from "../about-us-section/about-us";
import ContactUs from "../contact-us-section/contact-us";
import Location from "../location-section/location";
import Footer from "../footer/footer";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Service />
      <AboutUs />
      <ContactUs />
      <Location />
      <Footer />
    </div>
  );
}
