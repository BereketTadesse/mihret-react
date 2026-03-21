import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredStyle = (category: string) => {
    return filter === 'all' || filter === category
      ? { display: 'block', opacity: 1, transform: 'scale(1)' }
      : { display: 'none', opacity: 0, transform: 'scale(0.95)' };
  };

  const getBtnClass = (activeTarget: string) => {
    const base = "font-label tracking-widest uppercase transition-all pb-1";
    if (filter === activeTarget) {
      return `${base} text-primary border-b-2 border-primary`;
    }
    return `${base} text-on-surface-variant hover:text-on-surface`;
  };

  return (
    <>


      {/* Main Content Canvas */}
      <main className="pt-32 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <span className="font-label text-primary tracking-[0.3em] uppercase mb-4 block">Portfolio 2024</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none mb-8">
              Mihret Multimedia: <br />
              <span className="text-primary-container">The Auteur's Vision.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Crafting cinematic experiences that blur the line between reality and digital artistry. Every frame is a
              deliberate choice.
            </p>
            <div className="flex gap-4">
              <button className="shimmer-btn relative bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 font-label font-bold tracking-widest uppercase transition-transform active:scale-95 overflow-hidden">
                Watch Showreel
              </button>
              <button className="border border-outline-variant/30 hover:bg-surface-container-high px-8 py-4 font-label font-bold tracking-widest uppercase transition-all">
                Inquiry
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter Bar (Glassmorphism) */}
        <div className="sticky top-24 z-30 mb-12 py-4 -mx-6 px-6 overflow-x-auto no-scrollbar glass-blur bg-surface-variant/40 rounded-xl">
          <div className="flex items-center gap-8 min-w-max">
            <button className={getBtnClass('all')} onClick={() => setFilter('all')}>All Work</button>
            <button className={getBtnClass('movies')} onClick={() => setFilter('movies')}>Movies</button>
            <button className={getBtnClass('documentaries')} onClick={() => setFilter('documentaries')}>Documentaries</button>
            <button className={getBtnClass('commercials')} onClick={() => setFilter('commercials')}>Commercials</button>
            <button className={getBtnClass('music-videos')} onClick={() => setFilter('music-videos')}>Music Videos</button>
            <button className={getBtnClass('events')} onClick={() => setFilter('events')}>Events</button>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {/* Large Feature Card */}
          <div style={filteredStyle('movies')} className="col-span-1 sm:col-span-2 row-span-2 group relative overflow-hidden bg-surface-container-low transition-all duration-500 ease-in-out cursor-pointer">
            <img alt="The Obsidian Night Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJNu8nN5q_h8q6T0x67FAE6i_leNjM58SBqZI93tjZEA2AshvUTXQ8lJrQYla2xWcUHHTHUse_Szk6ZZPpO4EF0QekKELLEoGPW1i749-jAfBCc4EpdlLx17lMGuvxzLkrtHuyfAJpaJCNtlzQp-GpUOIuzwH3e6jSrjcihmAJEYwYRdYOx9UmYtynS3iu5LP8JUKWqwk5wIzKM6rrT_bJTFm6oNIBWeLR2kKKxLa2roWtQT5cFEwws6Xdyey7oXrOcDI0gSciZU3H" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <span className="material-symbols-outlined text-primary text-7xl drop-shadow-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="font-label text-primary-container text-xs mb-2 block tracking-widest">FEATURE FILM</span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">The Obsidian Night</h3>
            </div>
          </div>

          {/* Tall Portrait Card */}
          <div style={filteredStyle('documentaries')} className="col-span-1 row-span-2 group relative overflow-hidden bg-surface-container-low transition-all duration-500 ease-in-out cursor-pointer">
            <img alt="Documentary Series" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6OXangioR7ufhf8ELhqhIJq3pi6XkR_ltgXgowOmqjwsAnAhW-sEO6vkkhgmgljjhILEuoI6f9GZz_N-mYlcNXaVVSiTpBQ0PRnKQeZ0JeFsmOSTVbsJLiAzg2Id8JkHLaqg7C0nKYJIEyWAdPQisJGIlMX2mPeN4VXYAK8MmCCRT7BiuwAFQOz7Xslqs2qjH7eTE-uycGOKgjBXQtvw9heGEvjQgcUqaDjCffhnavfhJXO6OA5x5QISqDcDhbbD_4Ns2OKtOBww7" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="font-label text-primary-container text-xs mb-2 block tracking-widest">DOCUMENTARY</span>
              <h3 className="text-xl font-headline font-bold uppercase tracking-tight">Unfiltered Souls</h3>
            </div>
          </div>

          {/* Standard Landscape Card */}
          <div style={filteredStyle('commercials')} className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low transition-all duration-500 ease-in-out cursor-pointer">
            <img alt="Commercial Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUzFDZ2fPdP5GgvEUXD8UftDBq6hF6TKddAgieEQkaNj3hR6wv5ZKKXkewFzx88SQbYI4VNikm2VTz9m5pq-iGAoYgk0PWfaT5GkzE3B9WFCCnNeOFgRKpisbEcHWmRo1RdOldPpkyggwAKlQEWl6DiCGKCGUNPWSVFHR3Yyh_oqI2S3Aog_kWnjd4j3Fv-yV5sca0HDGtkGkvJK6QcUOwvMyfqMD24IXcfZEkdNFJP1u2YzoMq5QCibR7NujKWko9ioHHRveCYqiu" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-primary-container text-[10px] mb-1 block tracking-widest">COMMERCIAL</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-tight">Aura Fragrance</h3>
            </div>
          </div>

          {/* Standard Landscape Card 2 */}
          <div style={filteredStyle('events')} className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low transition-all duration-500 ease-in-out cursor-pointer">
            <img alt="Event Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5BRQ-cA9o1d4-UAryBcPxp46TLSQhXJS_2hV7io2t6BzRzQlhz1mjwJJeLBI5cRiD0m6KGx4xailGrAHCwM0YRaH1p-0iad0U1MAFRyMFNCYXRE7Oof15UkRa2AQATpC3u8qmX5sRdV1L5bvyWXOye9nsem9N3Ol491SknM_cMgWouAl_R_1E97TXIJewRl5aVl9d5qtX6z_kfIPYSKEO41vMBHgfKPqFrjOGtrOdz9yqC4HtKYPWQfPzKAIrYeWBKL0_uXWjNiqL" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-primary-container text-[10px] mb-1 block tracking-widest">EVENT</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-tight">Vortex Festival</h3>
            </div>
          </div>

          {/* Wide Card */}
          <div style={filteredStyle('music-videos')} className="col-span-1 sm:col-span-2 row-span-1 group relative overflow-hidden bg-surface-container-low transition-all duration-500 ease-in-out cursor-pointer">
            <img alt="Project Wide" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3uD9gsbketKWXI29RvSqdw0uqx3ZrjS0o52QlPiVFSzGbsd14hGviPcXHt3CO8HVeaYul5a5emMyMuxX2R-pZXZEMtKTVlbCd8LixqLdkAYxfg3x1ys75wfbMSLDyYxYTUkG7H6gOug-jD52Ouu6WorGD4xOJ2vlU39qGGUkh4VZaf1fjg8VbljSeWqhiDu3uqT4JihxY5vehQEdo7AjHiA8YEfC_lLFzaehD4qUERTYQ8xB39mHJXvriWg-34PofdGFnGypLz-TX" />
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-80 group-hover:opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute inset-y-0 left-6 flex flex-col justify-center">
              <span className="font-label text-primary-container text-xs mb-2 block tracking-widest">MUSIC VIDEO</span>
              <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">Electric Echoes</h3>
            </div>
          </div>

          {/* Final Square Card */}
          <div style={filteredStyle('experimental')} className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low transition-all duration-500 ease-in-out cursor-pointer">
            <img alt="Tech project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlkHsTlyZvYfRC1-VMLzTKj1oJzQ2InHKkipyi5CGS9opNpRKVVtmBl6tkx_k2NTJGHlfa-83MRZ8MQstK16LVkVeXQdRukaAEgns5EqXM3Sy2ZzA56ntWbtjCnU3dMpXAv0nuSTzd_qcVH96PrhO1IGSlkFtRX-41Gwad_kV_kw5gL2llcH5lMeAQjS5SNTQsy5xasU99Ql7gCg6_bDEFCzgf46Ao_R4BAlj1hEc1fjrmvBEPSpmnDgek21s9nJTGu7BfP5RVKfL_" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="font-label text-primary-container text-[10px] mb-1 block tracking-widest">EXPERIMENTAL</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-tight">Lens Distortion</h3>
            </div>
          </div>

          {/* Final Tall Card */}
          <div style={filteredStyle('events')} className="col-span-1 row-span-1 group relative overflow-hidden bg-surface-container-low transition-all duration-500 ease-in-out cursor-pointer">
            <img alt="Awards" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnoiEZwb20sSkXyBvDxmtj8GtGqaRDZvMla5j3b7FWfWrhbnc-d7HQVs5HVSrTA7PSaLjw71u_qqeBWk-Z25SNepNPXao3yoL8OxyvXYF71-0eesV_Ab66afFIKTG6C71S5BTameo6WxrQFOv3Ps-dyte0Vu9J9wWrjLYqcY-_esdkvupdK1Un4tUUC1bX4EGhVK5RBqMFKJX6TceY-QTeh-0EgjMqVWW8HE-u0R9ZeGVhBItHdvDxbBiRK6W1beCn9aWaw1UmIW-0" />
            <div className="absolute inset-0 bg-surface-container-highest/60 flex flex-col items-center justify-center text-center p-6">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">star</span>
              <h3 className="text-lg font-headline font-bold uppercase tracking-widest">Awards &amp; Recognition</h3>
              <p className="text-[10px] font-label text-on-surface/50 mt-2">12 International Selections</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-32 py-24 bg-surface-container-lowest text-center rounded-2xl">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase mb-6">Start Your Project</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10 px-4">
            Let's redefine the cinematic landscape together. Our team is ready to bring your vision to life with precision
            and passion.
          </p>
          <button className="shimmer-btn relative bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 font-label font-bold tracking-[0.2em] uppercase transition-transform active:scale-95 overflow-hidden">
            Let's Talk
          </button>
        </section>
      </main>
    </>
  );
}
