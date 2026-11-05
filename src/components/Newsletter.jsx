import { useState } from "react";

export default function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!firstName.trim() || !email.trim()) return;

    setSubmitted(true);
  }

  return (
    <section className="w-full bg-[#f7f7f5]">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-12 md:py-12">
        <div className="mx-auto max-w-[854px]">
          <h2 className="text-center text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl md:text-[44px]">
            Sign up to save 10%
          </h2>

          <p className="mt-7 text-center text-sm text-[#262626] sm:text-base">
            Be the first to know about new collections and exclusive offers.
          </p>

          {submitted ? (
            <div
              role="status"
              className="mt-12 py-6 text-center text-lg font-medium text-[#696d59]"
            >
              Thanks for signing up!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  required
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  aria-label="First name"
                  className="h-14 min-w-0 rounded-[5px] border border-[#c7c9c9] bg-white px-5 text-base text-[#252525] outline-none transition focus:border-[#696d59] focus:ring-1 focus:ring-[#696d59]"
                />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  className="h-14 min-w-0 rounded-[5px] border border-[#c7c9c9] bg-white px-5 text-base text-[#252525] outline-none transition focus:border-[#696d59] focus:ring-1 focus:ring-[#696d59]"
                />
              </div>

              <button
                type="submit"
                className="mt-[22px] flex h-[55px] w-full items-center justify-center rounded-full bg-[#696d59] px-6 text-base font-medium text-white transition-colors hover:bg-[#565a49] focus:outline-none focus:ring-2 focus:ring-[#696d59] focus:ring-offset-2"
              >
                SIGN UP
              </button>

              <p className="mt-5 text-sm leading-6 text-[#626457] sm:text-base">
                By clicking 'Sign up' you agree that you have read and
                understood Koala’s{" "}
                <a
                  href="/policies/privacy-policy"
                  className="underline underline-offset-2 hover:text-black"
                >
                  Privacy Policy
                </a>.
              </p>

              <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-sm leading-6 text-[#626457] sm:text-base">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={marketingConsent}
                  onChange={(event) =>
                    setMarketingConsent(event.target.checked)
                  }
                  className="mt-1 h-[22px] w-[22px] shrink-0 cursor-pointer accent-[#696d59]"
                />

                <span>
                  I agree to receive marketing communications and product
                  updates from Koala.
                </span>
              </label>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}