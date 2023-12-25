"use client";
import { Element } from "react-scroll";
import Header from "../header/header";
import Hero from "../hero-section/hero";
import Service from "../service-section/service";
import AboutUs from "../about-us-section/about-us";
import ContactUs from "../contact-us-section/contact-us";
import Location from "../location-section/location";
import Footer from "../footer/footer";
import SpeedDialButton from "../speed-dial-button/speed-dial-button";
import "./page.scss";

export default function Page() {
  return (
    <div className="page">
      <SpeedDialButton />
      <Header />
      <Hero />
      <Element name="service">
        <Service />
      </Element>
      <Element name="about_us">
        <AboutUs />
      </Element>
      <Element name="contact">
        <ContactUs />
      </Element>
      <Location />
      <Footer />
    </div>
  );
}
