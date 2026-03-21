export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-40 px-6 max-w-7xl mx-auto font-body">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="font-headline font-bold text-5xl md:text-7xl tracking-[-0.04em] text-on-surface mb-4">
          GET IN <span className="text-primary">TOUCH</span>
        </h1>
        <p className="font-body text-on-surface/60 text-lg max-w-xl">
          Elevate your cinematic vision. Our studio doors are open for auteurs, creators, and visionaries ready to redefine multimedia.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Side: Contact Details */}
        <div className="space-y-12">
          <div className="bg-surface-variant/40 backdrop-blur-2xl p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <div>
                  <p className="font-label text-primary uppercase tracking-[0.1em] text-xs mb-1">Phone</p>
                  <p className="text-xl font-headline font-semibold">+251902312888</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div>
                  <p className="font-label text-primary uppercase tracking-[0.1em] text-xs mb-1">Email</p>
                  <p className="text-xl font-headline font-semibold">mihretmultimedia@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <p className="font-label text-primary uppercase tracking-[0.1em] text-xs mb-1">Location</p>
                  <p className="text-xl font-headline font-semibold">4 Kilo Ikhlas Bldg,<br />Addis Ababa</p>
                </div>
              </div>
            </div>
          </div>
          {/* Abstract Decorative Element */}
          <div className="hidden lg:block h-64 w-full rounded-xl overflow-hidden relative">
            <img className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700" alt="Abstract cinematic light leaks in dark studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA3T1p39m-UqxpGamiTg5xCNm2AYg0E0r6907cBph5jOXVbX0b6lXTFPWAVAhlrC7534JTRRkLCGqOTMOmqGcUwiuOIxldSv9E8dh2iskQfUFDSHYU8LPFrm8xtdQFuqLwV63ZdOc3yB1fPDF1zRYUJuV8XPIVsAYJEGxfDAeX1vc3Oazm9mG-cap790UqDd4snTXGlJytPpnPZy95cwPawrxtg1BMgmZ7Q6hHbtkNk5ZohoE_2-vN3JoofS8Y7-pVpgU8Et0Gd7Iw" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-surface-variant/40 backdrop-blur-2xl p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/15">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-[0.2em] text-on-surface/50">Full Name</label>
              <input className="w-full bg-transparent border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 transition-colors py-3 px-0 font-headline text-lg placeholder:text-on-surface/20 outline-none" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-[0.2em] text-on-surface/50">Email Address</label>
              <input className="w-full bg-transparent border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 transition-colors py-3 px-0 font-headline text-lg placeholder:text-on-surface/20 outline-none" placeholder="john@multimedia.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-[0.2em] text-on-surface/50">Message</label>
              <textarea className="w-full bg-transparent border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 transition-colors py-3 px-0 font-headline text-lg placeholder:text-on-surface/20 resize-none outline-none" placeholder="Briefly describe your production or project..." rows={4}></textarea>
            </div>
            <button className="shimmer-effect w-full py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-headline font-bold uppercase tracking-widest text-sm rounded-sm hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(242,202,80,0.2)]" type="submit">
              Initialize Project
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
