import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";

export default function About() {
  return (
    <main>
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#e9e2d6] sm:min-h-[570px]">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="A thoughtfully styled living room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-16 text-white sm:px-12">
          <p className="text-xs uppercase tracking-[3px]">
            Our philosophy
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-medium leading-tight sm:text-7xl">
            Better living starts at home.
          </h1>
          <p className="mt-5 max-w-lg leading-7 text-white/90">
            We believe everyday furniture should be thoughtful,
            comfortable, and made to fit real life.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 py-16 sm:grid-cols-2 sm:items-center sm:gap-16 sm:px-10 sm:py-24">
        <div>
          <p className="text-xs uppercase tracking-[2px] text-[#78866b]">
            What matters to us
          </p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            Good design should feel good, too.
          </h2>
          <p className="mt-6 leading-7 text-gray-600">
            A home is more than a collection of things. It's
            where you unwind, share a meal, spend time with
            the people you love, and make memories.
          </p>
          <p className="mt-4 leading-7 text-gray-600">
            Our goal with this demo store is to bring that
            feeling into the shopping experience through
            considered layouts, accessible navigation, and
            useful product information.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#193d32] pb-2 text-sm font-semibold"
          >
            Discover the collection <ArrowRight size={17} />
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
          alt="Warm, natural home interior"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      </section>

      <section className="bg-[#f4f1ea] px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="text-center text-3xl font-medium sm:text-5xl">
            What we believe in
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {[
              {
                Icon: Sparkles,
                title: "Thoughtful design",
                text: "Useful, timeless pieces that make everyday living a little easier.",
              },
              {
                Icon: Heart,
                title: "Everyday comfort",
                text: "A comfortable home should feel welcoming, personal, and lived in.",
              },
              {
                Icon: Leaf,
                title: "Considered choices",
                text: "We believe in making thoughtful decisions about the things we bring home.",
              },
            ].map(({ Icon, title, text }) => (
              <article key={title} className="text-center">
                <Icon size={32} strokeWidth={1.4} className="mx-auto" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-gray-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}