
import Link from "next/link";
import {
  ShieldCheck,
  SearchCode,
  FileText,
  Smartphone,
  AlertTriangle,
  Users,
  ArrowRight,
  CheckCircle2,
  Clock,
  Phone,
} from "lucide-react";
import Footer from "../components/home/Footer";
import TopNavBar from "../components/home/Navbar";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "risk-assessment",
    icon: ShieldCheck,
    badge: "Foundation",
    badgeColor: "bg-[#e0f1ea] text-[#166b5f]",
    title: "Cybersecurity Risk Assessment",
    tagline: "Know your exposure before attackers do.",
    description:
      "A structured evaluation of your security posture mapped against international best practices and Kenya's Data Protection Act 2019, CBK Cybersecurity Guidelines, and Communications Authority requirements.",
    duration: "2 – 3 weeks",
    deliverable: "Board-level risk summary + technical findings report + regulatory gap analysis",
    idealFor: "KDPA compliance readiness, pre-audit preparation, and baseline security benchmarking",
    highlights: [
      "KDPA 2019 & ODPC gap analysis",
      "CBK & CA regulatory mapping",
      "ISO 27001 / NIST CSF 2.0 benchmarking",
      "Board-ready executive summary",
    ],
  },
  {
    id: "pen-testing",
    icon: SearchCode,
    badge: "Offensive Security",
    badgeColor: "bg-[#fff0e0] text-[#b36000]",
    title: "Penetration Testing (VAPT)",
    tagline: "Simulated attacks. Real findings. Zero surprises.",
    description:
      "Certified red team simulations against your web apps, internal networks, mobile applications, and APIs. Deep specialisation in mobile money integrations, USSD platforms, and Safaricom/Airtel API-connected systems.",
    duration: "1 – 2 weeks per scope",
    deliverable: "CVSS-scored findings report, proof of concept, and remediation guidance",
    idealFor: "Fintechs, banks, e-commerce platforms, and any organisation before a major product launch",
    highlights: [
      "Mobile money API & USSD session testing",
      "M-Pesa B2C/C2B integration security",
      "OWASP & PTES methodology",
      "OWASP Mobile Security Testing Guide (MSTG)",
    ],
  },
  {
    id: "kdpa",
    icon: FileText,
    badge: "Compliance",
    badgeColor: "bg-[#e8e0ff] text-[#5b2db3]",
    title: "KDPA Compliance Programme",
    tagline: "Stay compliant. Avoid KES 5M fines.",
    description:
      "Kenya's Data Protection Act 2019 imposes significant obligations on data controllers and processors. Encrava handles your ODPC registration, DPIAs, privacy policies, and full audit readiness — end to end.",
    duration: "4 – 8 weeks",
    deliverable: "Compliance roadmap, policy documentation library, and ODPC registration package",
    idealFor: "Any organisation processing personal data belonging to Kenyan residents",
    highlights: [
      "ODPC registration support",
      "Data Protection Impact Assessments (DPIA)",
      "Privacy policy & procedure drafting",
      "Data subject request procedures",
    ],
  },
  {
    id: "mobile-fintech",
    icon: Smartphone,
    badge: "Fintech Specialist",
    badgeColor: "bg-[#ffe0f0] text-[#b34e6b]",
    title: "Mobile & Fintech Security",
    tagline: "Built for Africa's mobile-first financial stack.",
    description:
      "Africa's financial sector runs on mobile infrastructure. Encrava specialises in securing mobile money platforms, digital lending apps, SACCO management systems, and payment aggregators against the specific threats targeting them.",
    duration: "Scoped per engagement",
    deliverable: "Security assessment + hardening recommendations + regulatory alignment report",
    idealFor: "Fintechs, digital banks, SACCOs, payment aggregators, and mobile money operators",
    highlights: [
      "Android & iOS mobile app security",
      "API gateway hardening",
      "SIM-swap mitigation strategies",
      "CBK Payment Service Provider alignment",
    ],
  },
  {
    id: "incident-response",
    icon: AlertTriangle,
    badge: "24/7 Retainer",
    badgeColor: "bg-[#fff3e0] text-[#b35900]",
    title: "Incident Response Planning & Retainer",
    tagline: "Prepare now. Respond faster. Recover fully.",
    description:
      "Organisations that prepare for breaches in advance respond faster and recover more effectively. Encrava builds incident response plans calibrated to your sector with on-call response capability backed by a guaranteed SLA.",
    duration: "Plan: 2 – 3 weeks | Retainer: ongoing",
    deliverable: "IR plan, tabletop exercise report, and sector-specific playbooks",
    idealFor: "Banks, telecoms, hospitals, government agencies, and organisations handling sensitive financial or personal data",
    highlights: [
      "Ransomware & account takeover playbooks",
      "Tabletop exercises for your team",
      "4-hour priority response SLA",
      "24/7 availability including public holidays",
    ],
  },
  {
    id: "awareness-training",
    icon: Users,
    badge: "Human Layer",
    badgeColor: "bg-[#e0f1ea] text-[#166b5f]",
    title: "Security Awareness Training",
    tagline: "Your people are your perimeter. Train them.",
    description:
      "Human error drives over 73% of cyber incidents in Africa. Encrava delivers culturally relevant training in English and Kiswahili targeting the exact social engineering tactics used against African employees — M-Pesa phishing, job offer scams, and WhatsApp fraud.",
    duration: "Flexible — half-day to multi-week programmes",
    deliverable: "Training completion report, phishing simulation results, and staff risk scoring",
    idealFor: "All organisations — frontline staff training consistently delivers among the highest security ROI",
    highlights: [
      "English & Kiswahili delivery",
      "M-Pesa & WhatsApp fraud scenarios",
      "In-person workshops or e-learning modules",
      "Live phishing simulation campaigns",
    ],
  },
];

const process = [
  {
    step: "01",
    swahili: "Hatua 1 — Discovery",
    title: "Free Scoping Call",
    description:
      "We understand your environment, regulatory obligations, and security objectives. No cost, no commitment.",
  },
  {
    step: "02",
    swahili: "Hatua 2 — Proposal",
    title: "Clear Statement of Work",
    description:
      "Transparent scope, timeline, deliverables, and pricing in KES or USD. No hidden fees.",
  },
  {
    step: "03",
    swahili: "Hatua 3 — Execution",
    title: "Hands-On Engagement",
    description:
      "We work around your operational hours with regular progress updates throughout.",
  },
  {
    step: "04",
    swahili: "Hatua 4 — Findings",
    title: "Plain-Language Report",
    description:
      "Executive briefing and technical report delivered without unnecessary jargon. Board-ready.",
  },
  {
    step: "05",
    swahili: "Hatua 5 — Remediation",
    title: "Optional Follow-On Support",
    description:
      "We stay with you to help implement recommendations quickly and effectively.",
  },
];

const frameworks = [
  "Kenya Data Protection Act (KDPA) 2019",
  "Computer Misuse & Cybercrimes Act 2018",
  "CBK Cybersecurity Guidelines",
  "Communications Authority of Kenya",
  "NIST Cybersecurity Framework (CSF 2.0)",
  "ISO/IEC 27001:2022",
  "PCI-DSS v4.0",
  "GDPR",
  "AU Malabo Convention",
  "ODPC Regulations",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f0f9ff] to-[#eef6f0]">
      <TopNavBar />

      {/* ── Hero ── */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="bg-[#e0f1ea] text-[#166b5f] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
              Huduma — Consulting Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6 leading-tight">
              Expert Security. Built for African Operating Realities.
            </h1>
            <p className="text-lg text-[#2f5e53] mb-8 leading-relaxed">
              Our consulting team combines certified expertise with deep knowledge of
              the African regulatory environment and threat landscape. We serve
              organisations of every size — from growing SMEs to large enterprises
              managing complex compliance obligations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="bg-[#166b5f] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition inline-flex items-center gap-2"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f]/10 transition"
              >
                Talk to Our Team
              </Link>
            </div>
            <p className="text-sm text-[#4b5563] mt-4 flex items-center gap-2">
              <Clock size={14} /> Free 30-minute scoping call · No sales pressure
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-4">Our Services</h2>
          <p className="text-[#2f5e53] mb-12 max-w-2xl">
            Every engagement begins with a thorough understanding of your operating
            context — your sector, your data, your suppliers, and the specific threat
            actors most likely to target you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white/80 rounded-2xl p-8 border border-green-100 shadow-sm hover:shadow-md transition group"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#e0f1ea] rounded-xl flex items-center justify-center">
                      <Icon size={22} className="text-[#166b5f]" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & tagline */}
                  <h3 className="text-xl font-bold text-[#0f5549] mb-1">{service.title}</h3>
                  <p className="text-sm font-medium text-[#166b5f] mb-3 italic">{service.tagline}</p>
                  <p className="text-sm text-[#2f5e53] mb-5 leading-relaxed">{service.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-[#1e4a42]">
                        <CheckCircle2 size={15} className="text-[#166b5f] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Meta */}
                  <div className="border-t border-green-100 pt-4 grid grid-cols-1 gap-2 text-xs text-[#4b5563]">
                    <div>
                      <span className="font-semibold text-[#0f5549]">Duration: </span>
                      {service.duration}
                    </div>
                    <div>
                      <span className="font-semibold text-[#0f5549]">Deliverable: </span>
                      {service.deliverable}
                    </div>
                    <div>
                      <span className="font-semibold text-[#0f5549]">Ideal for: </span>
                      {service.idealFor}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Engagement Process ── */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-4">
            Our Engagement Process
          </h2>
          <p className="text-[#2f5e53] mb-12 max-w-2xl">
            From first contact to remediation support — a clear, transparent process
            with no surprises.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%-8px)] w-4 h-0.5 bg-green-200 z-10" />
                )}
                <div className="bg-white/80 rounded-2xl p-5 border border-green-100 h-full">
                  <div className="w-10 h-10 bg-[#166b5f] rounded-full flex items-center justify-center text-white text-sm font-bold mb-3">
                    {step.step}
                  </div>
                  <p className="text-[10px] font-semibold text-[#166b5f] mb-1 uppercase tracking-wide">
                    {step.swahili}
                  </p>
                  <h4 className="text-sm font-bold text-[#0f5549] mb-2">{step.title}</h4>
                  <p className="text-xs text-[#2f5e53] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance Frameworks ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#145c4f] mb-4">
            Compliance Frameworks We Support
          </h2>
          <p className="text-[#2f5e53] mb-8 max-w-2xl">
            Whether you are preparing for a local regulatory audit or aligning with
            international standards, our team has certified expertise across all
            major frameworks relevant to African organisations.
          </p>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((fw) => (
              <div
                key={fw}
                className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 border border-green-200"
              >
                <span className="text-[#166b5f]">✓</span>
                <span className="text-sm text-[#1e4a42] font-medium">{fw}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-[#166b5f] to-[#0f5549] rounded-3xl p-10 md:p-14 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Build a Stronger Security Foundation?
            </h2>
            <p className="text-[#a8ddd4] max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Book a free 30-minute consultation with our Nairobi team. We will give
              you an honest assessment of your current posture and a clear path
              forward. No sales pressure — just straightforward expert advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/consultation"
                className="bg-white text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#e0f1ea] transition inline-flex items-center gap-2"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="tel:+254700000000"
                className="border-2 border-white/60 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
              >
                <Phone size={16} /> +254 700 000 000
              </Link>
            </div>
            <p className="text-sm text-[#a8ddd4] mt-6">
              Active incident? Email{" "}
              <a href="mailto:ir@encrava.africa" className="underline text-white">
                ir@encrava.africa
              </a>{" "}
              for 24/7 emergency response.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
