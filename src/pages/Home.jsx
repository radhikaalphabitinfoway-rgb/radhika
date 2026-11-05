import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";

const categories = [
  {
    title: "Living room",
    image:"//au.koala.com/cdn/shop/files/category-living.webp?v=1782734672&width=1440",
    link: "/collections/livingroom",
  },
  {
    title: "Bedroom",
    image:"//au.koala.com/cdn/shop/files/category-bedroom.webp?v=1782734691&width=1440",
    link: "/collections/bedroom",
  },
  {
    title: "Spare room",
    image:"//au.koala.com/cdn/shop/files/10ad13e61626fe44f3fb6c11202e6c0871eba56f_1.jpg?v=1788500449&width=3969",
    // link: "/collections/spare-room",
  },
  {
    title: "Outdoor",
    image:"//au.koala.com/cdn/shop/files/category-outdoor.webp?v=1782734721&width=1440",
    // link: "/collections/outdoor",
  },
  {
    title: "Koala & Pantone",
    image:"//au.koala.com/cdn/shop/files/koala-x-pantone.webp?v=1783652588&width=1440",
    // link: "/collections/pantone",
  },
  {
    title: "Koala x Bluey",
    image:"//au.koala.com/cdn/shop/files/category-koala-x-bluey.webp?v=1782734737&width=1440",
    // link: "/collections/bluey",
  },
];

const features = [
  {
    title: "Washable, replaceable covers",
    description: "Keep it clean and change up your style.",
    image:"//au.koala.com/cdn/shop/files/feature-1-mobile.webp?v=1782735103&width=1080",
    // link: "/collections/sofas",
    // featured: true,
  },
  {
    title: "Trial products for 120 days",
    image:"//au.koala.com/cdn/shop/files/feature-2-mobile.webp?v=1782735179&width=1080",
    // link: "/collections/mattresses",
  },
  {
    title: "Kid & pet friendly",
    image:"//au.koala.com/cdn/shop/files/feature-3-mobile.webp?v=1782735297&width=1080",
    // link: "/collections/sofas",
  },
  {
    title: "Simple tool-free assembly",
    image:"//au.koala.com/cdn/shop/files/feature-4-mobile.webp?v=1782735363&width=1080",
    // link: "/collections/furniture",
  },
];

const planetCards = [
  {
    title: "Help us save the koala from extinction",
    image: "//au.koala.com/cdn/shop/files/koala_43b9447c-1416-4e17-8db3-7b7c52998d74.png?v=1778481713&width=1920",
    // link: "/pages/our-impact",
    // badge: "KEEP IT WILD",
  },
  {
    title: "Proud members of 1% For The Planet",
    image:"//au.koala.com/cdn/shop/files/for-the-planet.png?v=1778481750&width=1920",
    // link: "/pages/sustainability",
    // badge: "1% FOR THE PLANET",
  },
  {
    title: "We’re a Certified B Corporation",
    image: "//au.koala.com/cdn/shop/files/b-corp.png?v=1778481792&width=1920",
    // link: "/pages/b-corporation",
    // badge: "Certified B Corporation",
  },
];

export default function Home() {
  return (
    <>
      <section className="px-3 pb-3">
        <div className="relative h-[calc(100vh-160px)] min-h-[520px] overflow-hidden rounded-[28px] bg-black">

          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero.jpg"
          >
            <source src="//au.koala.com/cdn/shop/videos/c/vp/bcc243f2b40a4431819ea2477e17829d/bcc243f2b40a4431819ea2477e17829d.HD-1080p-7.2Mbps-98865187.mp4?v=0" type="video/mp4" />
          </video>

        
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          
          <div className="absolute bottom-10 left-8 z-10 max-w-3xl text-white sm:bottom-14 sm:left-20">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Well-rounded in every sense
            </h2>

            <p className="mt-5 text-lg sm:text-sm">
              Torquay pairs generous, sink-in comfort with plush curves and a modular design that adapts to your space.
            </p>

            <Link
              to="/collections/sofa-beds"
              className="mt-7 inline-flex rounded-full bg-white px-12 py-4 !text-black  transition hover:bg-stone-100"
            >
              Shop now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6f3] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-[#171717] sm:mb-12 sm:text-3xl md:text-4xl lg:text-4xl">
            Furniture loved by millions around the world
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative block h-[280px] overflow-hidden rounded-[28px] bg-stone-300 sm:h-[250px] lg:h-[250px] xl:h-[250px]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 "
                />

                {/* Dark overlay for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-colors duration-300 group-hover:from-black/70" />

                {/* Category title */}
                <div className="absolute inset-x-3 bottom-5 z-10 sm:inset-x-5 sm:bottom-6">
                  <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-1xl">
                    {category.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

       <section className="px-3 pb-3">
        <div className="relative h-[calc(100vh-160px)] min-h-[520px] overflow-hidden rounded-[28px] bg-black">

          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero.jpg"
          >
            <source src="//au.koala.com/cdn/shop/videos/c/vp/89cb37935fab4751bb3c543bb099ad55/89cb37935fab4751bb3c543bb099ad55.HD-720p-4.5Mbps-96501959.mp4?v=0" type="video/mp4" />
          </video>

        
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          
          <div className="absolute bottom-10 left-8 z-10 max-w-3xl text-white sm:bottom-14 sm:left-20">
            <h5 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">
              Sofa. Bed.
              <br />
              Everything between.
            </h5>

            <p className="mt-5 text-lg sm:text-xl">
              Meet Paddo. Made for gathering, lounging,
              stretching out and staying over.
            </p>

            <Link
              to="/collections/sofa-beds"
              className="mt-7 inline-flex rounded-full bg-white px-12 py-4 !text-black  transition hover:bg-stone-100"
            >
              Shop now
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f6f3] px-4 py-12 sm:px-8 sm:py-16 lg:px-[58px] lg:py-12">
      <div className="mx-auto w-full max-w-[1520px]">
        {/* Heading */}
        <h2 className="mb-8 text-[30px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#171717] sm:mb-10 sm:text-[30px] lg:mb-10 lg:whitespace-nowrap lg:text-[40px] xl:text-[40px]">
          Forward-thinking designs, rewriting the rules for modern homes
        </h2>

        {/* Image Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-[2.5fr_0.9fr_0.9fr_0.9fr] lg:gap-[20px]">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.link}
              className={`group relative block h-[320px] overflow-hidden rounded-[18px] bg-stone-300 sm:h-[420px] lg:h-[500px] ${
                feature.featured ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-in-out "
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent transition-colors duration-500 group-hover:from-black/85" />

              {/* Text */}
              <div
                className={`absolute inset-x-5 bottom-6 z-10 text-white sm:inset-x-6 sm:bottom-6 lg:inset-x-4 lg:bottom-6 ${
                  feature.featured ? "lg:inset-x-9 lg:bottom-8" : ""
                }`}
              >
                <h3
                  className={`font-semibold leading-[1.15] tracking-[-0.7px] transition-transform duration-300  ${
                    feature.featured
                      ? "text-[24px] sm:text-[30px] lg:text-[36px]"
                      : "text-[22px] sm:text-[26px] lg:text-[32px]"
                  }`}
                >
                  {feature.title}
                </h3>

                {feature.description && (
                  <p className="mt-4 max-w-[520px] text-[16px] leading-[1.4] text-white/90 sm:text-[18px] lg:text-[20px]">
                    {feature.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

      <section className="px-3 pb-3">
        <div className="relative h-[calc(100vh-160px)] min-h-[520px] overflow-hidden rounded-[28px] bg-black">

          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero.jpg"
          >
            <source src="https://au.koala.com/cdn/shop/videos/c/vp/d54a317525c94c6b8e9d27b7d985a22f/d54a317525c94c6b8e9d27b7d985a22f.HD-1080p-3.3Mbps-66433721.mp4?v=0" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-10 left-8 z-10 max-w-3xl text-white sm:bottom-14 sm:left-20">
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Lifeproof modular sofas
            </h1>

            <p className="mt-5 text-lg sm:text-xl">
              With washable covers and a tool-free modular design to grow with you.
            </p>

            <Link
              to="/collections/sofa-beds"
              className="mt-7 inline-flex rounded-full bg-white px-12 py-4 !text-black  transition hover:bg-stone-100"
              >
                Explore modular sofas
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-0 w-full overflow-hidden rounded-[36px] bg-[#70735e] px-6 py-12 sm:px-8 sm:py-14 lg:px-[40px] lg:py-[60px]">
      <div className="w-full">
        <h2 className="mb-8 text-[30px] font-semibold leading-[1.1] tracking-[-1.5px] text-white sm:text-[36px] lg:mb-9 lg:text-[46px]">
          Cosy home, and a healthy planet
        </h2>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {planetCards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="group relative block h-[250px] min-w-0 overflow-hidden rounded-[28px] bg-stone-400 sm:h-[300px] lg:h-[300px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 "
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              {/* Top-right badge */}
              {/* <div className="absolute right-5 top-5 z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/70 text-center text-white">
                {card.badge === "koala" && (
                  <span className="text-[10px] font-bold leading-tight">
                    KEEP IT
                    <br />
                    WILD
                    <br />
                    ✦
                  </span>
                )}

                {card.badge === "planet" && (
                  <span className="font-bold leading-tight">
                    <span className="block text-[30px]">1%</span>
                    <span className="block text-[8px]">FOR THE PLANET</span>
                  </span>
                )}

                {card.badge === "bcorp" && (
                  <span className="font-bold leading-tight">
                    <span className="block text-[9px]">Certified</span>
                    <span className="block text-[32px]">Ⓑ</span>
                    <span className="block text-[8px]">Corporation</span>
                  </span>
                )}
              </div> */}

              {/* Bottom title */}
              <div className="absolute inset-x-[26px] bottom-[38px] z-10">
                <h3 className="max-w-[390px] text-[27px] font-semibold leading-[1.2] tracking-[-0.7px] text-white sm:text-[20px] lg:text-[30px]">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

      <Newsletter />
    </>
  );
}