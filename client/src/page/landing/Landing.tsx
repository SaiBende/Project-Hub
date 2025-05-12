import Benefits from "./componentsforlanding/Benifits";
import ContactUs from "./componentsforlanding/ContactUs";
import CTA from "./componentsforlanding/CTA";
import Features from "./componentsforlanding/Features";
import Hero from "./componentsforlanding/Hero";
import Navbar from "./componentsforlanding/Navbar";
import Testimonials from "./componentsforlanding/Testimonials";
import Footer from "./componentsforlanding/Footer";
function Landing() {
  return (
    <>
       <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <ContactUs />
        <CTA />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Landing
