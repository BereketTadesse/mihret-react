
export default function Services() {
  return (
    <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto font-body min-h-screen">
      {/* Hero Section */}
      <section className="mb-24 text-left">
        <p className="font-label text-primary tracking-[0.2em] uppercase mb-4 text-xs font-bold">Capabilities</p>
        <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-[-0.04em] text-on-surface leading-tight">
          CRAFTING <span className="text-primary italic">VISIBLE</span><br />NARRATIVES.
        </h2>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Film/Movies */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 z-0 scale-110 transition-transform duration-700 group-hover:scale-100 opacity-60">
            <img className="w-full h-full object-cover" alt="Cinematic movie set with vintage camera and lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHLlgojGI1QkKsY3rwOuIUB_rHhHZeCQijqkBJWOjNdZP9ELfwdbd7C7szwlVlcBN9fBkE_Y6PRgLtOSktCkzeq6mK7iLIH6eq0f9xFev2givGtSXv7USLKPDxV8lWaWLltpA2l7sGsULHniww3hs2lTiZyYp0MyMwxhkAVnY3xpT2-PQtuSQMpqcqS_3X-UJMHWlo06-4EtAjVM8l7byoT9gfX_3wcvKRrxup25z-rzfjcRWY-oEJnhQN6Mq8J4Pyn80m2dlqTeAf" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] border border-outline-variant/10 group-hover:backdrop-blur-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4 text-4xl">movie</span>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Film/Movies</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed mb-6">From script to silver screen. We specialize in high-concept narrative storytelling and cinematic visuals.</p>
            <div className="w-12 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>

        {/* Event Production */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 z-0 scale-110 transition-transform duration-700 group-hover:scale-100 opacity-60">
            <img className="w-full h-full object-cover" alt="Dynamic concert stage with intense lighting and crowds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtJXwSKxWWf_MvH4QDegPSzPC1xUDtxdSVBnXzoDb6XxGtkIq9UxkIxojZU31r8s2VxTCylZnm3y7ziqnaxCYKWrRtKdrB7qM5B-TEHNRAwPkI8xVgTHXBEnjCrE_hnT87apejjtVoAAAZ6AwMiFl-hkPP7RjT9TB2BF4MyEqBaLgi47poOm36mwIJVFfJ0inkxfcFehZsZdVMnkqkMlMajtiqfWJHR3WpHTlnpfLd9GthcDOl-90DqMBm-U4NOskMERB_IhWeLWEx" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] border border-outline-variant/10 group-hover:backdrop-blur-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4 text-4xl">event</span>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Event Production</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed mb-6">Live experiences engineered for impact. Technical management, stage design, and real-time coverage.</p>
            <div className="w-12 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>

        {/* TV Shows */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 z-0 scale-110 transition-transform duration-700 group-hover:scale-100 opacity-60">
            <img className="w-full h-full object-cover" alt="Broadcast studio control room with multiple monitors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLXnHo5NLmnOCLsaS_JY1zyWwWh4-Rcin1v10yhtarjC_lAjalhTFxr3dchOykQQksV6iOKZkPLvWWFwInV-DaC4I7zRY9prj0NljCA30QxVZtMh6dwiHvPt6fXg2GZSIEkv3PA8xRDxXf0O20iie-N-n4k6v2cXzPTLviPFg7jlR4QDNAZKv5E1m1ZIPiTKiiPPyGkHWgemnY1HFyMQHuCpv5nVHoY-2_OIrE05yhggBw-GFSFH4-SrWsq4qAmwJNkrkH9aooGMXB" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] border border-outline-variant/10 group-hover:backdrop-blur-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4 text-4xl">live_tv</span>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">TV Shows</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed mb-6">Serialized content for modern audiences. Documentary, talk shows, and episodic drama production.</p>
            <div className="w-12 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 z-0 scale-110 transition-transform duration-700 group-hover:scale-100 opacity-60">
            <img className="w-full h-full object-cover" alt="Modern smartphone displaying colorful social media apps" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWc1yjzVmlj-UjbggxCmVEakPsPugR_Fw8O4BhjJu64M6OmeCxL2_RvB2WVpZ2gg0XR4hycDq38Z9LfW7qxOz1qC_pw2ta74RvPfGfRp6WclapPEnklcz_40BkZLfeP1iPOk5Noj8PG7gZtNrJ8mKnevQuscO3lmK4WozH8Q2hV7I74CAIIcMlzHcLifaWN7JCMfRm-qusI4YxgoDz9z2tu5o3L_xM4KHz2MkOYjOokirMbXh4wGM5jAr_wTL391kqF8ewgOZSE3O8" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] border border-outline-variant/10 group-hover:backdrop-blur-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4 text-4xl">ads_click</span>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Digital Marketing</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed mb-6">Strategic growth in the digital age. Social media mastery, content strategy, and brand positioning.</p>
            <div className="w-12 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>

        {/* Graphics/Editing */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 z-0 scale-110 transition-transform duration-700 group-hover:scale-100 opacity-60">
            <img className="w-full h-full object-cover" alt="High-end computer desk with glowing neon graphics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgUb8s9a-T6TckyMJC1ZMFgKKnf0d0mpA4voZRYhpKRiOUGPxbsgNItFe1vSqaxSwmvxXVHlNuprSY8Fmx4Mg4m4N5Xx8hfCueUOeo9Afi0R6R_qkh3DHvWF63rqC-o5HU5CjfE0ca4mWGlfwtNfaTPtYG-KWQGKL0bZcy3Lrslu11PROChmkG-cQH4qzNDWUPrcruMXTK6iAavlhULpUn2Lz38X9yjrYnxtZHyGMuYACCwnQw0H50tc1VF5_7G5M_JMQsCoqkWq_Z" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] border border-outline-variant/10 group-hover:backdrop-blur-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4 text-4xl">auto_awesome</span>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Graphics/Editing</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed mb-6">Polished to perfection. Visual effects, motion graphics, and high-fidelity post-production.</p>
            <div className="w-12 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>

        {/* Photography */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low shadow-2xl transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 z-0 scale-110 transition-transform duration-700 group-hover:scale-100 opacity-60">
            <img className="w-full h-full object-cover" alt="Professional DSLR camera on a tripod in a studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANKzDg_5uwG88FloO3MqOmTsfhGoqZW3PQ1aKAu-tUgSqLB20Gvp5CqvYHbOVQNASwpC0jWuTY_leKDNwZIcuYA7qFLVln_ZE3N-3zRBw73wS-rfIUm8SWOfM7de8dMg4hFN3gvUURQwJ064KuUTld6SvCk8Y-FDezocEn-Wic6ZRpSJWmxD2lB1Eo1-QKtnhGqflPfNPGYvTTFlCPj5IZaJKw6nZSaCYNzBYzy74q6SS6Xn_hPF465PhOe0MeNhrQlmUaPgGe72Jk" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] border border-outline-variant/10 group-hover:backdrop-blur-none transition-all">
            <span className="material-symbols-outlined text-primary mb-4 text-4xl">photo_camera</span>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Photography</h3>
            <p className="text-on-surface/70 text-sm leading-relaxed mb-6">Frozen in time. Commercial, editorial, and fashion photography with a cinematic eye.</p>
            <div className="w-12 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-32 text-center py-20 bg-surface-container-lowest rounded-xl border border-outline-variant/5">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">Ready to bring your <span className="text-primary italic">Vision</span> to life?</h2>
        <button className="shimmer-effect px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-widest text-lg shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-300">
          Start a Project
        </button>
      </section>
    </main>
  );
}
