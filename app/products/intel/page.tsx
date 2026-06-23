// app/products/intel/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Radar, CheckCircle2, CalendarDays, Brain, Users, ArrowUpRight, ChevronDown, ChevronUp, ShieldAlert, Zap, Globe, Bell, Database, BarChart3, Lock } from "lucide-react";
import Footer from "../../components/home/Footer";
import TopNavBar from "../../components/home/Navbar";

export default function IntelPage() {
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

  const threats = [
    "East African Telegram & WhatsApp fraud channels",
    "Local dark web forums: M-Pesa PINs, KRA credentials",
    "SIM-swap broker networks (Safaricom, Airtel, Telkom)",
    "West African Yahoo Boys targeting Kenyan businesses",
    "South African banking credential marketplaces",
    "Pan-African phishing kits & bulletproof hosting",
    "KE-CIRT/CC, CSIRT-Africa, ZA-CERT, NG-CERT feeds",
    "African Union cyber threat-sharing network"
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Ingest",
      subtitle: "Collect",
      desc: "Aggregates 3,800+ global and Africa-specific intelligence sources in real time",
      label: "Always On"
    },
    {
      step: "02",
      title: "Enrich",
      subtitle: "Contextualize",
      desc: "AI adds local attribution, Kiswahili translation, and relevance scoring",
      label: "Deep Context"
    },
    {
      step: "03",
      title: "Detect",
      subtitle: "Correlate",
      desc: "Identifies emerging campaigns targeting African organisations",
      label: "Fast Detection"
    },
    {
      step: "04",
      title: "Alert",
      subtitle: "Deliver",
      desc: "Delivers actionable intelligence via email, SIEM, Slack, WhatsApp, and API",
      label: "Instant Delivery"
    },
    {
      step: "05",
      title: "Learn",
      subtitle: "Improve",
      desc: "Continuous feedback loop from customer incidents and regional events",
      label: "Adaptive Intelligence"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const integrations = [
    "Microsoft Sentinel",
    "Splunk",
    "Elastic Stack",
    "QRadar",
    "ServiceNow",
    "WhatsApp Business API",
    "Microsoft Teams & Slack",
    "STIX/TAXII 2.1"
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <TopNavBar />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-16">
        {/* GLOWS */}
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
                <span className="text-[#166b5f]">African Intelligence</span>
              </h1>
              <div className="w-24 h-1 bg-[#166b5f] mt-6" />
              <p className="mt-7 text-[15px] leading-8 text-slate-600">
                Encrava Intel monitors the threat sources that matter most to African organisations — local cybercriminal networks, 
                mobile money fraud syndicates, regional dark web markets, and the threat actors specifically targeting Kenya and Sub-Saharan Africa.
              </p>
              
              {/* STATS CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div className="stat-card">
                  <Radar size={18} />
                  <div>
                    <h3>3,800+</h3>
                    <p>Intelligence sources</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Zap size={18} />
                  <div>
                    <h3>&lt;60s</h3>
                    <p>Alert latency</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Users size={18} />
                  <div>
                    <h3>500+</h3>
                    <p>African threat actors</p>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-8">
                <Link href="/consultation" className="bg-[#166b5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all flex items-center gap-2">
                  Request live demo → 
                </Link>
                <Link href="#how-it-works" className="border border-black/10 text-[#0f172a] px-8 py-3 rounded-full font-semibold hover:border-[#166b5f] hover:text-[#166b5f] transition-all">
                  See how it works
                </Link>
              </div>
              <p className="text-sm text-slate-500 mt-4">No commitment · M-Pesa accepted · Africa-first intelligence</p>
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
                        STAY AHEAD
                      </p>
                      <h2 className="text-2xl font-bold text-[#0f172a]">Request Live Demo</h2>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0f172a] mb-3">Real-time African Intel</h3>
                    <div className="space-y-2">
                      {[
                        ' 3,000+ global + 800+ Africa-specific sources',
                        ' sub-60 sec alert delivery',
                       
                        ' M-Pesa fraud monitoring module'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-600">
                          <span className="mt-1 text-[#166b5f]">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <p className="text-sm italic text-slate-600">"Encrava Intel detected a SIM-swap broker within 90 seconds — proactive defense saved millions."</p>
                    <p className="text-xs font-bold text-slate-700 mt-2">— CISO, Tier-1 Kenyan Bank</p>
                  </div>
                  
                  <Link 
                    href="/consultation" 
                    className="flex items-center justify-center gap-2 w-full bg-[#166b5f] text-white py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all"
                  >
                    Request Demo <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Threats We Track */}
      <section className="py-12 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#166b5f]/10 border border-[#166b5f]/15 rounded-full mb-4">
              <ShieldAlert className="w-4 h-4 text-[#166b5f]" />
              <span className="text-xs font-semibold tracking-wide uppercase text-[#166b5f]">
                Threat Intelligence
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
              Africa-Specific Intelligence Sources
            </h2>

            <p className="mt-3 text-lg text-slate-600 leading-relaxed">
              We don't just translate global feeds — we embed inside African underground ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {threats.map((threat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-4 transition-all duration-300"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#166b5f]" />
                <div className="flex items-start gap-3 pl-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166b5f]/10 shrink-0">
                    <ShieldAlert className="w-5 h-5 text-[#166b5f]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-relaxed">
                    {threat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-[#0f172a]">
            Key Features — Built for African Defenders
          </h2>

          <div className="w-17.5 h-1 bg-[#166b5f] mt-3 mb-4" />

          <p className="text-slate-500 max-w-2xl mb-10 leading-relaxed">
            Purpose-built intelligence platform focused on the threats that matter most to African organisations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#166b5f] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-0.75 bg-white mb-4" />
                <h3 className="text-white font-bold text-lg mb-3">
                  {feature.name}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <img 
                src="/images/products/intel10.png" 
                alt="Encrava Intel Platform" 
                className="max-w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="lg:col-span-7">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-[#0f172a]">
                  How Encrava Intel Works
                </h2>
                <div className="w-24 h-0.75 bg-[#166b5f] mx-auto lg:mx-0 mt-3" />
                <p className="mt-4 text-slate-600 text-base">
                  From raw signals to actionable intelligence — built for speed and regional relevance.
                </p>
              </div>

              <div className="space-y-3">
                {howItWorks.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="faq">
                      <button
                        className="question"
                        onClick={() => toggle(index)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <span className="font-semibold">{item.title}</span>
                            {item.subtitle && (
                              <span className="block text-sm text-white/70 mt-0.5">{item.subtitle}</span>
                            )}
                          </div>
                        </div>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>

                      <div className={`answer ${isOpen ? "open" : ""}`}>
                        <p>{item.desc}</p>
                        <div className="mt-4 inline-block bg-white/20 text-white text-xs font-medium px-5 py-2 rounded-3xl">
                          {item.label}
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

      {/* Integration Support */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Integration Support</h2>
          <div className="w-16 h-0.5 bg-[#166b5f] mt-3 mb-8" />
          <div className="flex flex-wrap gap-3">
            {integrations.map((integration, idx) => (
              <span key={idx} className="bg-white border border-black/5 px-4 py-2 rounded-full text-sm text-slate-700 shadow-[0_2px_4px_rgba(15,23,42,0.04)]">
                {integration}
              </span>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Native connectors and flexible APIs. No heavy lifting required.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0f172a]">Simple, transparent pricing</h2>
          <div className="w-16 h-0.5 bg-[#166b5f] mx-auto mt-3 mb-4" />
          <p className="text-center text-slate-600 mb-12">USD — NGO & public sector discounts available</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Msingi Starter */}
            <div className="bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 transition-all hover:-translate-y-1">
              <div className="bg-[#ffe0f0] inline-block px-3 py-1 rounded-full text-sm font-semibold text-[#b14562] mb-4">Msingi (Starter)</div>
              <div className="text-2xl font-bold text-[#166b5f]">~$6 USD/user/mo</div>
              <ul className="space-y-2 mt-6 mb-6">
                {['Up to 100 users', 'Core African threat feeds', 'M-Pesa monitoring', 'Real-time alerts', 'Weekly briefings'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#166b5f] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/consultation" className="block text-center border border-[#166b5f] text-[#166b5f] py-2 rounded-full font-semibold hover:bg-[#166b5f] hover:text-white transition">
                Get started
              </Link>
            </div>

            {/* Biashara Business */}
            <div className="relative bg-white border-2 border-[#166b5f] shadow-[0_20px_40px_rgba(22,107,95,0.12)] p-6 transition-all hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#166b5f] text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="bg-[#166b5f] inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-4 mt-2">Biashara (Business)</div>
              <div className="text-2xl font-bold text-[#166b5f]">~$11 USD/user/mo</div>
              <ul className="space-y-2 mt-6 mb-6">
                {['Unlimited users', 'Dark web + threat actor tracking', 'Kiswahili NLP', 'SIEM + SOAR', 'Priority support'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#166b5f] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/consultation" className="block text-center bg-[#166b5f] text-white py-2 rounded-full font-semibold hover:bg-[#0f5549] transition">
                Request demo →
              </Link>
            </div>

            {/* Shirika Enterprise */}
            <div className="bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 transition-all hover:-translate-y-1">
              <div className="bg-[#ffe0f0] inline-block px-3 py-1 rounded-full text-sm font-semibold text-[#b14562] mb-4">Shirika (Enterprise)</div>
              <div className="text-2xl font-bold text-[#166b5f]">Bei ya mazungumzo</div>
              <div className="text-sm text-slate-500 mb-2">Custom pricing</div>
              <ul className="space-y-2 mt-6 mb-6">
                {['Everything in Biashara', 'On-premises deployment', '365-day retention', 'Dedicated analyst support', '99.9% SLA'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#166b5f] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/consultation" className="block text-center border border-[#166b5f] text-[#166b5f] py-2 rounded-full font-semibold hover:bg-[#166b5f] hover:text-white transition">
                Contact sales
              </Link>
            </div>
          </div>
          
          <div className="mt-8 bg-slate-100 border border-black/5 rounded-2xl p-4">
            <p className="text-sm text-slate-600">💡 Volume discounts available. NGOs, faith-based organisations, and public sector get special pricing. Annual subscriptions get two months free. M-Pesa & bank transfer accepted.</p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Technical Specifications</h2>
          <div className="w-16 h-0.5 bg-[#166b5f] mt-3 mb-8" />
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <tbody>
                {[
                  ["Data Sources", "3,800+ (800+ Africa-specific)"],
                  ["Update Frequency", "Real-time (sub-60 seconds for critical alerts)"],
                  ["Languages Supported", "English, Kiswahili, French (West Africa)"],
                  ["Retention", "90 days standard (365+ days in Enterprise)"],
                  ["Uptime SLA", "99.9% (Business & Enterprise)"],
                  ["Deployment", "Cloud (AWS af-south-1), Hybrid, On-premises"],
                  ["Integrations", "SIEM, SOAR, Ticketing, ChatOps, API-first"],
                  ["Compliance", "KDPA 2019, GDPR-ready, data residency in Africa"]
                ].map(([spec, detail], idx) => (
                  <tr key={idx} className="border-b border-black/5 last:border-0">
                    <td className="p-5 font-semibold text-[#0f172a] w-1/3">{spec}</td>
                    <td className="p-5 text-slate-600">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
        }
        .stat-card svg {
          color: #166b5f;
          flex-shrink: 0;
        }
        .stat-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
        }
        .stat-card p {
          font-size: 12px;
          color: #64748b;
          margin-top: 3px;
        }
      `}</style>
      <style jsx>{`
        .faq {
          background: #166b5f;
          border: none;
          overflow: hidden;
          border-radius: 12px;
        }
        .question {
          width: 100%;
          padding: 18px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #166b5f;
          color: #ffffff;
          border: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          text-align: left;
        }
        .answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.35s ease;
          padding: 0 20px;
          background: #166b5f;
        }
        .answer.open {
          max-height: 320px;
          padding: 0 20px 20px 20px;
        }
        .answer p {
          font-size: 14.5px;
          color: rgba(255,255,255,0.9);
          line-height: 1.65;
        }
        svg {
          color: white;
        }
      `}</style>
    </div>
  );
}