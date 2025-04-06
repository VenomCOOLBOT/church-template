"use client";
import { sendContactEmail } from "@/app/actions";
import Form from "next/form";
import { useActionState } from "react";

export default function ContactForm() {
  const [result, sendEmailAction, isPending] = useActionState(
    sendContactEmail,
    null
  );

  return (
    <Form
      action={sendEmailAction}
      id="contact"
      name="contact"
      formMethod="POST"
      autoComplete="on"
    >
      <div className="grid grid-cols-1 space-y-6">
        <input
          type="text"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#a89076]"
          placeholder="Nombre"
          name="name"
          autoComplete="name"
          required
        />
        <input
          type="email"
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#a89076] col-span-2"
          placeholder="Correo electrónico"
          name="email"
          autoComplete="email"
          required
        />
        <textarea
          cols={10}
          rows={5}
          className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-[#a89076] col-span-2"
          placeholder="Escribe tu mensaje..."
          name="message"
          autoComplete="message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="focus:outline-none mt-5 bg-black px-4 py-2 text-white font-bold w-full"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
      {result && (
        <p
          className={`mt-4 ${
            result.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {result.errors?.message}
        </p>
      )}
    </Form>
  );
}
