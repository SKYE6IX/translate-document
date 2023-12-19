import Header from "../header/header";
import Hero from "../hero-section/hero";
import Service from "../service-section/service";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Service />
    </div>
  );
}
