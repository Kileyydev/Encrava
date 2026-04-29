// app/products/intel/page.tsx
import Link from "next/link";
import { Radar, CheckCircle2, Zap, Globe, Shield, Bell, Database, BarChart3, Lock, ArrowLeft } from "lucide-react";
import Footer from "../../components/home/Footer"; 
import TopNavBar from "../../components/home/Navbar"; 

export default function IntelPage() {
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
                🕵️‍♂️ African Threat Intelligence
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
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
            <div className="bg-gradient-to-br from-[#d2eae2] to-[#e0f1ea] rounded-3xl p-8 shadow-xl">
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
      <section>
    <h2>Pricing</h2>
    <div class="pricing-consult">
      <h3>📞 Custom Pricing for Your Organisation</h3>
      <p>Every organisation has unique needs. Contact our team for a tailored quote based on your user count, deployment preference, and required features.</p>
      <a href="#" class="btn-primary" style="background: #b1536e;">Contact Sales for Pricing →</a>
      <p style="margin-top: 20px; font-size: 0.85rem;">✨ NGO & public sector discounts available | Annual plans include free months</p>
    </div>
          
    <div className="mt-8 bg-[#fef4ea] rounded-2xl p-4 border-l-4 border-[#ffb3c6]">
      <p className="text-sm text-[#2f5e53]">💡 All prices in KES or USD. Annual subscriptions receive two months free. M-Pesa and RTGS bank transfer accepted. NGO and public sector discounts of up to 30% available.</p>
    </div>
      </section>

      <Footer />
    </div>
  );
}