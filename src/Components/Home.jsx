import Loading from "./Loading";
import Nav from "./partials/Nav";
import siteLogo from "../../public/images/siteLogo.svg";
import Footer from "./partials/Footer";
import ContactForm from "./partials/ContactForm";
import Testimonials from "./partials/Testimonials";
import FAQ from "./partials/FAQ";
import BeforeAfter from "./partials/BeforeAfter";

const Home = () => {
  document.title = "example | Homepage";

  return Home ? (
    <div className="">
      <Nav />
      <section id="home" className="hero h-[100vh] w-full flex flex-col justify-center items-center text-center">
        <img src={siteLogo} alt="" />
        <h1 className="text-3xl font-black">Reviving Your Carpet</h1>
        <h1 className="text-2xl text-white font-black">Restoring Your Space</h1>
      </section>
      <BeforeAfter
        beforeImage={"/images/beforeAfter/beforeAfter1.avif"}
        afterImage={"/images/beforeAfter/beforeAfter2.avif"}
      />
      <BeforeAfter
        beforeImage={"/images/beforeAfter/beforeAfter3.avif"}
        afterImage={"/images/beforeAfter/beforeAfter4.avif"}
      />
      <BeforeAfter
        beforeImage={"/images/beforeAfter/beforeAfter5.avif"}
        afterImage={"/images/beforeAfter/beforeAfter6.avif"}
      />
      <FAQ />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
};
export default Home;
