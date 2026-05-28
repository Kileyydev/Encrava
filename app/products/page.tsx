// app/products/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, ArrowUpRight, Shield, Eye, Zap, Globe } from "lucide-react";
import Footer from "../components/home/Footer"; 
import TopNavBar from "../components/home/Navbar"; 

export default function ProductsLandingPage() {
  const products = [
    {
      id: "intel",
      name: "Encrava Intel",
      tagline: "African Threat Intelligence Platform",
      description: "Real-time threat intelligence focused on African cybercriminal networks, mobile money fraud syndicates, and dark web markets that target Kenyan and Sub-Saharan African organisations.",
      features: [
        "3,000+ global + 800+ Africa-specific sources",
        "M-Pesa & mobile money fraud monitoring",
        "Kiswahili language NLP engine",
        "Dark web credential monitoring",
        "SIEM integration (Splunk, Sentinel, QRadar)",
        "500+ Africa-focused threat actor profiles"
      ],
      icon: "🕵️‍♂️",
      href: "/products/intel",
      cta: "Explore Intel",
      ctaSecondary: "Start Trial"
    },
    {
      id: "shield",
      name: "Encrava Shield",
      tagline: "AI-Powered Phishing Detection",
      description: "AI-driven phishing detection trained on African phishing samples — M-Pesa scams, KRA impersonation, local bank fraud, and Kiswahili-language attacks. 99.7% detection accuracy.",
      features: [
        "200+ African brand watchlist",
        "Kiswahili NLP engine for local threats",
        "AI link analysis & attachment sandboxing",
        "BEC / CEO fraud detection",
        "Auto-remediation & real-time quarantine",
        "Microsoft 365 & Google Workspace native"
      ],
      icon: "🛡️",
      href: "/products/shield",
      cta: "Explore Shield",
      ctaSecondary: "Request Demo"
    }
  ];

  const comparisonRows = [
    { feature: "Threat intelligence & dark web monitoring", intel: "✓ Dedicated", shield: "—" },
    { feature: "Phishing & email threat detection", intel: "—", shield: "✓ Dedicated" },
    { feature: "M-Pesa & mobile money fraud", intel: "✓ Advanced", shield: "✓ Included" },
    { feature: "Kiswahili language NLP", intel: "✓ Yes", shield: "✓ Yes" },
    { feature: "African brand impersonation", intel: "✓ Yes", shield: "✓ Yes" },
    { feature: "SIEM / SOAR integration", intel: "✓ Native", shield: "✓ Native" },
    { feature: "Auto-remediation", intel: "Limited", shield: "✓ Full" },
    { feature: "Alert latency", intel: "<60 seconds", shield: "<2 seconds" },
    { feature: "Best for", intel: "SOCs, IR teams, Fintech, Govt", shield: "All organisations with email" }
  ];

  return (
    <>
      <TopNavBar />

      <main className="w-full bg-white overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative pt-28 md:pt-36 pb-16">
          {/* Background glows */}
          <div className="absolute -top-30 -left-25 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />
          <div className="absolute -bottom-30 -right-25 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#166b5f] font-semibold">
                Encrava Products
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[#0f172a]">
                Cybersecurity{" "}
                <span className="text-[#166b5f]">Built For Africa</span>
              </h1>
              <div className="w-24 h-1 bg-[#166b5f] mx-auto mt-6" />
              <p className="mt-7 text-[15px] leading-8 text-slate-600 max-w-xl mx-auto">
                AI-powered protection engineered specifically for African threats — from M-Pesa fraud to 
                Kiswahili phishing and East African cybercrime networks.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
                <div className="stat-card">
                  <Shield size={18} />
                  <div>
                    <h3>99.7%</h3>
                    <p>Detection accuracy</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Zap size={18} />
                  <div>
                    <h3>&lt;60s</h3>
                    <p>Alert delivery</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Globe size={18} />
                  <div>
                    <h3>Pan-African</h3>
                    <p>Threat coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-12 pb-24">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="group relative bg-white border border-black/5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] p-8 md:p-10 transition-all duration-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_right,#166b5f,transparent_40%)] opacity-[0.03]" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">{product.icon}</div>
                    <h2 className="text-3xl font-bold text-[#0f172a]">{product.name}</h2>
                    <p className="text-[13px] text-[#166b5f] font-semibold mt-1">{product.tagline}</p>
                    <div className="w-16 h-0.5 bg-[#166b5f] mt-5 mb-6" />
                    <p className="text-[15px] leading-7 text-slate-600 mb-6">{product.description}</p>
                    
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={14} className="text-[#166b5f] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link
                        href={product.href}
                        className="flex-1 text-center bg-[#166b5f] text-white py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all duration-200"
                      >
                        {product.cta} →
                      </Link>
                      <Link
                        href="/consultation"
                        className="flex-1 text-center border border-[#166b5f] text-[#166b5f] py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition-all duration-200"
                      >
                        {product.ctaSecondary}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-16 bg-slate-50/30">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#0f172a]">Which product is right for you?</h2>
              <div className="w-16 h-0.5 bg-[#166b5f] mx-auto mt-3" />
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <thead>
                  <tr className="border-b border-black/5 bg-slate-50/80">
                    <th className="text-left p-5 font-semibold text-[#0f172a]">Capability</th>
                    <th className="text-left p-5 font-semibold text-[#166b5f]">Encrava Intel</th>
                    <th className="text-left p-5 font-semibold text-[#166b5f]">Encrava Shield</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="border-b border-black/5 last:border-0">
                      <td className="p-5 text-sm text-slate-700 font-medium">{row.feature}</td>
                      <td className="p-5 text-sm text-slate-600">{row.intel}</td>
                      <td className="p-5 text-sm text-slate-600">{row.shield}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BUNDLE SECTION */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <div className="relative bg-white border border-black/5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] p-8 md:p-10 text-center">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#166b5f,transparent_60%)]" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#ffe0f0] text-[#b14562] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  🔥 Bundle & Save
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
                  Encrava Shield + Intel Combined Package
                </h3>
                <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                  Get proactive threat intelligence plus AI-powered email protection at a discounted rate. 
                  Complete cybersecurity coverage for African organisations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/consultation" 
                    className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all hover:gap-3"
                  >
                    Request Bundle Quote <ArrowUpRight size={16} />
                  </Link>
                </div>
                <p className="text-xs text-slate-500 mt-6">
                  NGO and public sector discounts of up to 30% available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a]">Not sure which product fits your needs?</h2>
            <p className="text-slate-600 mt-4 mb-8">
              Our team will assess your security posture and recommend the right solution — or a combined package for complete protection.
            </p>
            <Link 
              href="/consultation" 
              className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0f5549] transition-all hover:gap-3"
            >
              Talk to a security expert <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />

      <style jsx>{`
        .stat-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.06);
          padding: 14px 18px;
          transition: all 0.2s ease;
        }
        .stat-card:hover {
          border-color: rgba(22, 107, 95, 0.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }
        .stat-card svg {
          color: #166b5f;
          flex-shrink: 0;
        }
        .stat-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }
        .stat-card p {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
        }
      `}</style>
    </>
  );
}