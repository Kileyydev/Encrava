// app/products/shield/page.tsx
"use client";

import Link from "next/link";
import { Shield, CheckCircle2, CalendarDays, Brain, Users, Clock, ArrowUpRight } from "lucide-react";
import Footer from "../../components/home/Footer";
import TopNavBar from "../../components/home/Navbar";

export default function ShieldPage() {
  const features = [
    { name: "African Brand Watchlist", desc: "Pre-loaded with 200+ African brand profiles: Safaricom, M-Pesa, Equity Bank, KCB, Co-op Bank, KRA, NHIF, eCitizen for instant impersonation detection." },
    { name: "Kiswahili NLP Engine", desc: "Natural language processing trained on Kiswahili phishing text — catches attacks that global platforms miss." },
    { name: "AI Link Analysis", desc: "URL detonation in isolated sandbox, credential harvesting detection, under 2 seconds." },
    { name: "Sender Authenticity Scoring", desc: "Detects display name spoofing, lookalike domains (.co.ke), Safaricom/Airtel sender ID spoofing." },
    { name: "BEC Detection", desc: "Identifies business email compromise: executives, finance directors, procurement officers." },
    { name: "Attachment Sandboxing", desc: "Cloud sandbox detonation for macros, PDF exploits, weaponised Office docs." },
    { name: "Real-Time Quarantine", desc: "Suspicious emails held automatically; notifications in English/Kiswahili." },
    { name: "Auto-Remediation", desc: "Automatically retract delivered phishing emails from all mailboxes post-detection." },
    { name: "One-Click User Reporting", desc: "Phish Report button; analyst review within 15 min for high-priority submissions." }
  ];

  const threats = [
    "M-Pesa phishing — fake Safaricom SMS & email",
    "KRA iTax impersonation — fraudulent tax refunds",
    "Bank impersonation: KCB, Equity, Co-op, Absa Kenya",
    "eCitizen & Huduma Centre fraud",
    "Job offer scams — fake employment requests",
    "BEC / CEO fraud targeting procurement",
    "NGO & donor impersonation",
    "WhatsApp-initiated email phishing"
  ];

  const howItWorks = [
    { step: "1", title: "Ingest", desc: "Email arrives via API (M365, GWS, on-prem)" },
    { step: "2", title: "Analyse", desc: "AI analyses 200+ signals in under 2 seconds" },
    { step: "3", title: "Score", desc: "Threat score 0-100 with explanation" },
    { step: "4", title: "Act", desc: "Deliver, quarantine, or block based on policy" },
    { step: "5", title: "Learn", desc: "Continuous improvement from every decision" }
  ];

  const integrations = [
    "Microsoft 365 (Exchange Online)",
    "Google Workspace",
    "On-premises Exchange",
    "Zoho Mail",
    "Splunk / Microsoft Sentinel",
    "ServiceNow / Freshdesk",
    "WhatsApp Business API"
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
                🛡️ Encrava Shield
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[#0f172a]">
                Phishing Attacks in Africa{" "}
                <span className="text-[#166b5f]">Look Different.</span>
              </h1>
              <div className="w-24 h-1 bg-[#166b5f] mt-6" />
              <p className="mt-7 text-[15px] leading-8 text-slate-600">
                Encrava Shield is trained on African phishing campaigns — M-Pesa scams, KRA impersonation, 
                local bank fraud, and Kiswahili-language attacks — to protect your organisation with 99.7% detection accuracy.
              </p>
              
              {/* STATS CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div className="stat-card">
                  <Shield size={18} />
                  <div>
                    <h3>99.7%</h3>
                    <p>Detection accuracy</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Brain size={18} />
                  <div>
                    <h3>&lt;2s</h3>
                    <p>Analysis latency</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Users size={18} />
                  <div>
                    <h3>200+</h3>
                    <p>African brands protected</p>
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
              <p className="text-sm text-slate-500 mt-4">No commitment · M-Pesa accepted · African-trained AI</p>
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
                        GET PROTECTED
                      </p>
                      <h2 className="text-2xl font-bold text-[#0f172a]">Request Live Demo</h2>
                    </div>
                  </div>
                  
                  {/* Real threats we stop daily */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0f172a] mb-3">🛡️ Real threats we stop daily</h3>
                    <div className="space-y-2">
                      {[
                        '📱 M-Pesa fake SMS & email scams',
                        '🏦 KCB / Equity Bank lookalike portals',
                        '📄 KRA iTax refund phishing',
                        '🇰🇪 eCitizen & Huduma fraud',
                        '💼 CEO fraud / BEC targeting finance'
                      ].map(item => (
                        <div key={item} className="text-sm text-slate-600">{item}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <p className="text-sm italic text-slate-600">"Shield caught a KRA impersonation email written in Kiswahili — our previous global vendor missed it completely."</p>
                    <p className="text-xs font-bold text-slate-700 mt-2">— Head of IT, Kenyan Government Agency</p>
                  </div>
                  
                  <Link 
                    href="/consultation" 
                    className="flex items-center justify-center gap-2 w-full bg-[#166b5f] text-white py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all"
                  >
                    Request Demo <ArrowUpRight size={16} />
                  </Link>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    See Shield in action against real African phishing campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Phishing Threats We Detect */}
      <section className="py-16 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">African Phishing Threats We Detect</h2>
          <div className="w-16 h-0.5 bg-[#166b5f] mt-3 mb-4" />
          <p className="text-slate-600 mb-8">Global platforms miss local context. Shield sees everything.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {threats.map((threat, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white border border-black/5 p-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <span className="text-[#166b5f] text-lg">⚠️</span>
                <span className="text-sm text-slate-700">{threat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Key Features — African-first protection</h2>
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

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0f172a]">How Encrava Shield Works</h2>
          <div className="w-16 h-0.5 bg-[#166b5f] mx-auto mt-3 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#166b5f] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#0f172a]">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Support */}
      <section className="py-16">
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
            Native API integrations, no mail flow changes required for cloud tenants. SMTP relay available for hybrid environments.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0f172a]">Simple, transparent pricing</h2>
          <div className="w-16 h-0.5 bg-[#166b5f] mx-auto mt-3 mb-4" />
          <p className="text-center text-slate-600 mb-12">USD — NGO & public sector discounts available</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Msingi Starter */}
            <div className="bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 transition-all hover:-translate-y-1">
              <div className="bg-[#ffe0f0] inline-block px-3 py-1 rounded-full text-sm font-semibold text-[#b14562] mb-4">Msingi (Starter)</div>
              <div className="text-2xl font-bold text-[#166b5f]">~$4 USD/user/mo</div>
              <ul className="space-y-2 mt-6 mb-6">
                {['Up to 200 users', 'Email link analysis', 'Attachment sandboxing', 'African brand watchlist', 'Email quarantine'].map(item => (
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

            {/* Biashara Business - Highlighted */}
            <div className="relative bg-white border-2 border-[#166b5f] shadow-[0_20px_40px_rgba(22,107,95,0.12)] p-6 transition-all hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#166b5f] text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="bg-[#166b5f] inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-4 mt-2">Biashara (Business)</div>
              <div className="text-2xl font-bold text-[#166b5f]">~$7 USD/user/mo</div>
              <ul className="space-y-2 mt-6 mb-6">
                {['Unlimited users', 'Kiswahili NLP engine', 'BEC detection', 'Auto-remediation & SIEM', 'Priority support + API'].map(item => (
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
                {['Everything in Biashara', 'Custom AI model tuning', 'Multi-tenant support', 'Dedicated CSM', '99.9% SLA & on-premises'].map(item => (
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
            <p className="text-sm text-slate-600">💡 Volume discounts for 500+ users. NGOs, faith‑based organisations, and public sector receive special pricing. Annual subscriptions get two months free. M-Pesa & bank transfer accepted.</p>
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
                  ["Detection Accuracy", "99.7% (tested against African phishing corpus, Kiswahili samples, Q4 2025)"],
                  ["False Positive Rate", "Under 0.05%"],
                  ["Analysis Latency", "Under 2 seconds per message"],
                  ["Languages", "English, Kiswahili; French for West Africa deployments"],
                  ["Uptime SLA", "99.9% guaranteed (Business & Enterprise tiers)"],
                  ["Deployment", "AWS af-south-1; on-premises for Enterprise/government"],
                  ["Authentication", "SSO (SAML 2.0), SCIM, MFA enforced for all admin access"],
                  ["Compliance", "KDPA 2019 compliant, GDPR-ready, data residency within Africa"]
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
    </div>
  );
}