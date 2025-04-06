import AboutUs from "@/components/layout/AboutUs";
import ContactUs from "@/components/layout/ContactUs";
import Gallery from "@/components/layout/Gallery";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Gallery />
      <ContactUs />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.608008101954!2d-117.02300402283686!3d32.66987397370867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95025f0e66bfd%3A0x887ccc3f2679d7e5!2sBonita%20Presbyterian%20Church!5e0!3m2!1sen!2sus!4v1743978568825!5m2!1sen!2sus"
        width="600"
        height="450"
        className="border-0 w-full mt-10"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
