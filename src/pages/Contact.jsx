import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-14 sm:px-10 sm:py-20">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <section>
          <p className="text-xs uppercase tracking-[2px] text-[#78866b]">
            We're here to help
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-tight sm:text-6xl">
            Let's talk.
          </h1>
          <p className="mt-5 max-w-md leading-7 text-gray-600">
            Have a question about a product or need help
            finding something for your home? Send us a message.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <Mail size={22} strokeWidth={1.5} />
              <div>
                <h2 className="font-semibold">Email</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Use the contact form to send us a message.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MessageCircle size={22} strokeWidth={1.5} />
              <div>
                <h2 className="font-semibold">Product questions</h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Include the product name and order details
                  if your question relates to a purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f1ea] p-6 sm:p-10">
          {submitted ? (
            <div className="py-12 text-center">
              <h2 className="text-2xl font-medium">
                Thanks for reaching out!
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Your demo submission was recorded in this page's
                temporary state. No email has been sent.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-[#dedbd2] bg-[#fffdf9] px-4 py-3 outline-none focus:border-[#193d32]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-[#dedbd2] bg-[#fffdf9] px-4 py-3 outline-none focus:border-[#193d32]"
                />
              </div>

              <div>
                <label htmlFor="topic" className="mb-2 block text-sm font-semibold">
                  What can we help with?
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full border border-[#dedbd2] bg-[#fffdf9] px-4 py-3 outline-none focus:border-[#193d32]"
                >
                  <option>Product enquiry</option>
                  <option>Delivery question</option>
                  <option>Order support</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us a little more..."
                  className="w-full resize-y border border-[#dedbd2] bg-[#fffdf9] px-4 py-3 outline-none focus:border-[#193d32]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#193d32] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#2b5646]"
              >
                Send message
              </button>

              <p className="text-xs leading-5 text-gray-500">
                Demo form only. Connect an email service or
                backend API to receive actual submissions.
              </p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}