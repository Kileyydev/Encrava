"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Encrava Intel",
    subtitle: "African Threat Intelligence Platform",
    desc: "Real-time intelligence built around African cybercrime networks — M-Pesa fraud, SIM-swap rings, Telegram fraud channels, and regional threat actors targeting financial systems across East Africa.",
    points: [
      "M-Pesa fraud & SIM-swap monitoring",
      "Dark web + Telegram threat tracking",
      "Kiswahili threat intelligence analysis",
      "Sub-60s real-time alert delivery",
    ],
    image: "/images/herosection/sphere2.png",
  },
  {
    title: "Encrava Shield",
    subtitle: "AI-Powered Phishing Detection",
    desc: "Detects African-targeted phishing including M-Pesa scams, KRA impersonation, fake job offers, and business email compromise with AI models trained on local threat patterns.",
    points: [
      "99.7% phishing detection accuracy",
      "Kiswahili NLP detection engine",
      "M-Pesa + KRA impersonation blocking",
      "Auto email quarantine & remediation",
    ],
    image: "/images/herosection/sphere2.png",
  },
  
];

export default function EncravaProductShowcase() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  const slide = slides[index];

  return (
    <section className="relative w-full bg-[#166b5f] text-white overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <h3 className="text-sm uppercase tracking-[0.25em] opacity-80">
            {slide.subtitle}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {slide.title}
          </h2>
          <div className="w-20 h-0.75 bg-white" />
          <p className="text-sm leading-relaxed opacity-90">
            {slide.desc}
          </p>
          <ul className="space-y-2 text-sm opacity-90">
            {slide.points.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-white">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* CENTER IMAGE - Large Size */}
        <div className="flex justify-center items-center">
          <div className="relative w-105 md:w-130 lg:w-145 h-105 md:h-130 lg:h-145">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 420px, (max-width: 1024px) 520px, 580px"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-5 md:text-right">
          <h3 className="text-sm uppercase tracking-[0.25em] opacity-80">
            Encrava Platform
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold">
            Built for Africa
          </h2>
          <div className="w-20 h-0.75 bg-white md:ml-auto" />
          <p className="text-sm leading-relaxed opacity-90">
            Every Encrava product is engineered specifically for African infrastructure, mobile-first systems, and regional threat actors — not retrofitted from Western models.
          </p>
          <p className="text-sm opacity-80">
            {index + 1} / {slides.length}
          </p>
        </div>
      </div>

      {/* ARROWS */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6">
        <button
          onClick={prev}
          className="p-3 border border-white/40 hover:border-white transition"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={next}
          className="p-3 border border-white/40 hover:border-white transition"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}