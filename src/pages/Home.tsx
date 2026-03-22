import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const clients = [
    { name: 'Abronet Saccos', logo: '/logo/Abronet-saccos.png' },
    { name: 'Abronet', logo: '/logo/abronet.png' },
    { name: 'Absimadokos', logo: '/logo/absimadokos.png' },
    { name: 'Adabai', logo: '/logo/adabai.png' },
    { name: 'Ami Luxury Salon', logo: '/logo/ami-laxury-salon.png' },
    { name: 'Canary Tube', logo: '/logo/canary-tube.png' },
    { name: 'Ethiopia Food Engineer Associate', logo: '/logo/ethiopia food engineer associate.png' },
    { name: 'Ferils Mad World', logo: '/logo/ferils-mad-world.png' },
    { name: 'Gojo Casting', logo: '/logo/gojo-casting.png' },
    { name: 'Kanfier Trading', logo: '/logo/kanfier-trading.png' },
    { name: 'Kedamawi Modeling School', logo: '/logo/kedamawi-modeling-school.png' },
    { name: 'OP', logo: '/logo/op.png' },
    { name: 'Saltela Charitable', logo: '/logo/saltela-charitable.png' },
    { name: 'Saved To Save', logo: '/logo/saved-to-save.png' },
    { name: 'TDS', logo: '/logo/TDS.png' },
    { name: 'Tsedey Radio', logo: '/logo/tsedey-radio.png' },
  ];
  const showreelVideo = '/showreel.mp4';

  return (
    <>
      {isShowreelOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8">
          <button
            type="button"
            aria-label="Close showreel"
            className="absolute right-4 top-4 md:right-8 md:top-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:border-primary/60 hover:text-primary"
            onClick={() => setIsShowreelOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
            <video
              className="aspect-video w-full bg-black"
              src={showreelVideo}
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover scale-105"
            alt="Wide cinematic shot of a professional film set at night"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1MV9_BDpmlUDBBUrqh-nrIhSLvn4F_FejVP0cwj7KIe0bqKr24vB9w0wmGnGvtjcXt1_saY7FRsWLLgOuRuWa_lyNR_SuzfRRcPzxmm5l_G6QyPfZDf-pV09ll3BbAXq2QxDiaEqOHU2AlhrGwAdg8KYXxC7ixnv0pMbw3gKK7LJ8euMRgLlF1XVuy4euuPkxmJlQn2ps-WzL9iL6Ck8kXpqhxvPQNuFpN2Delo77OAs4vOkLeaB8k2_4UuozIEF1hF39C1sxvQe9"
          />
        </div>
        <div className="relative z-20 px-8 md:px-24 max-w-5xl">
          <div className="space-y-2 mb-5 md:mb-6">
            <span className="label-md tracking-[0.3em] text-primary uppercase font-bold text-xs">EST. 2012 — ADDIS ABABA</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.84] font-headline uppercase">
              TOLD IN<br />
              <span className="text-primary">GOLDEN</span> LIGHT
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-on-surface/80 max-w-xl mb-8 md:mb-10 leading-relaxed font-body">
            Mihret Multimedia &amp; Film Production is an independent studio crafting visually arrestive narratives for the global stage.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <button
              type="button"
              className="shimmer-btn group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold tracking-widest uppercase text-sm flex items-center gap-3 transition-transform active:scale-95"
              onClick={() => setIsShowreelOpen(true)}
            >
              WATCH SHOWREEL
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
            <button
              className="px-8 md:px-10 py-4 md:py-5 border border-outline-variant/30 text-on-surface font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-colors active:scale-95"
              onClick={() => navigate('/portfolio')}
            >
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 md:gap-4 opacity-50">
          <span className="label-md tracking-widest uppercase text-xs">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </main>

      {/* Showreel Section */}
      <section className="bg-surface px-8 py-12 md:px-24 md:py-16 font-body">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            className="group relative block w-full overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-[#16130f] text-left shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
            onClick={() => setIsShowreelOpen(true)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.68))]" />
            <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-y-[8%] left-[7%] w-[12%] rounded-t-[999px] border border-white/8 bg-gradient-to-b from-white/10 via-black/35 to-black/55 shadow-[inset_0_0_35px_rgba(255,255,255,0.05)]" />
            <div className="absolute inset-y-[8%] right-[7%] w-[12%] rounded-t-[999px] border border-white/8 bg-gradient-to-b from-white/10 via-black/35 to-black/55 shadow-[inset_0_0_35px_rgba(255,255,255,0.05)]" />
            <img
              className="h-[380px] w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105 md:h-[520px]"
              alt="Showreel preview backdrop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1MV9_BDpmlUDBBUrqh-nrIhSLvn4F_FejVP0cwj7KIe0bqKr24vB9w0wmGnGvtjcXt1_saY7FRsWLLgOuRuWa_lyNR_SuzfRRcPzxmm5l_G6QyPfZDf-pV09ll3BbAXq2QxDiaEqOHU2AlhrGwAdg8KYXxC7ixnv0pMbw3gKK7LJ8euMRgLlF1XVuy4euuPkxmJlQn2ps-WzL9iL6Ck8kXpqhxvPQNuFpN2Delo77OAs4vOkLeaB8k2_4UuozIEF1hF39C1sxvQe9"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#f3c856]/40 bg-[#f3c856]/12 text-[#f3c856] shadow-[0_0_35px_rgba(243,200,86,0.16)] transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-black/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
                Available Now
              </span>
              <h2 className="max-w-4xl text-4xl font-black uppercase tracking-[-0.06em] text-on-surface drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] sm:text-5xl md:text-7xl">
                THE SHOWREEL
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-surface-variant md:text-base">
                A quick look into Mihret Multimedia&apos;s cinematic direction, production energy, and visual storytelling.
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-8 md:px-24 bg-surface-container-lowest relative font-body">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="label-md tracking-widest text-primary uppercase font-bold text-xs">LATEST PRODUCTIONS</span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter font-headline uppercase">FEATURED WORKS</h3>
          </div>
          <p className="text-on-surface-variant max-w-sm text-right font-medium">
            Our portfolio spans commercial high-fashion, narrative features, and documentary storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
          {/* Main Card */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-lg shadow-2xl cursor-pointer">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Atmospheric still from a dramatic narrative film"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbpkT7sL07kttjSoOd5zWJIactrkacxRgSbgIRThuYcQ89IMvp3JK_WpoUlrrWCT6_kVO9gWJmRIMz_kioVT6hE0sD7PQHCpdKqdi2ul38nXWndd1bw0Q2Ykf44sB10_8sO9RuIJMkz_Vy9uAsX1p5c2Dpop-A23cSDCixyZqzuFHC0kQiCTfvJjPzs8RR2ZTv7bJEm8FP9USXghrWQvFGeOvrpYae-OZGJS3Wy8j64td2gS-iAnuAiieej0HMAp_Q7KLCOQ5mxhXm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
              <div className="space-y-4">
                <span className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] text-primary font-bold tracking-widest uppercase border border-primary/20">DRAMA / 2024</span>
                <h4 className="text-4xl font-black font-headline tracking-tighter uppercase">THE SILENT VALLEY</h4>
              </div>
              <span className="material-symbols-outlined text-4xl text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">arrow_forward</span>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 group relative overflow-hidden bg-surface-container-low rounded-lg shadow-xl cursor-pointer">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Cinematic commercial production shot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjk9hjiFZOXbkdsW79PJmnzBK-1CrpYhyyxzenhoX0Fpw6hO_7TZB8-XCdNqwv4q0OtliRsddlDnrv7_ZMtogps9fUDUtjytgs6hZiKMFaQYZY02VhGtrN_Ec_VIYoxX-OCOrfKr7_D7Y4kR2k1XidvaubxDdRU6jDP3KnWOt5TUyceBBkqU_VuXvGKRvLPbGhyLcOSEAj8VBkOQ1zOfYRNHIsgl46UdG9-nBX2nh6miOrNWYLwZ2NyhZVE5v9F-MekdgkVj2uBHLL"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2">COMMERCIAL</span>
                <h4 className="text-xl font-black font-headline tracking-tight uppercase">ETHEREAL FLOW</h4>
              </div>
            </div>
            <div className="flex-1 group relative overflow-hidden bg-surface-container-low rounded-lg shadow-xl cursor-pointer">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Documentary style film production"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAttxd2LGCfR4pfHQKL4HE505fB5QEE4CizbBH8wTPK2KLAzMp6EZYZtPJErJyVQkmXUd7zLNPrTCh-EDwzRigAsMlI4x-bu5ySD_DrKZrYgDoQQi5QCy-GTZOMYTh2MK5g7G43E116m2M4NQCGEm2SSDpUO-UxWQ5W_2-6rPH9dzxY09Jbg3WVdPqYFUXR8pWeS4XpnuzA7vba66GbWmWYr35-NLPE-2KtSez7xTy93Sy0yYleb9tvOiIT29TCjU1rbWBX799iwJJi"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2">DOCUMENTARY</span>
                <h4 className="text-xl font-black font-headline tracking-tight uppercase">URBAN RHYTHMS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR CLIENTS ─────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-24 bg-surface-container-lowest border-y border-outline-variant/15 font-body relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,75,28,0.10),transparent_28%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="label-md tracking-widest text-primary uppercase font-bold text-xs">Trusted By</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-headline uppercase">
                OUR <span className="text-primary">CLIENTS</span>
              </h3>
            </div>
            <p className="text-on-surface-variant max-w-md text-sm md:text-base leading-relaxed">
              Sixteen brands, studios, and organisations from the public logo archive presented as a clean client wall instead of placeholder names.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-14 md:w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-14 md:w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
              <div className="animate-marquee flex gap-4 md:gap-5 shrink-0 py-2">
                {[...clients, ...clients].map((client, index) => (
                  <article
                    key={`${client.name}-${index}`}
                    className="group relative w-[220px] md:w-[260px] min-h-[150px] md:min-h-[170px] border border-outline-variant/20 bg-surface-container-low hover:border-primary/40 transition-all duration-300 overflow-hidden shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-5 md:p-6">
                      <div className="h-16 md:h-20 w-full flex items-center justify-center">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="max-h-full max-w-full object-contain transition-all duration-300"
                        />
                      </div>
                      <div className="w-full text-center">
                        <div className="mx-auto mb-3 h-px w-10 bg-outline-variant/40 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
                          {client.name}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 md:px-24 bg-surface font-body overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-[100px]"></div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter font-headline uppercase leading-none mb-12">
              CRAFTING THE <br /><span className="text-primary italic">VISION</span>
            </h3>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">theaters</span>
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold font-headline uppercase tracking-tight">Post-Production</h5>
                  <p className="text-on-surface-variant leading-relaxed">High-end color grading, visual effects, and sound design tailored for cinematic delivery.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">camera_roll</span>
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold font-headline uppercase tracking-tight">Cinematography</h5>
                  <p className="text-on-surface-variant leading-relaxed">World-class lighting and camera work using industry-leading 8K equipment.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl font-bold font-headline uppercase tracking-tight">Direction</h5>
                  <p className="text-on-surface-variant leading-relaxed">Visionary leadership that transforms scripts into visceral on-screen experiences.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" alt="Camera rig" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-AIXtVE9D-byhgfZhnSPR-IysrKDs5v7r3mS45opxwmSYL9NhLZemVSKflUwI6zq253tVRYwtNVlr0De2utumQDcH1vtX7zsG-4nalmhnJ5YYAtZBuITyVHYgBs9Hq1WsQrVHfGF4fLG4s8fbTBQHpeXlTF8F_m9Uc0xdCNbjR9vS7ex0zrBNy_Mk65tWPw1tWytuqrWYD7o_PSFjylxCtB5AV2sJr6StA_QtHURCJ-YKR5C-vwNQfKSXP6kJgqXnkoK_-37iN9GA" />
            <div className="flex flex-col gap-4 mt-12">
              <img className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" alt="Director" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYXdZw9uuq7G3Qw-yVjc7qUKA_FlAR44KjDP9bK-C_apqrs8XesgMHRFZAR2wY_nzTDoaUsgZ9VSCrcUfnbkABaOguDmvzYHg_ZADRLHeWjc_DJmQkc-PmjO5OO-j7WF4Tw1admUE_dTg6rjqKm4-Yzt1igHGLAVKZ5wGHUAX6aOT41D47P3lNqc6pNjZrONiQySEShjeUd7A16PFHIGU6z2PMY-4t5jMIkiYEdsE-PbGaxCQaYZEyANJcfUGA_L4e3ALJaOszZVoB" />
              <div className="bg-primary p-8 flex flex-col justify-between h-full">
                <span className="text-[10px] font-black tracking-widest uppercase text-on-primary/60">TECH SPECS</span>
                <h6 className="text-2xl font-black text-on-primary font-headline uppercase leading-tight">8K RED MONSTRO WORKFLOW</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
