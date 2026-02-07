import React, { useRef, useState } from "react";
import Button from "../Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [emailError, setEmailError] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const nameValue = form.current.name.value.trim();
    const emailValue = form.current.email.value.trim();
    const messageValue = form.current.message.value.trim();

    // Reset first
    setNameError(false);
    setEmailError(false);
    setMsgError(false);

    let hasError = false;

    if (!nameValue) {
      setNameError(true);
      hasError = true;
    }

    if (!emailValue || !emailValue.includes("@")) {
      setEmailError(true);
      hasError = true;
    }

    if (!messageValue) {
      setMsgError(true);
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_pqmw9a1",
        "template_7m3otlo",
        form.current,
        "iT4z6181qmRzgh24e",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          alert("Failed to send message!");
          setLoading(false);
        },
      );
  };

  return (
    <section className="w-full py-4 px-2 md:px-[5%]">
      <h1
        className="capitalize text-4xl md:text-9xl text-center leading-none mt-5 md:mt-15"
        style={{ fontFamily: "Varent" }}
      >
        Anything in mind?
        <span
          style={{ fontFamily: "Varent" }}
          className="block text-3xl text-(--sec) mt-5"
        >
          Let's Talk
        </span>
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:w-1/3 p-5 mx-auto mt-10"
      >
        <input
          name="name"
          type="text"
          placeholder="Full name"
          className="w-full outline-none text-center px-4 py-2 mb-1 bg-transparent border-b border-gray-400"
        />
        {nameError && (
          <p className="text-red-500 text-sm mb-2">⚠️ Please enter your name</p>
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full outline-none text-center px-4 py-2 mb-1 bg-transparent border-b border-gray-400"
        />
        {emailError && (
          <p className="text-red-500 text-sm mb-2">
            ⚠️ Please enter a valid email address
          </p>
        )}

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full max-h-40 outline-none text-center px-4 py-2 mb-1 bg-transparent border-b border-gray-400"
        ></textarea>
        {msgError && (
          <p className="text-red-500 text-sm mb-2">⚠️ Please enter a message</p>
        )}
        <Button
          style="w-full mt-5"
          name={loading ? "Sending..." : "Send"}
          disabled={loading}
        />
      </form>
    </section>
  );
};

export default Contact;
