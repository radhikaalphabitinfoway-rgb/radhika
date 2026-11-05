import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Help",
    links: [
      ["Request delivery change", "/pages/our-impact"],
      ["Contact & FAQs", "/pages/contact"],
      ["Finance options", "/pages/finance"],
      ["My Account", "/account"],
    ],
  },
  {
    title: "About",
    links: [
      ["About us", "/pages/about"],
      ["Our impact", "/pages/our-impact"],
      ["Innovation", "/pages/innovation"],
      ["Koala Second Home", "/pages/second-home"],
      ["Koala Showroom", "/pages/moore-park-showroom"],
      ["Careers", "/pages/careers"],
      ["Investors", "/pages/investors"],
      ["press@koala.com", "mailto:press@koala.com"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Delivery", "/pages/delivery"],
      ["Koala reviews", "/pages/reviews"],
      ["120 day trial", "/pages/120-day-trial"],
      ["Warranty", "/pages/warranty"],
      ["Treetops blog", "/blogs/treetops"],
      ["Refer a friend", "/pages/refer-a-friend"],
      ["Compare Koala", "/pages/compare"],
      ["Student discount", "/pages/student-discount"],
    ],
  },
  {
    title: "Shop",
    links: [
      ["Mattresses", "/collections/mattresses"],
      ["Sofa Beds", "/collections/sofa-beds"],
      ["Sofas", "/collections/sofas"],
      ["Bedroom", "/collections/bedroom"],
      ["Living Room", "/collections/living-room"],
      ["Outdoor", "/collections/outdoor"],
      ["Koala x Bluey Playtime Collection","/collections/bluey"],
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2a10 10 0 1 0 1.9 19.82v-7.04h-2.1v-2.6h2.1v-1.98c0-2.08 1.24-3.23 3.13-3.23.91 0 1.86.16 1.86.16v2.05h-1.05c-1.03 0-1.35.64-1.35 1.3v1.7h2.3l-.37 2.6h-1.93v7.04A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </svg>
    ),
  },
];

const CERTIFICATIONS = [
  { mark: "✓", label: "GOOD DESIGN\nAWARD WINNER" },
  { mark: "B", label: "Certified\nB Corporation" },
  { mark: "1%", label: "FOR THE\nPLANET" },
  { mark: "♧", label: "FSC" },
];

const PAYMENT_METHODS = [
  "PayPal",
  "VISA",
  "●",
  "AMEX",
  "↔",
  "ZIP",
];

export default function Footer() {
  return (
    <footer
      id="about"
      className="w-full bg-[#60634f] text-white"
    >
      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:px-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-10 lg:px-14 lg:py-8">
        {/* Acknowledgment and Logo */}
        <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-6">
          <Link
            to="/"
            aria-label="Koala home"
            className="mb-5 inline-block text-5xl font-black tracking-[-3px] leading-none text-[#d7dfc7]"
          >
            koala<span className="text-white">.</span>
          </Link>

          <p className="max-w-[560px] text-sm leading-6">
            In the spirit of reconciliation, Koala acknowledges the
            Traditional Custodians of Country throughout Australia and
            their connections to land, sea and community.
          </p>

          <p className="mt-4 max-w-[560px] text-sm leading-6">
            We pay our respect to their Elders past and present and
            extend that respect to all Aboriginal and Torres Strait
            Islander peoples today.
          </p>

          {/* Social Icons */}
          <div className="mt-7 flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition-colors hover:text-[#c9d6ad]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Certification Marks */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-5">
            {CERTIFICATIONS.map((item) => (
              <div
                key={item.label}
                className="flex min-w-[62px] flex-col items-center text-center"
              >
                <span className="flex h-11 items-center justify-center text-4xl font-bold leading-none">
                  {item.mark}
                </span>
                <span className="mt-1 whitespace-pre-line text-[9px] font-bold leading-[1.15]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link Columns */}
        {FOOTER_COLUMNS.map((column, index) => (
          <div key={index} className="pt-1">
            <ul className="space-y-4">
              {column.links.map(([label, href]) => {
                const external = href.startsWith("mailto:");

                return (
                  <li key={label}>
                    {external ? (
                      <a
                        href={href}
                        className="text-[15px] leading-6 transition-colors hover:text-[#d7dfc7]"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={href}
                        className="text-[15px] leading-6 transition-colors hover:text-[#d7dfc7]"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-6 border-t border-white/30 py-7 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright and Policies */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs">
            <span className="font-medium text-white">
              © 2026 Koala
            </span>

            <Link
              to="/pages/privacy-policy"
              className="text-white/90 hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>

            <Link
              to="/pages/website-terms"
              className="text-white/90 hover:text-white hover:underline"
            >
              Website Terms
            </Link>

            <Link
              to="/pages/terms"
              className="text-white/90 hover:text-white hover:underline"
            >
              Terms of Service
            </Link>

            <Link
              to="/pages/promotion-terms"
              className="text-white/90 hover:text-white hover:underline"
            >
              Promotion Terms
            </Link>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-1.5">
            {PAYMENT_METHODS.map((method, index) => (
              <span
                key={index}
                className={`flex h-6 min-w-8 items-center justify-center rounded-sm border border-gray-200 bg-white px-1 text-[9px] font-extrabold ${
                  index === 0
                    ? "text-blue-700"
                    : index === 1
                      ? "italic text-blue-800"
                      : index === 2
                        ? "text-red-500"
                        : index === 3
                          ? "text-blue-600"
                          : index === 4
                            ? "text-emerald-700"
                            : "bg-[#34343c] text-white"
                }`}
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/30" />
      </div>
    </footer>
  );
}