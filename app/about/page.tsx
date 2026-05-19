// app/about/page.tsx
import Link from "next/link";
import {
  Shield,
  Globe,
  Heart,
  Star,
  Lock,
  Users,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Landmark,
} from "lucide-react";
import Footer from "../components/home/Footer";
import TopNavBar from "../components/home/Navbar";

const values = [
  {
    icon: Users,
    title: "Ubuntu Security",
    description:
      "We believe collective digital safety benefits everyone. We share intelligence, build community, and uplift the regional ecosystem.",
    smear: "/assets/smears/smear1.png",
  },
  {
    icon: Globe,
    title: "Local Relevance",
    description:
      "Our solutions are designed around African threat actors, regulations, and infrastructure realities — not adapted from elsewhere.",
    smear: "/assets/smears/smear3.png",
  },
  {
    icon: Lock,
    title: "Accessibility",
    description:
      "Enterprise-grade security should not require an enterprise-level budget. Our pricing reflects the African market.",
    smear: "/assets/smears/smear1.png",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We are honest about risk, transparent about our methods, and accountable for outcomes.",
    smear: "/assets/smears/smear1.png",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "We hold our work to international standards while remaining firmly grounded in local context.",
    smear: "/assets/smears/smear3.png",
  },
];

const stats = [
  { value: "300+", label: "Organisations Protected" },
  { value: "12", label: "Countries Across Africa" },
  { value: "800+", label: "Intelligence Sources" },
  { value: "24/7", label: "Incident Response" },
];

const badges = [
  { icon: Shield, text: "KDPA 2019 Compliant" },
  { icon: Shield, text: "ODPC Registered" },
  { icon: Shield, text: "ISO 27001 Aligned" },
  { icon: Shield, text: "SOC 2 Type II" },
  { icon: Shield, text: "KE-CIRT/CC Partner" },
  { icon: Shield, text: "CA Kenya Partner" },
  { icon: Shield, text: "AU Cyber Security Member" },
];

const whyItems = [
  {
    icon: BrainCircuit,
    title: "African Threat Intelligence",
    text: "We monitor the specific threat actors, fraud networks, and cybercriminal ecosystems targeting African organisations.",
    smear: "/assets/smears/smear1.png",
  },
  {
    icon: Landmark,
    title: "Regulatory Expertise",
    text: "Deep knowledge of KDPA 2019, CBK guidelines, and the full East African regulatory landscape.",
    smear: "/assets/smears/smear3.png",
  },
  {
    icon: Globe,
    title: "Mobile-First by Design",
    text: "Built for Africa's mobile-first infrastructure — M-Pesa, USSD, and fintech ecosystems are our core speciality.",
    smear: "/assets/smears/smear1.png",
  },
  {
    icon: Lock,
    title: "Accessible Pricing",
    text: "Enterprise-grade security at pricing that reflects the realities of African business budgets.",
    smear: "/assets/smears/smear1.png",
  },
  {
    icon: Users,
    title: "Local Talent",
    text: "Our team is based in Nairobi and understands the local context, languages, and threat environment.",
    smear: "/assets/smears/smear3.png",
  },
  {
    icon: Star,
    title: "Pan-African Coverage",
    text: "Protecting organisations across East, West, and Southern Africa with remote and on-site capability.",
    smear: "/assets/smears/smear1.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <TopNavBar />

      <main className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-white pt-28 pb-10 overflow-hidden">

          <div className="absolute -top-24 -left-24 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-4">

                  <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                    About Encrava
                  </p>

                  <h1 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                    Securing Africa&apos;s{" "}
                    <span className="text-[#166b5f]">Digital Future.</span>
                  </h1>

                  <div className="w-22.5 h-1 bg-[#166b5f]" />

                  <p className="text-sm md:text-[0.95rem] text-slate-500 leading-7 max-w-md">
                    Encrava is a cybersecurity company headquartered in Nairobi, Kenya,
                    with a mission to protect Africa&apos;s digital economy. We combine
                    world-class consulting expertise with AI-powered security technology
                    built specifically for African operating environments.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link
                      href="/consultation"
                      className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
                    >
                      Work With Us <ArrowUpRight size={15} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-black/15 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-50 transition"
                    >
                      Contact Us
                    </Link>
                  </div>

                </div>
              </div>

              {/* RIGHT — Mission & Vision cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">

                  <div className="relative p-8 min-h-52 border-b border-r border-slate-200 hover:bg-[#166b5f]/5 transition">
                    <div
                      className="absolute -inset-10 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: `url(/assets/smears/smear1.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "top right",
                      }}
                    />
                    <div className="relative z-10">
                      <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-4">
                        Our Mission
                      </p>
                      <p className="text-[0.95rem] text-slate-600 leading-7">
                        To protect Africa&apos;s growing digital economy by delivering
                        accessible, intelligent, and locally relevant cybersecurity
                        solutions to organisations of all sizes.
                      </p>
                    </div>
                  </div>

                  <div className="relative p-8 min-h-52 border-b border-slate-200 hover:bg-[#166b5f]/5 transition">
                    <div
                      className="absolute -inset-10 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: `url(/assets/smears/smear3.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "top right",
                      }}
                    />
                    <div className="relative z-10">
                      <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-4">
                        Our Vision
                      </p>
                      <p className="text-[0.95rem] text-slate-600 leading-7">
                        An Africa where every individual, business, and government
                        agency can participate in the digital economy without fear
                        of cyber exploitation.
                      </p>
                    </div>
                  </div>

                  {/* Stats row */}
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="relative p-8 border-b border-r border-slate-200 hover:bg-[#166b5f]/5 transition"
                    >
                      <p className="text-4xl font-bold text-[#166b5f] mb-2">{stat.value}</p>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        {stat.label}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── WHY ENCRAVA ── */}
        <section className="relative bg-white py-10 border-t border-slate-200 overflow-hidden">

          <div className="absolute -top-32 -right-32 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-4">

                  <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                    Our Difference
                  </p>

                  <h2 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                    Why{" "}
                    <span className="text-[#166b5f]">Encrava?</span>
                  </h2>

                  <div className="w-22.5 h-1 bg-[#166b5f]" />

                  <p className="text-sm md:text-[0.95rem] text-slate-500 leading-7 max-w-md">
                    Encrava is not a foreign vendor retrofitting a Western product
                    for the African market. We build for Africa, in Africa.
                  </p>

                </div>
              </div>

              {/* RIGHT — why cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                  {whyItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="relative p-6 min-h-44 border-b border-slate-200 lg:border-r hover:bg-[#166b5f]/5 transition"
                      >
                        <div
                          className="absolute -inset-10 opacity-10 pointer-events-none"
                          style={{
                            backgroundImage: `url(${item.smear})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "top right",
                          }}
                        />
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="text-[#166b5f]" size={20} />
                            <h3 className="text-[0.95rem] font-semibold text-slate-900 leading-snug">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-sm text-slate-500 leading-6">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="relative bg-white py-10 border-t border-slate-200 overflow-hidden">

          <div className="absolute -top-24 -left-24 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-4">

                  <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                    What We Stand For
                  </p>

                  <h2 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                    Our Core{" "}
                    <span className="text-[#166b5f]">Values.</span>
                  </h2>

                  <div className="w-22.5 h-1 bg-[#166b5f]" />

                  <p className="text-sm md:text-[0.95rem] text-slate-500 leading-7 max-w-md">
                    These principles guide everything we do — from product
                    development to client relationships.
                  </p>

                </div>
              </div>

              {/* RIGHT — values cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                  {values.map((value, i) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={i}
                        className="relative p-6 min-h-44 border-b border-slate-200 lg:border-r hover:bg-[#166b5f]/5 transition"
                      >
                        <div
                          className="absolute -inset-10 opacity-10 pointer-events-none"
                          style={{
                            backgroundImage: `url(${value.smear})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "top right",
                          }}
                        />
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="text-[#166b5f]" size={20} />
                            <h3 className="text-[0.95rem] font-semibold text-slate-900 leading-snug">
                              {value.title}
                            </h3>
                          </div>
                          <p className="text-sm text-slate-500 leading-6">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUST & COMPLIANCE ── */}
        <section className="w-full py-10 bg-white border-t border-slate-200 flex justify-center">
          <div className="max-w-7xl w-full px-6">

            <div className="text-center mb-6">
              <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-2">
                Standards & Certifications
              </p>
              <h2 className="text-[1.8rem] font-bold text-slate-900">
                Trust & Compliance
              </h2>
              <div className="w-[140px] h-1 bg-[#166b5f] mx-auto mt-3 rounded-full" />
              <p className="text-sm text-slate-500 mt-4 max-w-xl mx-auto">
                We operate to the highest international standards while maintaining
                full compliance with African regulations.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 px-4 py-2 border border-[#166b5f]/25 rounded-full text-[12.5px] font-medium text-slate-800 bg-white shadow-sm"
                  >
                    <Icon size={13} className="text-[#7BE09C]" />
                    {badge.text}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full bg-white flex justify-center py-8 border-t border-slate-200">
          <div className="w-full max-w-6xl px-6">
            <div className="bg-white border border-black/8 shadow-[0_25px_70px_rgba(0,0,0,0.12)] p-8 flex flex-col md:flex-row justify-between gap-10">

              {/* LEFT */}
              <div className="flex-1">
                <h2 className="text-[24px] font-bold text-slate-900 leading-snug">
                  Join the Organisations Trusting Encrava
                </h2>
                <p className="mt-3 text-sm text-black/65 leading-7 max-w-lg">
                  From fintech startups to government agencies — we are protecting
                  Africa&apos;s digital future, one organisation at a time.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/12 text-sm font-semibold text-slate-900 hover:border-[#166b5f] transition"
                  >
                    Book Consultation <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/12 text-sm font-semibold text-slate-900 hover:border-[#166b5f] transition"
                  >
                    Contact Us <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* RIGHT — green badges */}
              <div className="flex-1 flex flex-col justify-center gap-3">
                {[
                  "KDPA Aligned Security",
                  "Real-Time African Threat Intelligence",
                  "99.7% Phishing Detection Accuracy",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2.5 px-4 py-3 bg-[#166b5f] text-white text-sm font-medium shadow-[0_10px_25px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition"
                  >
                    <Shield size={15} className="opacity-90" />
                    {badge}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}