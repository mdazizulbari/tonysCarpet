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
    </div>
  ) : (
    <Loading />
  );
};
export default Home;
