import Header from "../header/header";
import Hero from "../hero-section/hero";
import Service from "../service-section/service";
import AboutUs from "../about-us-section/about-us";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Service />
      <AboutUs />
    </div>
  );
}
