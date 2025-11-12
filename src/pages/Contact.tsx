import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact — Ajfan Pizza</title>
      <meta name="description" content="Get in touch with Ajfan Pizza — location, phone, email and social links." />
    </Helmet>

    <div className="min-h-screen">
      <Navbar />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  </>
);

export default ContactPage;
