// app/resources/page.tsx
import Link from "next/link";
import { 
  Search, 
  Download, 
  Calendar, 
  Clock, 
  ArrowRight, 
  FileText, 
  Video, 
  BookOpen, 
  Briefcase,
  ChevronRight,
  Mail,
  Newspaper,
  TrendingUp,
  Shield,
  Radar
} from "lucide-react";
import Footer from "../components/home/Footer";
import TopNavBar from "../components/home/Navbar";

// Resource type definition
interface Resource {
  id: string;
  title: string;
  type: "report" | "blog" | "webinar" | "case" | "doc";
  description: string;
  date: string;
  readTime?: string;
  duration?: string;
  icon: React.ReactNode;
  featured?: boolean;
  link: string;
  tags: string[];
}

const resources: Resource[] = [
  {
    id: "state-of-cybersecurity-east-africa-2026",
    title: "The State of Cybersecurity in East Africa 2026",
    type: "report",
    description: "An in-depth analysis of emerging threats, M-Pesa fraud trends, SIM-swap broker activity, and nation-state actors targeting Kenya, Uganda, Tanzania, and Rwanda.",
    date: "April 2026",
    readTime: "25 min read",
    icon: <TrendingUp className="w-6 h-6" />,
    featured: true,
    link: "/resources/reports/state-of-cybersecurity-east-africa-2026",
    tags: ["Threat Intelligence", "M-Pesa", "East Africa"]
  },
  {
    id: "m-pesa-fraud-trends-kenya-2026",
    title: "M-Pesa Fraud Trends in Kenya 2026",
    type: "report",
    description: "Analysis of 500+ fraud campaigns targeting mobile money users, including SIM-swap patterns and phishing techniques.",
    date: "March 2026",
    readTime: "18 min read",
    icon: <Shield className="w-6 h-6" />,
    link: "/resources/reports/mpesa-fraud-trends-2026",
    tags: ["M-Pesa", "Fraud", "Mobile Money"]
  },
  {
    id: "kiswahili-phishing-emerging-threat",
    title: "Kiswahili Phishing: The Emerging Threat",
    type: "blog",
    description: "How attackers are using local languages to bypass detection — and what your organisation can do about it.",
    date: "February 2026",
    readTime: "8 min read",
    icon: <BookOpen className="w-6 h-6" />,
    link: "/resources/blog/kiswahili-phishing-emerging-threat",
    tags: ["Phishing", "Kiswahili", "NLP"]
  },
  {
    id: "securing-kenyan-government-digital-infrastructure",
    title: "Securing Kenyan Government Digital Infrastructure",
    type: "webinar",
    description: "On-demand webinar with KE-CIRT/CC on protecting eCitizen, KRA iTax, and county government systems.",
    date: "January 2026",
    duration: "45 min",
    icon: <Video className="w-6 h-6" />,
    link: "/resources/webinars/securing-government-infrastructure",
    tags: ["Government", "eCitizen", "KE-CIRT"]
  },
  {
    id: "tier-1-bank-stops-sim-swap-fraud",
    title: "How a Tier-1 Kenyan Bank Stopped SIM-Swap Fraud",
    type: "case",
    description: "Case study: Real-time threat intelligence in action, preventing over KES 50M in potential losses.",
    date: "December 2025",
    readTime: "12 min read",
    icon: <Briefcase className="w-6 h-6" />,
    link: "/resources/case-studies/tier1-bank-sim-swap-fraud",
    tags: ["Case Study", "Banking", "SIM-Swap"]
  },
  {
    id: "encrava-shield-api-integration-guide",
    title: "Encrava Shield API Integration Guide",
    type: "doc",
    description: "Technical documentation for Microsoft 365, Google Workspace, and custom SIEM integration.",
    date: "November 2025",
    readTime: "15 min read",
    icon: <FileText className="w-6 h-6" />,
    link: "/resources/docs/shield-api-integration",
    tags: ["API", "Integration", "Technical"]
  },
  {
    id: "dark-web-monitoring-african-organisations",
    title: "Dark Web Monitoring for African Organisations",
    type: "report",
    description: "What Kenyan credentials are selling for on dark web markets — and how to protect your organisation.",
    date: "October 2025",
    readTime: "20 min read",
    icon: <Radar className="w-6 h-6" />,
    link: "/resources/reports/dark-web-monitoring-africa",
    tags: ["Dark Web", "Credentials", "Monitoring"]
  },
  {
    id: "bec-attacks-targeting-procurement-teams",
    title: "BEC Attacks Targeting Procurement Teams",
    type: "blog",
    description: "How to protect against CEO fraud and invoice scams targeting Kenyan corporates.",
    date: "September 2025",
    readTime: "6 min read",
    icon: <BookOpen className="w-6 h-6" />,
    link: "/resources/blog/bec-attacks-procurement",
    tags: ["BEC", "CEO Fraud", "Email Security"]
  },
  {
    id: "ngo-cyber-resilience-east-africa",
    title: "NGO Cyber Resilience in East Africa",
    type: "case",
    description: "How a regional NGO reduced phishing risk by 94% with Encrava Shield.",
    date: "July 2025",
    readTime: "10 min read",
    icon: <Briefcase className="w-6 h-6" />,
    link: "/resources/case-studies/ngo-cyber-resilience",
    tags: ["NGO", "Phishing", "Non-profit"]
  },
  {
    id: "encrava-intel-api-documentation",
    title: "Encrava Intel API Documentation",
    type: "doc",
    description: "RESTful API reference for STIX 2.1 and TAXII 2.1 integration with your SIEM or SOAR.",
    date: "June 2025",
    readTime: "20 min read",
    icon: <FileText className="w-6 h-6" />,
    link: "/resources/docs/intel-api-reference",
    tags: ["API", "STIX", "TAXII"]
  },
  {
    id: "mobile-money-fraud-prevention-webinar",
    title: "Mobile Money Fraud Prevention Strategies",
    type: "webinar",
    description: "Expert panel discussion on protecting Fintech platforms from emerging fraud techniques.",
    date: "May 2025",
    duration: "60 min",
    icon: <Video className="w-6 h-6" />,
    link: "/resources/webinars/mobile-money-fraud-prevention",
    tags: ["Fintech", "Mobile Money", "Fraud"]
  }
];

const typeConfig = {
  report: {
    label: "Threat Report",
    color: "bg-[#166b5f]/10 text-[#166b5f]",
    icon: <TrendingUp className="w-4 h-4" />
  },
  blog: {
    label: "Blog Post",
    color: "bg-[#ffb3c6]/20 text-[#b1536e]",
    icon: <BookOpen className="w-4 h-4" />
  },
  webinar: {
    label: "Webinar",
    color: "bg-[#2b9a7a]/10 text-[#2b9a7a]",
    icon: <Video className="w-4 h-4" />
  },
  case: {
    label: "Case Study",
    color: "bg-[#1e3a5f]/10 text-[#1e3a5f]",
    icon: <Briefcase className="w-4 h-4" />
  },
  doc: {
    label: "Documentation",
    color: "bg-[#d45a7a]/10 text-[#d45a7a]",
    icon: <FileText className="w-4 h-4" />
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

      {/* Featured Resource */}
      {featuredResource && (
        <section className="pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-white to-[#f5fbf7] rounded-3xl overflow-hidden shadow-xl border border-green-200/30">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${typeConfig[featuredResource.type].color} mb-4`}>
                    {typeConfig[featuredResource.type].icon}
                    <span>FEATURED — {typeConfig[featuredResource.type].label}</span>
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#145c4f] mb-4">
                    {featuredResource.title}
                  </h2>
                  <p className="text-[#2f5e53] mb-6 leading-relaxed">
                    {featuredResource.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#4b5563]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredResource.date}
                    </span>
                    {featuredResource.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredResource.readTime}
                      </span>
                    )}
                    {featuredResource.duration && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredResource.duration}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredResource.tags.map(tag => (
                      <span key={tag} className="bg-[#e8f3ef] text-[#166b5f] text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={featuredResource.link}
                    className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition"
                  >
                    Download Report
                    <Download className="w-4 h-4" />
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-[#c5e5d9] to-[#b8dfd0] rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-[#0e5a4d] font-medium">48 pages of actionable insights</p>
                    <p className="text-[#0e5a4d] text-sm">Free download — no email required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Resource Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#145c4f]">Latest Resources</h2>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-10 pr-4 py-2 rounded-full border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#166b5f] w-64"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#4b5563]" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherResources.map((resource) => (
              <Link 
                key={resource.id}
                href={resource.link}
                className="group bg-white/95 rounded-2xl overflow-hidden shadow-md border border-green-200/30 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{resource.icon}</div>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${typeConfig[resource.type].color}`}>
                      {typeConfig[resource.type].icon}
                      <span>{typeConfig[resource.type].label}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a2f2a] mb-2 group-hover:text-[#166b5f] transition">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-[#2f5e53] mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#4b5563]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {resource.date}
                    </span>
                    {resource.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {resource.readTime}
                      </span>
                    )}
                    {resource.duration && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {resource.duration}
                      </span>
                    )}
                  </div>
                </div>
                <div className="px-6 py-3 border-t border-green-100 bg-[#f9fdfb] flex items-center justify-between text-sm">
                  <span className="text-[#166b5f] font-medium">Read more</span>
                  <ArrowRight className="w-4 h-4 text-[#166b5f] group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#145c4f] text-center mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(typeConfig).map(([key, config]) => (
              <Link 
                key={key}
                href={`/resources/category/${key}`}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition ${config.color} hover:opacity-80`}
              >
                {config.icon}
                {config.label}s
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#c5e5d9] to-[#edf7f1] rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
              <Mail className="w-8 h-8 text-[#b1536e]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e5a4d] mb-4">
              Get weekly threat intelligence
            </h2>
            <p className="text-[#2f5e53] max-w-lg mx-auto mb-6">
              Subscribe to our newsletter for the latest African cyber threat landscape updates, delivered every Tuesday.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#b1536e]"
              />
              <button className="bg-[#b1536e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9a4560] transition">
                Subscribe →
              </button>
            </div>
            <p className="text-xs text-[#4b5563] mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}