import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";

const AboutPage = () => (
  <>
    <Helmet>
      <title>About — Ajfan Pizza</title>
      <meta name="description" content="Learn more about Ajfan Pizza — our story, mission and fresh ingredients." />
    </Helmet>

    <div className="min-h-screen">
      <Navbar />
      <About />
      <Newsletter />
      <Footer />
    </div>
  </>
);

export default AboutPage;
