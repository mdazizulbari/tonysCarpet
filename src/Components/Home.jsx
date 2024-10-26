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
      <section
        id="home"
        className="hero h-[100vh] w-full flex flex-col justify-center items-center text-center"
      >
        <img
          src={siteLogo}
          alt=""
          className="w-full max-h-[700px] object-cover"
        />
        <h1 className="md:mb-3 lg:mb-4 text-3xl md:text-5xl lg:text-6xl font-black">
          Reviving Your Carpet
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-4xl text-white font-black">
          Restoring Your Space
        </h1>
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
