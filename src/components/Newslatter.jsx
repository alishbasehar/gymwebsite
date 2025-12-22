import { Link } from "react-router-dom";

const Newslatter = () => {
  return (
    <section className="w-full py-12 px-4">
      <div
        className="max-w-4xl mx-auto mt-10 mb-10 rounded-3xl text-center text-white p-8 md:p-12 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #A58120, #bcac71)",
          opacity: 0.93,
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Connected With Us
        </h2>

        <p className="text-sm md:text-base text-gray-100 mb-8 max-w-2xl mx-auto">
          Follow us on Instagram and contact us for memberships, training plans,
          and more fitness updates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Instagram (external link → a tag correct hai) */}
          <a
            href="https://www.instagram.com/qr_gym/?igsh=MmdyNzlobGtlbWE&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#A58120] text-black font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Subscribe
          </a>

          {/* Contact Us (internal route → Link use karo) */}
          <Link
            to="/Contact"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Newslatter;
