"use client";
import { ValidationError, useForm } from "@formspree/react";

export const FormspreeForm = ({ formId }) => {
  console.log("FORM ID: ", formId);
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return (
      <p className="max-w-5xl mx-auto my-5 text-center">
        Thanks for your message, I'll get back to you shortly!
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:w-[600px] max-w-5xl mx-auto my-5 gap-2 w-full px-6"
    >
      {/* <label htmlFor="email"></label> */}
      <input
        id="name"
        type="text"
        placeholder="Name"
        name="name"
        className="border p-2 hover:border-black focus:outline-black active:outline-black"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        className="border p-2 hover:border-black focus:outline-black active:outline-black"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className="border p-2 hover:border-black h-40 focus:outline-black active:outline-black"
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button
          className="btn button"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
