import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import Partner from "./SponsorPartner";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="py-24 container mx-auto px-4">
        <Outlet />
      </main>

      {/* ── SPONSOR & MEDIA PARTNER ── */}
      <Partner />

      {/* ── FOOTER ── */}
      <footer className="bg-[#fce8ef] pt-12 pb-0">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

          {/* Logo */}
          <div className="flex items-start">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Logo.png"
              alt="INVOFEST Logo"
              className="w-36 object-contain"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                const div = document.createElement("div");
                div.innerHTML = `<span style="font-size:1.5rem;font-weight:900;color:#7B1D3F">INV<span>O</span>FEST</span><br/><span style="font-size:0.6rem;color:#7B1D3F;letter-spacing:0.05em">INFORMATICS VOCATIONAL FESTIVAL</span>`;
                el.parentNode?.insertBefore(div, el);
              }}
            />
          </div>

          {/* Menu Navigasi */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-5">
              Menu Navigasi
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Beranda", path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { label: "Seminar", path: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
                { label: "Competition", path: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                { label: "Workshop", path: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                { label: "Talkshow", path: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm flex items-center gap-3 hover:text-[#7B1D3F] transition-colors duration-200 font-medium group"
                  >
                    <svg 
                      className="w-5 h-5 text-[#7B1D3F] transition-transform group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                    </svg>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ikuti Kami */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-5">
              Ikuti Kami
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm flex items-center gap-3 hover:text-[#7B1D3F] transition-colors duration-200 font-medium"
                >
                  <svg className="w-5 h-5 text-[#7B1D3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm flex items-center gap-3 hover:text-[#7B1D3F] transition-colors duration-200 font-medium"
                >
                  <svg className="w-5 h-5 text-[#7B1D3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 2.78 2.78 0 00-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Alamat / Map */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-5 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#7B1D3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Alamat
            </h4>
            <div className="rounded-xl overflow-hidden border border-pink-200 shadow-sm w-full h-36">
              <iframe
                title="Lokasi INVOFEST"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.034782061093!2d109.12301547413693!3d-6.886431967389274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb77953f47e33%3A0x673199859f51174!2sPoliteknik%20Harapan%20Bersama!5e0!3m2!1sen!2sid!4v1713432000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-pink-200 px-8 py-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} INVOFEST. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              {/* YouTube icon */}
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#7B1D3F] text-white hover:bg-[#5a1530] transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
              {/* Instagram icon */}
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#7B1D3F] text-white hover:bg-[#5a1530] transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.8-1.7-4.9-4.9C2.1 15.6 2 15.2 2 12s0-3.6.1-4.9C2.3 3.9 3.9 2.3 7.1 2.3c1.3-.1 1.6-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 2.7.3.3 2.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.6 6.7 6.9 6.9C8.3 24 8.7 24 12 24s3.7 0 5-.1c4.3-.2 6.7-2.6 6.9-6.9.1-1.3.1-1.7.1-5s0-3.7-.1-5C23.7 2.7 21.3.3 17 .1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}