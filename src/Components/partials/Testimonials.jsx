import siteLogo from "../../../public/images/siteLogo.svg";

const Testimonials = () => {
  return (
      <section className="testimonials px-8 py-20 flex flex-col items-center">
        <h1 className="py-20 text-5xl text-secondary font-bold">
          Testimonials
        </h1>

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
  )
}
export default Testimonials