import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Connect your authentication API here.
    console.log("Sign-in email:", email);
    console.log("Marketing consent:", marketing);
  };

  const handleShopLogin = () => {
    // Connect your Shop authentication provider here.
    console.log("Continue with Shop clicked");
  };

  return (
    <main className="min-h-screen bg-[#f8f8f4] px-5 py-10 text-[#171717] sm:py-5">
      <div className="mx-auto flex w-full max-w-[480px] flex-col items-center">
        {/* Brand logo */}
        <a
          href="/"
          aria-label="Koala home"
          className="text-[48px] font-extrabold leading-none tracking-[-3px] text-[#74776a] sm:text-[40px]"
        >
          koala<span className="ml-0.5 text-[10px] align-top tracking-normal">®</span>
        </a>

        {/* Reviews banner */}
        <div className="mt-6 flex min-h-[49px] w-full items-center justify-center bg-[#efefe9] px-3">
          <p className="text-center text-[14px] font-bold sm:text-[15px]">
            <span className="mr-2 tracking-[1px]">
              ★★★★★
            </span>
            50,000+ five star reviews globally
          </p>
        </div>

        {/* Store benefits */}
        <p className="mt-3 text-center text-[14px] font-semibold sm:text-[16px]">
          Fast delivery <span className="mx-1">·</span>
          World-class warranty <span className="mx-1">·</span>
          120-day trial
        </p>

        {/* Sign-in form */}
        <section className="mt-[60px] w-full sm:mt-[15px]">
          <h1 className="text-[26px] font-bold tracking-[-0.7px]">
            Sign in
          </h1>

          <p className="mt-1 text-[15px] text-[#777777]">
            Sign in or create an account
          </p>

          {/* Shop button */}
          <button
            type="button"
            onClick={handleShopLogin}
            className="mt-6 flex h-[50px] w-full items-center justify-center rounded-full bg-[#5430e9] px-5 text-[17px] font-bold text-white transition-colors hover:bg-[#4523d3] focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Continue with shop
          </button>

          {/* Divider */}
          <div className="my-5 flex items-center gap-5">
            <div className="h-px flex-1 bg-[#d8d8d1]" />
            <span className="text-[15px] text-[#777777]">or</span>
            <div className="h-px flex-1 bg-[#d8d8d1]" />
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex h-[50px] items-center rounded-[17px] border-2 border-[#a0a59a] bg-white p-[3px] shadow-[0_0_0_2px_rgba(160,165,154,0.2)] transition focus-within:border-[#7e8877]">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Email"
                autoComplete="email"
                aria-label="Email address"
                aria-invalid={Boolean(error)}
                className="h-full min-w-0 flex-1 rounded-l-xl bg-transparent px-3 text-[15px] outline-none placeholder:text-[#777777]"
              />

              <button
                type="submit"
                aria-label="Continue with email"
                className="flex h-full w-12 shrink-0 items-center justify-center rounded-r-xl text-[#dc3030] transition hover:bg-red-50"
              >
                <ArrowRight size={23} strokeWidth={2} />
              </button>
            </div>

            {error && (
              <p role="alert" className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Optional marketing consent */}
            <label className="mt-5 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none rounded-full border border-[#d9d9d9] bg-white checked:border-[#5430e9] checked:bg-[#5430e9] checked:ring-2 checked:ring-[#5430e9]/20"
              />

              <span className="text-[15px] leading-[20px] sm:text-[15px]">
                Please sign me up to receive email and SMS updates
                and special offers. By signing up, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="underline underline-offset-2 hover:text-gray-400"
                >
                  Privacy Policy
                </a>.
              </span>
            </label>

            {/* Terms */}
            <p className="mt-7 text-center text-[14px] leading-2 text-[#858585]">
              By continuing, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-2 hover:text-black"
              >
                Terms of service
              </a>
            </p>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-10 pb-2">
          <a
            href="/privacy-policy"
            className="text-[15px] text-[#77776d] hover:underline"
          >
            Privacy policy
          </a>
        </footer>
      </div>
    </main>
  );
}