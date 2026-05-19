// app/services/page.tsx
"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Activity,
  FileCheck2,
  Smartphone,
  AlertTriangle,
  GraduationCap,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import TopNavBar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { services } from "../data/services";

const icons: Record<string, React.ElementType> = {
  "cybersecurity-risk-assessment": ShieldCheck,
  "penetration-testing": Activity,
  "kdpa-compliance-programme": FileCheck2,
  "mobile-fintech-security": Smartphone,
  "incident-response-retainer": AlertTriangle,
  "security-awareness-training": GraduationCap,
};

const smears: Record<string, string> = {
  "cybersecurity-risk-assessment": "/assets/smears/smear1.png",
  "penetration-testing": "/assets/smears/smear3.png",
  "kdpa-compliance-programme": "/assets/smears/smear1.png",
  "mobile-fintech-security": "/assets/smears/smear1.png",
  "incident-response-retainer": "/assets/smears/smear3.png",
  "security-awareness-training": "/assets/smears/smear1.png",
};

export default function ServicesPage() {
  return (
    <>
      <TopNavBar />

      <main className="min-h-screen bg-white">

        {/* ── HERO ── same layout as WhyEncrava / Services section */}
        <section className="relative bg-white pt-32 pb-16 md:pb-24 overflow-hidden">

          {/* glow */}
          <div className="absolute -top-24 -left-24 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-5">

                  <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                    Encrava Services
                  </p>

                  <h1 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                    Cybersecurity Built for{" "}
                    <span className="text-[#166b5f]">Africa.</span>
                  </h1>

                  <div className="w-22.5 h-1 bg-[#166b5f]" />

                  <p className="text-sm md:text-[0.95rem] text-slate-500 leading-7 max-w-md">
                    From penetration testing to compliance and incident response,
                    Encrava delivers security systems tailored for African fintech,
                    government, and enterprise environments.
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

                </div>
              </div>

              {/* RIGHT — 3-col card grid matching Services.tsx exactly */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                  {services.map((service, i) => {
                    const Icon = icons[service.slug] ?? ShieldCheck;
                    const smear = smears[service.slug] ?? "/assets/smears/smear1.png";
                    return (
                      <div
                        key={i}
                        className="relative p-6 min-h-57.5 border-b border-slate-200 lg:border-r hover:bg-[#166b5f]/5 transition"
                      >
                        {/* smear */}
                        <div
                          className="absolute -inset-10 opacity-10 pointer-events-none"
                          style={{
                            backgroundImage: `url(${smear})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "top right",
                          }}
                        />

                        {/* content */}
                        <div className="relative z-10 flex flex-col h-full">

                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="text-[#166b5f]" size={22} />
                            <h3 className="text-[1rem] font-semibold text-slate-900 leading-snug">
                              {service.title}
                            </h3>
                          </div>

                          <p className="text-sm text-slate-500 leading-7">
                            {service.short}
                          </p>

                          <div className="mt-auto pt-5">
                            <Link
                              href={`/services/${service.slug}`}
                              className="inline-flex items-center gap-2 text-[#166b5f] text-[12px] font-semibold underline underline-offset-4 hover:opacity-80 transition"
                            >
                              Learn More
                            </Link>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROCESS — same card grid pattern ── */}
        <section className="relative bg-white py-16 md:py-24 border-t border-slate-200 overflow-hidden">

          <div className="absolute -top-32 -right-32 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* LEFT */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-5">

                  <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                    How We Work
                  </p>

                  <h2 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                    Our Engagement{" "}
                    <span className="text-[#166b5f]">Process.</span>
                  </h2>

                  <div className="w-22.5 h-1 bg-[#166b5f]" />

                  <p className="text-sm md:text-[0.95rem] text-slate-500 leading-7 max-w-md">
                    A clear, transparent process from first contact to remediation
                    support — with no surprises at any stage.
                  </p>

                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                  {[
                    { num: "01", title: "Free Scoping Call", desc: "We understand your environment, obligations, and security objectives. No cost, no commitment." },
                    { num: "02", title: "Statement of Work", desc: "Transparent scope, timeline, deliverables, and pricing in KES or USD. No hidden fees." },
                    { num: "03", title: "Hands-On Engagement", desc: "We work around your operational hours with regular progress updates throughout." },
                    { num: "04", title: "Plain-Language Report", desc: "Executive briefing and technical report delivered without unnecessary jargon. Board-ready." },
                    { num: "05", title: "Follow-On Support", desc: "Optional support to help your team implement recommendations quickly and effectively." },
                  ].map((step) => (
                    <div
                      key={step.num}
                      className="relative p-6 min-h-52.5 border-b border-slate-200 lg:border-r hover:bg-[#166b5f]/5 transition"
                    >
                      <div className="flex flex-col h-full">
                        <p className="text-3xl font-bold text-[#166b5f]/20 mb-4">
                          {step.num}
                        </p>
                        <h4 className="text-[1rem] font-semibold text-slate-900 mb-3 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-500 leading-7">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── COMPLIANCE STRIP — reusing ComplianceStrip pattern ── */}
        <section className="w-full py-12 bg-white border-t border-slate-200 flex justify-center">
          <div className="max-w-7xl w-full px-6">

            <div className="text-center mb-8">
              <p className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase mb-3">
                Standards & Frameworks
              </p>
              <h2 className="text-[1.8rem] font-bold text-slate-900">
                Compliance We Support
              </h2>
              <div className="w-[140px] h-1 bg-[#166b5f] mx-auto mt-3 rounded-full" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "KDPA 2019 Compliant",
                "Computer Misuse & Cybercrimes Act 2018",
                "CBK Cybersecurity Guidelines",
                "Communications Authority of Kenya",
                "NIST CSF 2.0",
                "ISO/IEC 27001:2022",
                "PCI-DSS v4.0",
                "GDPR Aligned",
                "AU Malabo Convention",
                "ODPC Registered",
              ].map((fw) => (
                <div
                  key={fw}
                  className="flex items-center gap-2 px-4 py-2.5 border border-[#166b5f]/25 rounded-full text-[12.5px] font-medium text-slate-800 bg-white shadow-sm"
                >
                  <ShieldCheck size={14} className="text-[#7BE09C]" />
                  {fw}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA — matching CTA.tsx pattern ── */}
        <section className="w-full bg-white flex justify-center py-8">
          <div className="w-full max-w-6xl px-6">
            <div
              className="bg-white border border-black/8 shadow-[0_25px_70px_rgba(0,0,0,0.12)] p-9 flex flex-col md:flex-row justify-between gap-10"
            >
              {/* LEFT */}
              <div className="flex-1">
                <h2 className="text-[26px] font-bold text-slate-900 leading-snug">
                  Ready to Build a Stronger Security Foundation?
                </h2>
                <p className="mt-3 text-sm text-black/65 leading-7 max-w-lg">
                  Book a free 30-minute consultation with our Nairobi team. Honest
                  assessment of your current posture and a clear path forward.
                  No sales pressure.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/12 text-sm font-semibold text-slate-900 hover:border-[#166b5f] transition"
                  >
                    Book Consultation <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/12 text-sm font-semibold text-slate-900 hover:border-[#166b5f] transition"
                  >
                    Contact Us <ArrowRight size={16} />
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

              {/* RIGHT — green badges matching CTA.tsx */}
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
