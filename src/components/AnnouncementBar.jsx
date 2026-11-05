import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const announcements = [
  "Free delivery on mettresses",
  "Try it properly with our 120 day trial",
  "Free metro delivery on sofa beds",
  "World class warranty, up to 10 years",
];

const countries = [
  { name: "Australia", flag: "🇦🇺" },
];

export default function AnnouncementBar() {
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState(countries[0]);

  // Change announcement every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(
        (prev) => (prev + 1) % announcements.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-[60] bg-[#696d58] text-white">
      <div className="mx-auto grid h-10 max-w-[1800px] grid-cols-3 items-center px-4 text-xs sm:px-8 sm:text-sm">

        {/* About dropdown */}
        <div
          className="relative flex h-full items-center"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            type="button"
            onClick={() => setAboutOpen((open) => !open)}
            className="flex items-center gap-1 hover:underline"
            aria-expanded={aboutOpen}
          >
            About
            <ChevronDown 
              size={14}
              className={`transition-transform ${
                aboutOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {aboutOpen && (
            <div className="absolute left-0 top-full w-56 bg-white py-2 text-sm text-[#292b25] shadow-xl rounded-b-md">
              <Link
                to="/pages/about-us"
                onClick={() => setAboutOpen(false)}
                className="block px-5 py-3 hover:bg-gray-100"
              >
                About Us
              </Link>

              <Link
                to="/pages/second-home"
                onClick={() => setAboutOpen(false)}
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Koala Second Home
              </Link>

              <Link
                to="/pages/moore-park-showroom"
                onClick={() => setAboutOpen(false)}
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Koala Showroom
              </Link>
            </div>
          )}
        </div>

        {/* Center announcement */}
        <button
          type="button"
          onClick={() =>
            setAnnouncementIndex(
              (prev) => (prev + 1) % announcements.length
            )
          }
          aria-live="polite"
          className="truncate text-center font-medium"
        >
          {announcements[announcementIndex]}
        </button>

        {/* Right-side links */}
        <div className="flex items-center justify-end gap-3 sm:gap-5">
          <Link
            to="/pages/faqs"
            className="hidden hover:underline sm:block"
          >
            FAQs
          </Link>

          <Link
            to="/pages/manage-my-order"
            className="hidden whitespace-nowrap hover:underline md:block"
          >
            Manage my order
          </Link>

          {/* Country dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCountryOpen(true)}
            onMouseLeave={() => setCountryOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCountryOpen((open) => !open)}
              className="flex items-center gap-1 whitespace-nowrap"
              aria-expanded={countryOpen}
            >
              {country.flag}
              <span className="hidden sm:inline">
                {country.name}
              </span>
              <ChevronDown size={14} />
            </button>

            {countryOpen && (
              <div className="absolute right-0 top-full w-48 bg-white py-2 text-sm text-[#292b25] shadow-xl rounded-b-md">
                {countries.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setCountry(item);
                      setCountryOpen(false);
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-gray-100"
                  >
                    {item.flag} {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}