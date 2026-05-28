// app/products/intel/page.tsx
"use client";

import Link from "next/link";
import { 
  CheckCircle2, 
  Globe, 
  Clock, 
  Eye, 
  Shield, 
  Bell, 
  Database, 
  BarChart3, 
  Lock, 
  Zap,
  CalendarDays,
  Mail,
  Phone,
  ArrowUpRight
} from "lucide-react";
import Footer from "../../components/home/Footer"; 
import TopNavBar from "../../components/home/Navbar"; 
import { useState } from "react";

export default function IntelPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    users: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setTimeout(() => {
      alert("Thank you! We'll contact you within 24 hours with a custom quote.");
      setIsSubmitting(false);
    }, 1000);
  };

  const features = [
    { name: "Real-Time Local Feeds", desc: "3,000+ global + 800+ Africa-specific sources, sub-60-second alert delivery." },
    { name: "M-Pesa & Mobile Money Watch", desc: "Dedicated monitoring for paybill fraud, fake USSD spoofing, and mobile banking credential theft." },
    { name: "Dark Web Monitoring", desc: "Leaked credentials, PII, and corporate data from dark web markets & forums." },
    { name: "Kiswahili Language Analysis", desc: "NLP engine analyzing Kiswahili threat content — critical for East African actor communications." },
    { name: "IoC Enrichment", desc: "IPs, domains, hashes enriched with African geolocation & actor attribution." },
    { name: "SIEM Integration", desc: "Native connectors for Splunk, Sentinel, QRadar, STIX 2.1 / TAXII 2.1 compatible." },
    { name: "Threat Actor Profiles", desc: "500+ Africa-focused groups: fraud syndicates, state-sponsored APTs, cybercrime networks." },
    { name: "Executive Threat Briefings", desc: "Weekly plain-language briefs in English & Kiswahili for board/C-suite." },
    { name: "Full API Access", desc: "RESTful JSON, complete data export for SIEM/SOAR/custom tools." }
  ];

  const threatSources = [
    "East African Telegram & WhatsApp fraud channels",
    "Local dark web forums: M-Pesa PINs, KRA credentials",
    "SIM-swap broker networks (Safaricom, Airtel, Telkom)",
    "West African Yahoo Boys targeting Kenyan businesses",
    "South African banking credential marketplaces",
    "Pan-African phishing kits & bulletproof hosting",
    "KE-CIRT/CC, CSIRT-Africa, ZA-CERT, NG-CERT feeds",
    "African Union cyber threat-sharing network"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              
              {/* LEFT COLUMN */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#166b5f] font-semibold">
                  Encrava Intel
                </p>
                <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[#0f172a]">
                  African Threats Need{" "}
                  <span className="text-[#166b5f]">African Intelligence.</span>
                </h1>
                <div className="w-24 h-1 bg-[#166b5f] mt-6" />
                <p className="mt-7 text-[15px] leading-8 text-slate-600">
                  Encrava Intel monitors the threat sources that matter most to African organisations — local cybercriminal networks, 
                  mobile money fraud syndicates, regional dark web markets, and the threat actors specifically targeting Kenya and Sub-Saharan Africa.
                </p>
                
                {/* STAT CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                  <div className="stat-card">
                    <Globe size={18} />
                    <div>
                      <h3>3,000+</h3>
                      <p>Global intelligence feeds</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <Eye size={18} />
                    <div>
                      <h3>800+</h3>
                      <p>Africa-specific sources</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <Clock size={18} />
                    <div>
                      <h3>&lt;60s</h3>
                      <p>Alert delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Consultation Card */}
              <div className="w-full">
                <div className="relative bg-white border border-black/5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8">
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top_right,#166b5f,transparent_40%)]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#166b5f] text-white flex items-center justify-center shrink-0 rounded-full">
                        <CalendarDays size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
                          GET STARTED
                        </p>
                        <h2 className="text-2xl font-bold text-[#0f172a]">Request Custom Quote</h2>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-6">
                      Get a personalised pricing proposal based on your organisation size, user count, and deployment preferences.
                    </p>
                    <Link 
                      href="/consultation" 
                      className="flex items-center justify-center gap-2 w-full bg-[#166b5f] text-white py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all"
                    >
                      Book Consultation <ArrowUpRight size={16} />
                    </Link>
                    <div className="mt-6 pt-6 border-t border-black/5 text-center">
                      <p className="text-xs text-slate-500 mb-2">Or contact us directly</p>
                      <div className="flex justify-center gap-4">
                        <Link href="mailto:sales@encrava.com" className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#166b5f] transition">
                          <Mail size={12} /> sales@encrava.com
                        </Link>
                        <Link href="tel:+254700123456" className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#166b5f] transition">
                          <Phone size={12} /> +254 700 123 456
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AFRICA-SPECIFIC SOURCES */}
        <section className="py-16 bg-slate-50/30">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <h2 className="text-3xl font-bold text-[#0f172a]">Africa-Specific Intelligence Sources</h2>
            <div className="w-16 h-0.5 bg-[#166b5f] mt-3 mb-6" />
            <p className="text-slate-600 mb-8">We don't just translate global feeds — we embed inside African underground ecosystems.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {threatSources.map((source, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white border border-black/5 p-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                  <CheckCircle2 size={14} className="text-[#166b5f] shrink-0" />
                  <span className="text-sm text-slate-700">{source}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY FEATURES TABLE */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <h2 className="text-3xl font-bold text-[#0f172a]">Key Features — Built for African defenders</h2>
            <div className="w-16 h-0.5 bg-[#166b5f] mt-3 mb-8" />
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx} className="border-b border-black/5 last:border-0">
                      <td className="p-5 font-semibold text-[#0f172a] w-1/3">{feature.name}</td>
                      <td className="p-5 text-slate-600">{feature.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section className="py-16 bg-slate-50/30">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f172a]">Flexible Pricing Tiers</h2>
              <div className="w-16 h-0.5 bg-[#166b5f] mx-auto mt-3 mb-4" />
              <p className="text-slate-600 max-w-2xl mx-auto">
                Tailored pricing for organisations of all sizes. Get exactly what you need — no more, no less.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Msingi (Essentials) */}
              <div className="relative bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#0f172a]">Msingi (Essentials)</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#166b5f]">From KES 80K</span>
                  <span className="text-slate-500"> /month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {[
                    "Up to 300 IoC queries/day",
                    "Core global + East Africa feeds",
                    "30-day data retention",
                    "Email alerting",
                    "Standard support (business hours)"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-[#166b5f] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/consultation" className="block text-center mt-6 border border-[#166b5f] text-[#166b5f] py-2 rounded-full font-semibold hover:bg-[#166b5f] hover:text-white transition">
                  Request Quote
                </Link>
              </div>

              {/* Biashara (Business) - Most Popular */}
              <div className="relative bg-white border-2 border-[#166b5f] shadow-[0_20px_40px_rgba(22,107,95,0.12)] p-6 transition-all hover:-translate-y-1">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#166b5f] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">Biashara (Business)</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#166b5f]">From KES 200K</span>
                  <span className="text-slate-500"> /month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {[
                    "Unlimited IoC queries",
                    "Dark web + M-Pesa fraud monitoring",
                    "90-day data retention",
                    "Full SIEM integration",
                    "Priority support & API access"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-[#166b5f] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/consultation" className="block text-center mt-6 bg-[#166b5f] text-white py-2 rounded-full font-semibold hover:bg-[#0f5549] transition">
                  Book Consultation
                </Link>
              </div>

              {/* Shirika (Enterprise) */}
              <div className="relative bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#0f172a]">Shirika (Enterprise)</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#166b5f]">Custom</span>
                  <span className="text-slate-500"> pricing</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {[
                    "Everything in Business",
                    "Dedicated analyst support",
                    "365-day data retention",
                    "On-premises deployment",
                    "99.9% SLA-backed uptime"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-[#166b5f] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/consultation" className="block text-center mt-6 border border-[#166b5f] text-[#166b5f] py-2 rounded-full font-semibold hover:bg-[#166b5f] hover:text-white transition">
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Pricing Note */}
            <div className="mt-8 bg-[#fef4ea] rounded-2xl p-4 border-l-4 border-[#166b5f]">
              <p className="text-sm text-slate-700">
                💡 <span className="font-semibold">Volume discounts available.</span> NGO, faith-based organisations, and public sector receive up to 30% discount. 
                Annual subscriptions get 2 months free. M-Pesa & bank transfer accepted.
              </p>
            </div>
          </div>
        </section>

        {/* ENTERPRISE FEATURES */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f172a]">Enterprise-Grade Capabilities</h2>
              <div className="w-16 h-0.5 bg-[#166b5f] mx-auto mt-3" />
              <p className="text-slate-600 mt-4">Premium features for large organisations and government entities</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Database size={24} />, title: "365-day Retention", desc: "Long-term data retention for compliance and historical analysis" },
                { icon: <Lock size={24} />, title: "On-premises Deployment", desc: "Full data sovereignty with on-prem deployment option" },
                { icon: <Bell size={24} />, title: "Dedicated Analyst Support", desc: "24/7 access to our threat intelligence analysts" },
                { icon: <BarChart3 size={24} />, title: "Custom Data Pipelines", desc: "Tailored integrations with your existing security stack" },
                { icon: <Zap size={24} />, title: "99.9% SLA-backed Uptime", desc: "Enterprise-grade reliability with guaranteed uptime" },
                { icon: <Globe size={24} />, title: "Multi-tenant Support", desc: "Manage multiple subsidiaries or departments from one console" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 text-center transition-all hover:-translate-y-1">
                  <div className="text-[#166b5f] flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-[#0f172a] mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a]">Ready to get a custom quote?</h2>
            <p className="text-slate-600 mt-4 mb-8">
              Speak with our team to get a tailored pricing proposal for your organisation.
            </p>
            <Link 
              href="/consultation" 
              className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0f5549] transition-all hover:gap-3"
            >
              Schedule a Discovery Call <ArrowUpRight size={18} />
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
          padding: 16px;
          min-height: 80px;
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
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }
        .stat-card p {
          font-size: 12px;
          color: #64748b;
          margin-top: 3px;
        }
      `}</style>
    </>
  );
}