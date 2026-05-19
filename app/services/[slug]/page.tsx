// app/services/[slug]/page.tsx
import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import TopNavBar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <TopNavBar />

      <main className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-white pt-32 pb-16 md:pb-24 overflow-hidden border-b border-slate-200">

          <div className="absolute -top-24 -left-24 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6">

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#166b5f] transition mb-10"
            >
              <ArrowLeft size={14} /> Back to Services
            </Link>

            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT */}
              <div className="lg:col-span-4 space-y-5">

                <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                  Encrava Service
                </p>

                <h1 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                  {service.title}
                </h1>

                <div className="w-22.5 h-1 bg-[#166b5f]" />

                <p className="text-sm md:text-[0.95rem] text-slate-500 leading-7 max-w-md">
                  {service.short}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
                  >
                    Book Consultation <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-black/15 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-50 transition"
                  >
                    Talk to Our Team
                  </Link>
                </div>

                <p className="text-xs text-slate-400">
                  Duration: <span className="text-slate-600 font-medium">{service.duration}</span>
                </p>

              </div>

              {/* RIGHT — overview */}
              <div className="lg:col-span-8">
                <div className="relative p-8 border border-slate-200 h-full hover:bg-[#166b5f]/5 transition">
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
                      Overview
                    </p>
                    <p className="text-[0.95rem] text-slate-600 leading-8">
                      {service.overview}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FEATURES & BENEFITS — 2-col grid matching homepage card style ── */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">

          <div className="absolute -top-32 -right-32 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT label */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-5">
                  <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                    Service Details
                  </p>
                  <h2 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                    What&apos;s{" "}
                    <span className="text-[#166b5f]">Included.</span>
                  </h2>
                  <div className="w-22.5 h-1 bg-[#166b5f]" />
                  <p className="text-sm text-slate-500 leading-7 max-w-md">
                    Every engagement is scoped and delivered to match your specific
                    operating environment and risk profile.
                  </p>
                </div>
              </div>

              {/* RIGHT — features + benefits cards */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">

                  {/* Features card */}
                  <div className="relative p-6 min-h-57.5 border-b border-r border-slate-200 hover:bg-[#166b5f]/5 transition">
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
                      <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-5">
                        Features
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((f: string) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle2 size={15} className="text-[#166b5f] shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600 leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits card */}
                  <div className="relative p-6 min-h-57.5 border-b border-slate-200 hover:bg-[#166b5f]/5 transition">
                    <div
                      className="absolute -inset-10 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: `url(/assets/smears/smear3.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "bottom left",
                      }}
                    />
                    <div className="relative z-10">
                      <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-5">
                        Key Benefits
                      </p>
                      <ul className="space-y-3">
                        {service.benefits.map((b: string) => (
                          <li key={b} className="flex items-start gap-3">
                            <CheckCircle2 size={15} className="text-[#166b5f] shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600 leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="relative bg-white py-16 md:py-24 border-t border-slate-200 overflow-hidden">

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-5">
                  <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                    Our Process
                  </p>
                  <h2 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                    How This{" "}
                    <span className="text-[#166b5f]">Works.</span>
                  </h2>
                  <div className="w-22.5 h-1 bg-[#166b5f]" />
                  <p className="text-sm text-slate-500 leading-7 max-w-md">
                    A structured, transparent engagement from discovery through to
                    final delivery and optional follow-on support.
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                  {service.process.map((step: string, i: number) => (
                    <div
                      key={step}
                      className="relative p-6 min-h-52.5 border-b border-slate-200 lg:border-r hover:bg-[#166b5f]/5 transition"
                    >
                      <div className="flex flex-col h-full">
                        <p className="text-3xl font-bold text-[#166b5f]/20 mb-4">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="text-[1rem] font-semibold text-slate-900 leading-snug">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── DELIVERABLE & IDEAL FOR ── */}
        <section className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-0 border border-slate-200">
              <div className="p-8 border-r border-slate-200 hover:bg-[#166b5f]/5 transition">
                <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-4">
                  Deliverable
                </p>
                <p className="text-sm text-slate-600 leading-7">{service.deliverable}</p>
              </div>
              <div className="p-8 hover:bg-[#166b5f]/5 transition">
                <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-4">
                  Ideal For
                </p>
                <p className="text-sm text-slate-600 leading-7">{service.idealFor}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA — matching CTA.tsx exactly ── */}
        <section className="w-full bg-white flex justify-center py-8 border-t border-slate-200">
          <div className="w-full max-w-6xl px-6">
            <div className="bg-white border border-black/8 shadow-[0_25px_70px_rgba(0,0,0,0.12)] p-9 flex flex-col md:flex-row justify-between gap-10">

              {/* LEFT */}
              <div className="flex-1">
                <h2 className="text-[26px] font-bold text-slate-900 leading-snug">
                  Ready to Get Started?
                </h2>
                <p className="mt-3 text-sm text-black/65 leading-7 max-w-lg">
                  Book a free 30-minute scoping call with our Nairobi team. No sales
                  pressure — just honest expert advice on your security posture.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/12 text-sm font-semibold text-slate-900 hover:border-[#166b5f] transition"
                  >
                    Book Consultation <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/12 text-sm font-semibold text-slate-900 hover:border-[#166b5f] transition"
                  >
                    View All Services <ArrowRight size={16} />
                  </Link>
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Active incident?{" "}
                  <a href="mailto:ir@encrava.africa" className="text-[#166b5f] underline">
                    ir@encrava.africa
                  </a>{" "}
                  — 24/7 emergency response.
                </p>
              </div>

              {/* RIGHT — green badges */}
              <div className="flex-1 flex flex-col justify-center gap-3.5">
                {[
                  "KDPA Aligned Security",
                  "Real-Time African Threat Intelligence",
                  "99.7% Phishing Detection Accuracy",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2.5 px-4 py-3.5 bg-[#166b5f] text-white text-sm font-medium shadow-[0_10px_25px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition"
                  >
                    <ShieldCheck size={16} className="opacity-90" />
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
