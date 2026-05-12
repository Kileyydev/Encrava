"use client";

import {
  ShieldCheck,
  Globe,
  BrainCircuit,
  Smartphone,
  Landmark,
} from "lucide-react";

const items = [
  {
    Icon: BrainCircuit,
    title: "African Threat Intelligence",
    text: "Real-time intelligence built around African cybercrime patterns like M-Pesa fraud and SIM swap attacks.",
    smear: "/assets/smears/smear1.png",
    position: "top-right",
  },
  {
    Icon: ShieldCheck,
    title: "AI-Powered Detection",
    text: "Models trained on African phishing, fraud, and impersonation campaigns for higher accuracy.",
    smear: "/assets/smears/smear3.png",
    position: "bottom",
  },
  {
    Icon: Smartphone,
    title: "Mobile-First Security",
    text: "Designed for fintech, telecom, and mobile money ecosystems across Africa.",
    smear: "/assets/smears/smear1.png",
    position: "top-left",
  },
  {
    Icon: Landmark,
    title: "KDPA Compliance",
    text: "Aligned with Kenya Data Protection Act and regional regulatory frameworks.",
    smear: "/assets/smears/smear1.png",
    position: "bottom-right",
  },
  {
    Icon: Globe,
    title: "Pan-African Coverage",
    text: "Protecting organisations across East, West, and Southern Africa.",
    smear: "/assets/smears/smear3.png",
    position: "top",
  },
  {
    Icon: ShieldCheck,
    title: "Built for Africa",
    text: "Engineered specifically for African infrastructure, threats, and digital realities.",
    smear: "/assets/smears/smear1.png",
    position: "bottom-right",
  },
];

export default function WhyEncrava() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      
      {/* glow */}
      <div className="absolute -top-32 -right-32 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">

              <div className="text-xs tracking-[0.25em] font-bold text-[#166b5f] uppercase">
                Why Encrava
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] text-slate-900">
                Built for{" "}
                <span className="text-[#166b5f]">Africa’s</span>{" "}
                Cyber Reality.
              </h2>

              <div className="w-22.5 h-1 bg-[#166b5f]" />

              <p className="text-sm md:text-base text-slate-500 leading-7 max-w-md">
                Encrava blends AI-driven security with deep African threat intelligence
                to protect fintechs, governments, and enterprises across the continent.
              </p>

            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              {items.map(({ Icon, title, text, smear, position }, i) => (
                <div
                  key={i}
                  className="relative p-6 min-h-52.5 border-b border-slate-200 lg:border-r overflow-hidden"
                >

                  {/* smear */}
                  <div
                    className={`absolute -inset-10 bg-no-repeat bg-contain opacity-10 pointer-events-none`}
                    style={{
                      backgroundImage: `url(${smear})`,
                      backgroundPosition: position.replace("-", " "),
                    }}
                  />

                  {/* content */}
                  <div className="relative z-10">

                    {/* icon + title */}
                    <div className="flex items-center gap-3 mb-3">

                      <div className="text-[#166b5f] shrink-0">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-[15px] font-semibold text-slate-900 leading-snug">
                        {title}
                      </h3>

                    </div>

                    {/* text */}
                    <p className="text-sm text-slate-500 leading-7">
                      {text}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}