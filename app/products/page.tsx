// app/products/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Shield, Radar } from "lucide-react";
import TopNavBar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/home/CTA";
import Productssection from "../components/home/Productssection";

const slides = [
  {
    title: "Encrava Shield",
    subtitle: "AI-Powered Email Protection",
    desc: "Phishing detection trained on African threats — M-Pesa scams, KRA impersonation, bank lookalikes, and Kiswahili phishing campaigns.",
    points: [
      "99.7% detection accuracy on local attacks",
      "Kiswahili NLP + African brand watchlist",
      "Auto-quarantine & email remediation",
    ],
    image: "/images/products/shield7.png",
    cta: "Explore Shield",
    href: "/products/shield",
    icon: Shield,
  },
  {
    title: "Encrava Intel",
    subtitle: "African Threat Intelligence",
    desc: "Real-time intelligence on regional cybercrime — SIM-swap networks, dark web leaks, M-Pesa fraud syndicates, and threat actors targeting East Africa.",
    points: [
      "800+ Africa-specific intelligence sources",
      "Sub-60s real-time alerts",
      "Threat actor tracking & dark web monitoring",
    ],
    image: "/images/products/intel5.png",
    cta: "Explore Intel",
    href: "/products/intel",
    icon: Radar,
  },
];

export default function ProductsPage() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-white">
      <TopNavBar />
      <Productssection />
      <CTA />
      <Footer />

      <style jsx>{`
        .cta-btn {
          padding: 14px 28px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .cta-btn:hover {
          background: white;
          color: #166b5f;
          transform: translateY(-2px);
        }

        .cta-btn .icon {
          transition: transform 0.3s ease;
        }

        .cta-btn:hover .icon {
          transform: translate(4px, -4px);
        }
      `}</style>
    </div>
  );
}