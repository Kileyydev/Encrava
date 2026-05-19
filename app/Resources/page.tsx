// app/resources/page.tsx
import Link from "next/link";
import { 
  Search, 
  Calendar, 
  Download, 
  PlayCircle, 
  FileText, 
  BookOpen, 
  Video, 
  Users, 
  TrendingUp,
  Shield,
  Radar,
  ArrowRight,
  ChevronRight,
  Mail
} from "lucide-react";
import Footer from "../components/home/Footer";
import TopNavBar from "../components/home/Navbar";

// Resource type definitions
type ResourceType = "report" | "blog" | "webinar" | "case" | "doc";

interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  description: string;
  date: string;
  readTime?: string;
  icon: string;
  link: string;
  featured?: boolean;
  downloadUrl?: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "The State of Cybersecurity in East Africa 2026",
    type: "report",
    description: "An in-depth analysis of emerging threats, M-Pesa fraud trends, SIM-swap broker activity, and nation-state actors targeting Kenya, Uganda, Tanzania, and Rwanda.",
    date: "April 2026",
    readTime: "48 pages",
    icon: "📊",
    link: "/resources/state-of-cybersecurity-east-africa-2026",
    featured: true,
    downloadUrl: "/downloads/east-africa-cybersecurity-report-2026.pdf"
  },
  {
    id: 2,
    title: "M-Pesa Fraud Trends in Kenya 2026",
    type: "report",
    description: "Analysis of 500+ fraud campaigns targeting mobile money users, including SIM-swap tactics, fake USSD pages, and social engineering patterns.",
    date: "March 2026",
    readTime: "32 pages",
    icon: "📱",
    link: "/resources/mpesa-fraud-trends-2026",
    downloadUrl: "/downloads/mpesa-fraud-report-2026.pdf"
  },
  {
    id: 3,
    title: "Kiswahili Phishing: The Emerging Threat",
    type: "blog",
    description: "How attackers are using local languages to bypass traditional detection systems, and why African organisations need Kiswahili NLP.",
    date: "February 2026",
    readTime: "8 min read",
    icon: "🇰🇪",
    link: "/blog/kiswahili-phishing-emerging-threat"
  },
  {
    id: 4,
    title: "How a Tier-1 Bank Stopped SIM-Swap Fraud",
    type: "case",
    description: "Case study: How Encrava Intel provided real-time intelligence that helped a major Kenyan bank prevent SIM-swap attacks before customer impact.",
    date: "January 2026",
    readTime: "12 min read",
    icon: "🏦",
    link: "/case-studies/tier1-bank-sim-swap-prevention"
  },
  {
    id: 5,
    title: "API Integration Guide for Encrava Shield",
    type: "doc",
    description: "Complete technical documentation for integrating Encrava Shield with Microsoft 365, Google Workspace, and custom SIEM platforms.",
    date: "December 2025",
    readTime: "24 pages",
    icon: "📘",
    link: "/docs/shield-api-integration"
  },
  {
    id: 6,
    title: "Dark Web Monitoring for African Organisations",
    type: "report",
    description: "What Kenyan credentials are selling for on dark web markets, and how to proactively protect your organisation.",
    date: "November 2025",
    readTime: "28 pages",
    icon: "🌐",
    link: "/resources/dark-web-monitoring-africa",
    downloadUrl: "/downloads/dark-web-report-2025.pdf"
  },
  {
    id: 7,
    title: "BEC Attacks Targeting Procurement Teams",
    type: "blog",
    description: "How to protect against CEO fraud, invoice scams, and business email compromise targeting finance and procurement departments.",
    date: "October 2025",
    readTime: "6 min read",
    icon: "💼",
    link: "/blog/bec-attacks-procurement-teams"
  },
  {
    id: 8,
    title: "Securing Kenyan Government Digital Infrastructure",
    type: "webinar",
    description: "On-demand webinar with KE-CIRT/CC covering eCitizen security, KRA iTax protection, and national infrastructure defense.",
    date: "September 2025",
    readTime: "45 min",
    icon: "🎥",
    link: "/webinars/securing-kenyan-government-infrastructure"
  },
  {
    id: 9,
    title: "NGO Cyber Resilience in East Africa",
    type: "case",
    description: "How a regional NGO reduced phishing risk by 94% with Encrava Shield.",
    date: "August 2025",
    readTime: "10 min read",
    icon: "🤝",
    link: "/case-studies/ngo-cyber-resilience"
  },
  {
    id: 10,
    title: "Encrava Intel API Documentation",
    type: "doc",
    description: "RESTful API reference for STIX 2.1 and TAXII 2.1 integration, including authentication and data export examples.",
    date: "July 2025",
    readTime: "36 pages",
    icon: "🔌",
    link: "/docs/intel-api-documentation"
  },
  {
    id: 11,
    title: "Fintech Security in East Africa",
    type: "webinar",
    description: "Expert panel on securing mobile money platforms, digital lending apps, and payment gateways.",
    date: "June 2025",
    readTime: "60 min",
    icon: "📱",
    link: "/webinars/fintech-security-east-africa"
  },
  {
    id: 12,
    title: "KDPA Compliance: A Practical Guide",
    type: "report",
    description: "How Kenyan organisations can achieve and maintain Kenya Data Protection Act compliance.",
    date: "May 2025",
    readTime: "40 pages",
    icon: "📋",
    link: "/resources/kdpa-compliance-guide",
    downloadUrl: "/downloads/kdpa-compliance-guide.pdf"
  }
];

const typeConfig: Record<ResourceType, { label: string; bgColor: string; textColor: string; icon: JSX.Element }> = {
  report: { 
    label: "Threat Report", 
    bgColor: "bg-[#166b5f]/10", 
    textColor: "text-[#166b5f]",
    icon: <FileText className="w-3.5 h-3.5" />
  },
  blog: { 
    label: "Blog Post", 
    bgColor: "bg-[#ffb3c6]/20", 
    textColor: "text-[#b1536e]",
    icon: <BookOpen className="w-3.5 h-3.5" />
  },
  webinar: { 
    label: "Webinar", 
    bgColor: "bg-[#2b9a7a]/10", 
    textColor: "text-[#2b9a7a]",
    icon: <Video className="w-3.5 h-3.5" />
  },
  case: { 
    label: "Case Study", 
    bgColor: "bg-[#1e3a5f]/10", 
    textColor: "text-[#1e3a5f]",
    icon: <Users className="w-3.5 h-3.5" />
  },
  doc: { 
    label: "Documentation", 
    bgColor: "bg-[#d45a7a]/10", 
    textColor: "text-[#d45a7a]",
    icon: <FileText className="w-3.5 h-3.5" />
  }
};

export default function ResourcesPage() {
  const featuredResource = resources.find(r => r.featured);
  const otherResources = resources.filter(r => !r.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#eef6f0]">
      <TopNavBar />

      {/* Hero Section */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-[#ffe0f0] text-[#b34e6b] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
            📚 Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
            Resources & Intelligence
          </h1>
          <p className="text-xl text-[#2f5e53] max-w-2xl mx-auto">
            Threat reports, case studies, and cybersecurity insights tailored for African organisations.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-full p-2 flex flex-col sm:flex-row gap-3 items-center justify-between border border-green-200/50">
            <div className="flex flex-wrap gap-2 px-3">
              {["All", "Reports", "Blog", "Webinars", "Case Studies", "Documentation"].map((category) => (
                <button
                  key={category}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-[#2f5e53] hover:bg-[#166b5f] hover:text-white transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 rounded-full border border-green-200 bg-white w-64 focus:outline-none focus:ring-2 focus:ring-[#166b5f]"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#4b5563]" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      {featuredResource && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-white to-[#f5fbf7] rounded-3xl overflow-hidden shadow-xl border border-green-200/50">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#ffe0f0] text-[#b14562] px-3 py-1 rounded-full text-xs font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Featured Resource
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#145c4f] mt-4 mb-3">
                    {featuredResource.title}
                  </h2>
                  <p className="text-[#2f5e53] mb-4 leading-relaxed">
                    {featuredResource.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#4b5563]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredResource.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {featuredResource.readTime}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={featuredResource.link}
                      className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0f5549] transition"
                    >
                      Download Report <Download className="w-4 h-4" />
                    </Link>
                    <Link
                      href={featuredResource.link}
                      className="inline-flex items-center gap-2 border-2 border-[#166b5f] text-[#166b5f] px-6 py-2.5 rounded-full font-semibold hover:bg-[#166b5f]/10 transition"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#c5e5d9] to-[#b8dfd0] p-10 flex items-center justify-center">
                  <div className="text-7xl">{featuredResource.icon}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Resources Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#145c4f]">Latest Resources</h2>
            <Link href="/resources/all" className="text-[#166b5f] font-semibold hover:text-[#b1536e] transition inline-flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherResources.slice(0, 9).map((resource) => {
              const config = typeConfig[resource.type];
              return (
                <Link
                  key={resource.id}
                  href={resource.link}
                  className="bg-white/95 rounded-2xl overflow-hidden shadow-md border border-green-200/30 hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bgColor} ${config.textColor}`}>
                        {config.icon}
                        {config.label}
                      </span>
                      <span className="text-xs text-[#4b5563]">{resource.date}</span>
                    </div>
                    <div className="text-3xl mb-3">{resource.icon}</div>
                    <h3 className="font-bold text-[#0a2f2a] mb-2 group-hover:text-[#166b5f] transition">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-[#2f5e53] mb-4 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#4b5563] flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {resource.readTime}
                      </span>
                      <span className="text-[#166b5f] font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA: Newsletter */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#c5e5d9] to-[#edf7f1] rounded-3xl p-8 md:p-12 text-center">
            <Mail className="w-12 h-12 text-[#166b5f] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e5a4d] mb-3">
              Get weekly threat intelligence
            </h2>
            <p className="text-[#2f5e53] max-w-lg mx-auto mb-6">
              Subscribe to our newsletter for the latest African cyber threat landscape updates, delivered every Tuesday.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#166b5f]"
                required
              />
              <button
                type="submit"
                className="bg-[#b1536e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9a4560] transition"
              >
                Subscribe →
              </button>
            </form>
            <p className="text-xs text-[#4b5563] mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Stats / Trust Indicators */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#166b5f]">300+</div>
              <div className="text-sm text-[#2f5e53]">Organisations Secured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#166b5f]">99.7%</div>
              <div className="text-sm text-[#2f5e53]">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#166b5f]">50+</div>
              <div className="text-sm text-[#2f5e53]">Threat Reports Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#166b5f]">15k+</div>
              <div className="text-sm text-[#2f5e53]">Newsletter Subscribers</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}