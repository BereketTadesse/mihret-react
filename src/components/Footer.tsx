export default function Footer() {
  return (
    <footer className="relative bg-surface-container-lowest pt-16 md:pt-32 pb-12 overflow-hidden border-t border-outline-variant/10 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,75,28,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-10 md:mb-20 text-center md:text-left">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-on-surface font-headline uppercase mb-3 md:mb-4">MIHRET<span className="text-primary">.</span></h2>
            <p className="text-on-surface-variant font-body leading-relaxed text-sm md:text-base">
              Engineering emotion through precision and light. Based in Addis Ababa, operating worldwide.
            </p>
          </div>
          
          {/* Social Icons Strip */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
            {[
              { 
                name: 'YouTube', 
                link: 'https://youtube.com/@mihretmultimedia?si=3CHYdAinB6BTiIG1',
                path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              },
              { 
                name: 'TikTok', 
                link: 'https://www.tiktok.com/@mihret.multimedia?_r=1&_d=e8e7k73lmed6k1&sec_uid=MS4wLjABAAAA2jzujn9BCHmNnqe4F3e5CAsgotrVSohJuB4zg9_CGvJBG_i9td2YKDiLoPvE9kBe&share_author_id=7665593799293256712&sharer_language=en&source=h5_m&u_code=f4i5hjgfi7a0e2&timestamp=1786018510&user_id=7665593799293256712&sec_user_id=MS4wLjABAAAA2jzujn9BCHmNnqe4F3e5CAsgotrVSohJuB4zg9_CGvJBG_i9td2YKDiLoPvE9kBe&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7667912349957916424&share_link_id=6fda1d0d-b61d-4630-829c-cf610b534481&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1',
                path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.34 6.34 0 0 1-1.84-1.47v6.78c-.04 2.13-.78 4.29-2.22 5.87-1.43 1.58-3.52 2.46-5.63 2.47-2.12.01-4.23-.84-5.69-2.39C1.48 18.39.63 16.32.62 14.22c-.01-2.13.84-4.25 2.39-5.71 1.55-1.46 3.65-2.32 5.76-2.32.32 0 .64.01.96.04v3.91a4.34 4.34 0 0 0-4.32 4.08c-.01 1.25.5 2.49 1.4 3.35.89.86 2.14 1.34 3.39 1.33 1.25-.01 2.46-.5 3.32-1.41.86-.91 1.3-2.17 1.26-3.41V.02Z"
              },
              { 
                name: 'Facebook', 
                link: 'https://www.facebook.com/profile.php?id=61575309076593',
                path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
              },
              { 
                name: 'Instagram', 
                link: 'https://www.instagram.com/mihret_multimedia005?igsh=OTRmbnpraHNydWg3',
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              },
              { 
                name: 'Telegram', 
                link: 'https://t.me/Mihret_Multimedia',
                path: "M23.91 3.012l-3.597 16.962c-.27 1.22-.99 1.522-2.01.95l-5.48-4.04-2.64 2.54c-.292.292-.538.538-1.1.538l.39-5.55 10.1-9.12c.44-.39-.1-.61-.69-.21l-12.48 7.85-5.38-1.68c-1.17-.37-1.19-1.17.24-1.73l21.01-8.1c.97-.363 1.815.215 1.54 1.53z"
              }
            ].map((s) => (
              <a 
                key={s.name} 
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full border border-outline-variant/20 flex items-center justify-center bg-surface-container-low hover:bg-primary/10 hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 fill-on-surface/50 group-hover:fill-primary relative z-10 transition-colors duration-300"
                >
                  <path d={s.path} />
                </svg>
                
                {/* Tooltip */}
                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 text-[10px] font-bold tracking-[0.2em] uppercase text-primary transition-all duration-300">
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/10 gap-6">
          <p className="text-on-surface/30 font-label tracking-[0.2em] text-[10px] uppercase font-bold text-center md:text-left">
            © 2026 MIHRET MULTIMEDIA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface/30">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
