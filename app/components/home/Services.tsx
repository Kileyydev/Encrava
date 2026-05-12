"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Activity,
  FileCheck2,
  Smartphone,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";

const items = [
  {
    slug: "cybersecurity-risk-assessment",
    icon: ShieldCheck,
    title: "Cybersecurity Risk Assessment",
    text: "Deep evaluation of systems aligned with KDPA 2019, ISO 27001, and NIST standards.",
    smear: "/assets/smears/smear1.png",
    position: "top-right",
  },
  {
    slug: "penetration-testing",
    icon: Activity,
    title: "Penetration Testing (VAPT)",
    text: "Real-world attack simulations across web, APIs, mobile, and fintech infrastructure.",
    smear: "/assets/smears/smear3.png",
    position: "bottom",
  },
  {
    slug: "kdpa-compliance-programme",
    icon: FileCheck2,
    title: "KDPA Compliance Programme",
    text: "Full data protection compliance including audits, DPIAs, and ODPC registration support.",
    smear: "/assets/smears/smear1.png",
    position: "top-left",
  },
  {
    slug: "mobile-fintech-security",
    icon: Smartphone,
    title: "Mobile & Fintech Security",
    text: "Security for mobile money systems, fintech apps, APIs, and telecom environments.",
    smear: "/assets/smears/smear1.png",
    position: "bottom-right",
  },
  {
    slug: "incident-response-retainer",
    icon: AlertTriangle,
    title: "Incident Response & Retainer",
    text: "24/7 breach response, forensic analysis, containment, and recovery support.",
    smear: "/assets/smears/smear3.png",
    position: "top",
  },
  {
    slug: "security-awareness-training",
    icon: GraduationCap,
    title: "Security Awareness Training",
    text: "Employee-focused training on phishing, fraud prevention, and cyber hygiene.",
    smear: "/assets/smears/smear1.png",
    position: "bottom-right",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">

      {/* glow */}
      <div className="absolute -top-24 -left-24 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT TITLE */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-5">

              <p className="text-xs tracking-[0.22em] uppercase font-bold text-[#166b5f]">
                Encrava Services
              </p>

              <h2 className="text-[2.3rem] md:text-[3.4rem] font-bold leading-[1.05] text-slate-900">
                Cybersecurity Built for{" "}
                <span className="text-[#166b5f]">Africa.</span>
              </h2>

              <div className="w-22.5 h-1 bg-[#166b5f]" />

              <p className="text-sm md:text-[0.95rem] text-slate-500 leading-7 max-w-md">
                From penetration testing to compliance and incident response,
                Encrava delivers security systems tailored for African fintech,
                government, and enterprise environments.
              </p>

            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">

              {items.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="relative p-6 min-h-57.5 border-b border-slate-200 lg:border-r hover:bg-[#166b5f]/5 transition"
                  >

                    {/* smear */}
                    <div
                      className="absolute -inset-10 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: `url(${item.smear})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: item.position.replace("-", " "),
                      }}
                    />

                    {/* content */}
                    <div className="relative z-10 flex flex-col h-full">

                      {/* title row */}
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="text-[#166b5f]" size={22} />

                        <h3 className="text-[1rem] font-semibold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {/* text */}
                      <p className="text-sm text-slate-500 leading-7">
                        {item.text}
                      </p>

                      {/* CTA (same style as your services page) */}
                      <div className="mt-auto pt-5">
                        <Link
                          href={`/services/${item.slug}`}
                          className="
                            inline-flex items-center gap-2
                            text-[#166b5f] text-[12px] font-semibold
                            underline underline-offset-4
                            hover:opacity-80 transition
                          "
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
  );
}