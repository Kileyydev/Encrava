// app/products/intel/page.tsx
import Link from "next/link";
import { Radar, CheckCircle2, Zap, Globe, Shield, Bell, Database, BarChart3, Lock, ArrowLeft, Mail, Phone } from "lucide-react";
import Footer from "../../components/home/Footer"; 
import TopNavBar from "../../components/home/Navbar"; 

export default function IntelPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f0f9ff] to-[#eef6f0]">

      <TopNavBar />
      
          {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-[#ffe0f0] text-[#b34e6b] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
                🕵️‍♂️ African Threat Intelligence
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
                African Threats Need African Intelligence
              </h1>
              <p className="text-lg text-[#2f5e53] mb-8 leading-relaxed">
                Encrava Intel monitors the threat sources that matter most to African organisations — local cybercriminal networks, 
                mobile money fraud syndicates, regional dark web markets, and the threat actors specifically targeting Kenya and Sub-Saharan Africa.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-[#166b5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition">
                  Start 14-day free trial →
                </Link>
                <Link href="/contact" className="border-2 border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition">
                  Request demo
                </Link>
              </div>
              <p className="text-sm text-[#4b5563] mt-4">No credit card required · M-Pesa payment available</p>
            </div>
            <div className="bg-linear-to-br from-[#d2eae2] to-[#e0f1ea] rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#1e5a4e] mb-4">🔍 Real-time African Intel</h3>
              <div className="space-y-3">
                {[
                  '📡 3,000+ global + 800+ Africa-specific sources',
                  '⚡ sub-60 sec alert delivery',
                  '🇰🇪 Kiswahili NLP engine & local dark web',
                  '📱 M-Pesa fraud monitoring module'
                ].map(item => (
                  <div key={item} className="text-[#2f5e53]">{item}</div>
                ))}
              </div>
              <div className="mt-6 bg-white/80 rounded-2xl p-4">
                <p className="text-sm italic">"Encrava Intel detected a SIM-swap broker within 90 seconds — proactive defense saved millions."</p>
                <p className="text-xs font-bold mt-2">— CISO, Tier-1 Kenyan Bank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Africa-Specific Sources Section */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-4">Africa-Specific Intelligence Sources</h2>
          <p className="text-[#2f5e53] mb-8">We don't just translate global feeds — we embed inside African underground ecosystems.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'East African Telegram & WhatsApp fraud channels',
              'Local dark web forums: M-Pesa PINs, KRA credentials',
              'SIM-swap broker networks (Safaricom, Airtel, Telkom)',
              'West African Yahoo Boys targeting Kenyan businesses',
              'South African banking credential marketplaces',
              'Pan-African phishing kits & bulletproof hosting',
              'KE-CIRT/CC, CSIRT-Africa, ZA-CERT, NG-CERT feeds',
              'African Union cyber threat-sharing network'
            ].map(source => (
              <div key={source} className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-green-200">
                <span className="text-[#166b5f]">✓</span>
                <span className="text-sm text-[#1e4a42]">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-8">Key Features — Built for African defenders</h2>
          <div className="bg-white/80 rounded-2xl overflow-hidden border border-green-200">
            <table className="w-full">
              <tbody>
                {[
                  ['Real-Time Local Feeds', '3,000+ global + 800+ Africa-specific sources, sub-60-second alert delivery.'],
                  ['M-Pesa & Mobile Money Watch', 'Dedicated monitoring for paybill fraud, fake USSD spoofing, and mobile banking credential theft.'],
                  ['Dark Web Monitoring', 'Leaked credentials, PII, and corporate data from dark web markets & forums.'],
                  ['Kiswahili Language Analysis', 'NLP engine analyzing Kiswahili threat content — critical for East African actor communications.'],
                  ['IoC Enrichment', 'IPs, domains, hashes enriched with African geolocation & actor attribution.'],
                  ['SIEM Integration', 'Native connectors for Splunk, Sentinel, QRadar, STIX 2.1 / TAXII 2.1 compatible.'],
                  ['Threat Actor Profiles', '500+ Africa-focused groups: fraud syndicates, state-sponsored APTs, cybercrime networks.'],
                  ['Executive Threat Briefings', 'Weekly plain-language briefs in English & Kiswahili for board/C-suite.'],
                  ['Full API Access', 'RESTful JSON, complete data export for SIEM/SOAR/custom tools.']
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

      {/* Pricing Section */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#145c4f] mb-4">Custom Pricing for Every Organisation</h2>
            <p className="text-lg text-[#2f5e53] max-w-2xl mx-auto">
              We understand that every organisation has unique needs. Get a personalised quote tailored to your security requirements, user count, and deployment preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Why custom pricing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#ffe0f0] p-3 rounded-full">
                  <Shield className="w-6 h-6 text-[#b14562]" />
                </div>
                <h3 className="text-xl font-bold text-[#145c4f]">Why custom quotes?</h3>
              </div>
              <ul className="space-y-4">
                {[
                  '✓ Flexible pricing based on your organisation size and needs',
                  '✓ Volume discounts for 500+ users or multiple products',
                  '✓ NGO, faith-based, and public sector special pricing (up to 30% off)',
                  '✓ On-premises deployment options with custom licensing',
                  '✓ Annual subscription — get 2 months free',
                  '✓ M-Pesa, RTGS, and flexible payment terms available'
                ].map(item => (
                  <li key={item} className="text-[#2f5e53]">{item}</li>
                ))}
              </ul>
            </div>

            {/* Right side - Contact form / CTA */}
            <div className="bg-linear-to-br from-[#166b5f] to-[#0f5549] rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Get Your Custom Quote</h3>
              <p className="text-white/80 mb-6">Fill in the details and our team will respond within 24 hours with a tailored pricing proposal.</p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full name" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#ffb3c6]"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Work email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#ffb3c6]"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Organisation name" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#ffb3c6]"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#ffb3c6]">
                    <option value="" className="text-[#0a2f2a]">Estimated users / seats</option>
                    <option value="1-50" className="text-[#0a2f2a]">1-50 users</option>
                    <option value="51-200" className="text-[#0a2f2a]">51-200 users</option>
                    <option value="201-500" className="text-[#0a2f2a]">201-500 users</option>
                    <option value="501-1000" className="text-[#0a2f2a]">501-1000 users</option>
                    <option value="1000+" className="text-[#0a2f2a]">1000+ users</option>
                  </select>
                </div>
                <button className="w-full bg-[#ffb3c6] text-[#0f5549] font-semibold py-3 rounded-xl hover:bg-[#ffc0d0] transition">
                  Request Quote →
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-sm text-white/70 mb-3">Or contact us directly</p>
                <div className="flex justify-center gap-6">
                  <Link href="mailto:sales@encrava.com" className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
                    <Mail size={16} /> sales@encrava.com
                  </Link>
                  <Link href="tel:+254700123456" className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
                    <Phone size={16} /> +254 700 123 456
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional note */}
          <div className="mt-8 bg-[#fef4ea] rounded-2xl p-4 border-l-4 border-[#ffb3c6]">
            <p className="text-sm text-[#2f5e53]">
              💡 <span className="font-semibold">Looking for a bundle?</span> Ask about our Encrava Shield + Intel combined package — proactive threat intelligence plus AI-powered email protection at a discounted rate. NGO and public sector discounts of up to 30% available.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#145c4f] mb-4">Everything in Enterprise (Shirika)</h2>
            <p className="text-[#2f5e53]">Premium features for large organisations and government entities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Database className="w-8 h-8" />, title: "365-day Retention", desc: "Long-term data retention for compliance and historical analysis" },
              { icon: <Lock className="w-8 h-8" />, title: "On-premises Deployment", desc: "Full data sovereignty with on-prem deployment option" },
              { icon: <Bell className="w-8 h-8" />, title: "Dedicated Analyst Support", desc: "24/7 access to our threat intelligence analysts" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Custom Data Pipelines", desc: "Tailored integrations with your existing security stack" },
              { icon: <Zap className="w-8 h-8" />, title: "99.9% SLA-backed Uptime", desc: "Enterprise-grade reliability with guaranteed uptime" },
              { icon: <Globe className="w-8 h-8" />, title: "Multi-tenant Support", desc: "Manage multiple subsidiaries or departments from one console" }
            ].map(feature => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 text-center shadow-md border border-green-200 hover:shadow-lg transition">
                <div className="text-[#166b5f] flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-[#145c4f] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#2f5e53]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}