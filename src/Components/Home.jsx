import Loading from "./Loading";
import Nav from "./partials/Nav";
import siteLogo from "../../public/images/siteLogo.svg";

const Home = () => {
  document.title = "example | Homepage";

  return Home ? (
    <div className="">
      <Nav />
      <section className="h-[100vh] w-full flex flex-col justify-center items-center text-center">
        <img src={siteLogo} alt="" />
        <h1 className="text-3xl font-black">Reviving Your Carpet</h1>
        <h1 className="text-2xl text-white font-black">Restoring Your Space</h1>
      </section>

      <section className="testimonials px-8 flex flex-col items-center">
        <h1 className="py-20 text-5xl text-secondary font-bold">Testimonials</h1>

        <div className="cards_container flex flex-col gap-6">
          <div className="card p-8 flex flex-col gap-6 rounded-3xl bg-white">
            <div className="flex items-center gap-4">
              <img src={siteLogo} alt="" className="w-16 rounded-full" />
              <div>
                <h4>Emily Roberts</h4>
                <h6 className="text-username text-sm">@emrob_home</h6>
              </div>
            </div>
            <p className="text-text">
              Tony and his team installed vinyl flooring in my kitchen, and the
              transformation is stunning. They were punctual, respectful of my
              space, and made sure everything was cleaned up before leaving. The
              attention to detail was impressive. Very happy with the results!
            </p>
          </div>
          <div className="card p-8 flex flex-col gap-6 rounded-3xl bg-white">
            <div className="flex items-center gap-4">
              <img src={siteLogo} alt="" className="w-16 rounded-full" />
              <div>
                <h4>Emily Roberts</h4>
                <h6 className="text-username text-sm">@emrob_home</h6>
              </div>
            </div>
            <p className="text-text">
              Tony and his team installed vinyl flooring in my kitchen, and the
              transformation is stunning. They were punctual, respectful of my
              space, and made sure everything was cleaned up before leaving. The
              attention to detail was impressive. Very happy with the results!
            </p>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <Loading />
  );
};
export default Home;
