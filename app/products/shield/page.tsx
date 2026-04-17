// app/products/shield/page.tsx
import Link from "next/link";
import { Shield, CheckCircle2, Mail, Brain, Zap, Bell, RefreshCw, Users, ArrowLeft } from "lucide-react";
import Footer from "../components/home/Footer"; 
import TopNavBar from "../components/home/Navbar"; 

export default function ShieldPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#eef6f0]">

      <TopNavBar />
      
      {/* Back to Products Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#166b5f] hover:text-[#0f5549] transition">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-[#ffe0f0] text-[#b34e6b] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
                🛡️ AI-Powered Phishing Detection
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
                Phishing Attacks in Africa Look Different.<br />Our Detection Does Too.
              </h1>
              <p className="text-lg text-[#2f5e53] mb-8 leading-relaxed">
                Encrava Shield is trained on African phishing campaigns — M-Pesa scams, KRA impersonation, 
                local bank fraud, and Kiswahili-language attacks — to protect your organisation with 99.7% detection accuracy.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-[#166b5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition">
                  Request live demo →
                </Link>
                <Link href="/contact" className="border-2 border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition">
                  See how it works
                </Link>
              </div>
              <p className="text-sm text-[#4b5563] mt-4">No commitment · M-Pesa accepted · African-trained AI</p>
            </div>
            <div className="bg-gradient-to-br from-[#d2eae2] to-[#e0f1ea] rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#1e5a4e] mb-4">🛡️ Real threats we stop daily</h3>
              <div className="space-y-2">
                {[
                  '📱 M-Pesa fake SMS & email scams',
                  '🏦 KCB / Equity Bank lookalike portals',
                  '📄 KRA iTax refund phishing',
                  '🇰🇪 eCitizen & Huduma fraud',
                  '💼 CEO fraud / BEC targeting finance'
                ].map(item => (
                  <div key={item} className="text-[#2f5e53]">{item}</div>
                ))}
              </div>
              <div className="mt-6 bg-white/80 rounded-2xl p-4">
                <p className="text-sm italic">"Shield caught a KRA impersonation email written in Kiswahili — our previous global vendor missed it completely."</p>
                <p className="text-xs font-bold mt-2">— Head of IT, Kenyan Government Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Threats We Detect */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-4">African Phishing Threats We Detect</h2>
          <p className="text-[#2f5e53] mb-8">Global platforms miss local context. Shield sees everything.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'M-Pesa phishing — fake Safaricom SMS & email',
              'KRA iTax impersonation — fraudulent tax refunds',
              'Bank impersonation: KCB, Equity, Co-op, Absa Kenya',
              'eCitizen & Huduma Centre fraud',
              'Job offer scams — fake employment requests',
              'BEC / CEO fraud targeting procurement',
              'NGO & donor impersonation',
              'WhatsApp-initiated email phishing'
            ].map(threat => (
              <div key={threat} className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-green-200">
                <span className="text-[#b14562]">⚠️</span>
                <span className="text-sm text-[#1e4a42]">{threat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-8">Key Features — African-first protection</h2>
          <div className="bg-white/80 rounded-2xl overflow-hidden border border-green-200">
            <table className="w-full">
              <tbody>
                {[
                  ['African Brand Watchlist', 'Pre-loaded with 200+ African brand profiles: Safaricom, M-Pesa, Equity Bank, KCB, Co-op Bank, KRA, NHIF, eCitizen for instant impersonation detection.'],
                  ['Kiswahili NLP Engine', 'Natural language processing trained on Kiswahili phishing text — catches attacks that global platforms miss.'],
                  ['AI Link Analysis', 'URL detonation in isolated sandbox, credential harvesting detection, under 2 seconds.'],
                  ['Sender Authenticity Scoring', 'Detects display name spoofing, lookalike domains (.co.ke), Safaricom/Airtel sender ID spoofing.'],
                  ['BEC Detection', 'Identifies business email compromise: executives, finance directors, procurement officers.'],
                  ['Attachment Sandboxing', 'Cloud sandbox detonation for macros, PDF exploits, weaponised Office docs.'],
                  ['Real-Time Quarantine', 'Suspicious emails held automatically; notifications in English/Kiswahili.'],
                  ['Auto-Remediation', 'Automatically retract delivered phishing emails from all mailboxes post-detection.'],
                  ['One-Click User Reporting', 'Phish Report button; analyst review within 15 min for high-priority submissions.']
                ].map(([feature, details]) => (
                  <tr key={feature} className="border-b border-green-100">
                    <td className="py-4 px-6 font-semibold text-[#0f5549] w-1/3">{feature}</td>
                    <td className="py-4 px-6 text-[#2f5e53]">{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-8 text-center">How Encrava Shield Works</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Ingest', desc: 'Email arrives via API (M365, GWS, on-prem)' },
              { step: '2', title: 'Analyse', desc: 'AI analyses 200+ signals in under 2 seconds' },
              { step: '3', title: 'Score', desc: 'Threat score 0-100 with explanation' },
              { step: '4', title: 'Act', desc: 'Deliver, quarantine, or block based on policy' },
              { step: '5', title: 'Learn', desc: 'Continuous improvement from every decision' }
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#166b5f] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">{item.step}</div>
                <h3 className="font-bold text-[#145c4f]">{item.title}</h3>
                <p className="text-xs text-[#2f5e53] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#145c4f] mb-4">Simple, transparent pricing</h2>
          <p className="text-center text-[#2f5e53] mb-12">Kenya Shillings / USD — NGO & public sector discounts available</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Msingi Starter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-200">
              <div className="bg-[#ffe0f0] inline-block px-3 py-1 rounded-full text-sm font-semibold text-[#b14562] mb-4">Msingi (Starter)</div>
              <div className="text-3xl font-bold text-[#166b5f]">KES 500<span className="text-sm font-normal">/user/mo</span></div>
              <div className="text-sm text-gray-500 mb-4">~$4 USD/user/mo</div>
              <ul className="space-y-2 mb-6">
                {['Up to 200 users', 'Email link analysis', 'Attachment sandboxing', 'African brand watchlist', 'Email quarantine'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-[#166b5f]" />{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center border-2 border-[#166b5f] text-[#166b5f] py-2 rounded-full font-semibold hover:bg-[#166b5f]/10">Get started</Link>
            </div>

            {/* Biashara Business - Highlighted */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#ffb3c6] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#166b5f] text-white px-4 py-1 rounded-full text-xs font-bold">Most Popular</div>
              <div className="bg-[#166b5f] inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-4 mt-2">Biashara (Business)</div>
              <div className="text-3xl font-bold text-[#166b5f]">KES 900<span className="text-sm font-normal">/user/mo</span></div>
              <div className="text-sm text-gray-500 mb-4">~$7 USD/user/mo</div>
              <ul className="space-y-2 mb-6">
                {['Unlimited users', 'Kiswahili NLP engine', 'BEC detection', 'Auto-remediation & SIEM', 'Priority support + API'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-[#166b5f]" />{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center bg-[#166b5f] text-white py-2 rounded-full font-semibold hover:bg-[#0f5549]">Request demo →</Link>
            </div>

            {/* Shirika Enterprise */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-200">
              <div className="bg-[#ffe0f0] inline-block px-3 py-1 rounded-full text-sm font-semibold text-[#b14562] mb-4">Shirika (Enterprise)</div>
              <div className="text-2xl font-bold text-[#166b5f]">Bei ya mazungumzo</div>
              <div className="text-sm text-gray-500 mb-4">Custom pricing</div>
              <ul className="space-y-2 mb-6">
                {['Everything in Biashara', 'Custom AI model tuning', 'Multi-tenant support', 'Dedicated CSM', '99.9% SLA & on-premises'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-[#166b5f]" />{item}</li>
                ))}
              </ul>
              <Link href="/contact" className="block text-center border-2 border-[#166b5f] text-[#166b5f] py-2 rounded-full font-semibold hover:bg-[#166b5f]/10">Contact sales</Link>
            </div>
          </div>
          
          <div className="mt-8 bg-[#fef4ea] rounded-2xl p-4 border-l-4 border-[#ffb3c6]">
            <p className="text-sm text-[#2f5e53]">💡 Volume discounts for 500+ users. NGOs, faith‑based organisations, and public sector receive special pricing. Annual subscriptions get two months free. M-Pesa & bank transfer accepted.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}