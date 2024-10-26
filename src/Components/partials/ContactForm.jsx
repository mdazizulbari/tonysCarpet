import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bfz6j59', 'template_4js5fgu', form.current, {
        publicKey: 'ymZkWeiLvKK93PI-B',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-20 flex flex-col items-center">
        <h1 className="py-20 text-5xl text-secondary font-bold">
          Contact
        </h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="block text-white text-xl">Name</label>
        <input type="text" name="user_name" className="w-72 px-4 py-2 rounded-xl text-xl" />
        <label className="block text-white text-xl">Email</label>
        <input type="email" name="user_email" className="w-72 px-4 py-2 rounded-xl text-xl" />
        <label className="block text-white text-xl">Message</label>
        <textarea name="message" className="w-72 h-60 px-4 py-2 rounded-xl text-xl" />
        <input className="block transition ease-in-out delay-300 hover:scale-110 hover:-translate-y-1 py-2 mt-4 text-white text-xl font-bold rounded-xl bg-black" type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default ContactForm;
