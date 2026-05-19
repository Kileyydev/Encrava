// app/resources/page.tsx
import Link from "next/link";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Download, 
  Mail, 
  ChevronRight,
  FileText,
  Video,
  BookOpen,
  Newspaper,
  Briefcase,
  TrendingUp,
  Filter
} from "lucide-react";
import Footer from "../components/home/Footer";
import TopNavBar from "../components/home/Navbar";

export default function ResourcesPage() {
  // Resource data
  const resources = [
    {
      id: 1,
      title: "M-Pesa Fraud Trends Report 2026",
      description: "Analysis of emerging SIM-swap techniques, fake USSD pages, and social engineering tactics targeting mobile money users in Kenya.",
      type: "report",
      icon: "📱",
      date: "April 2026",
      readTime: "15 min read",
      popular: true,
      featured: false
    },
    {
      id: 2,
      title: "Kiswahili Phishing: The Growing Threat",
      description: "How attackers are using local languages to bypass traditional detection. Includes real examples and defence strategies.",
      type: "report",
      icon: "📧",
      date: "March 2026",
      readTime: "12 min read",
      popular: true,
      featured: false
    },
    {
      id: 3,
      title: "BEC Defence Guide for African Finance Teams",
      description: "Practical steps to identify and stop business email compromise attacks targeting procurement and finance departments.",
      type: "guide",
      icon: "📘",
      date: "February 2026",
      readTime: "20 min read",
      popular: false,
      featured: false
    },
    {
      id: 4,
      title: "Webinar: Dark Web Monitoring for African Orgs",
      description: "Recording of live session covering how to monitor East African dark web markets for leaked credentials.",
      type: "webinar",
      icon: "🎥",
      date: "January 2026",
      readTime: "45 min watch",
      popular: false,
      featured: false
    },
    {
      id: 5,
      title: "KDPA Compliance: A Cybersecurity Perspective",
      description: "Understanding the Kenya Data Protection Act requirements and how to align your security posture.",
      type: "guide",
      icon: "⚖️",
      date: "December 2025",
      readTime: "18 min read",
      popular: true,
      featured: false
    },
    {
      id: 6,
      title: "Case Study: Bank Fraud Prevention with Encrava Intel",
      description: "How a tier-1 Kenyan bank reduced fraud incidents by 67% using Africa-specific threat intelligence.",
      type: "case",
      icon: "🏦",
      date: "November 2025",
      readTime: "10 min read",
      popular: false,
      featured: true
    },
    {
      id: 7,
      title: "Safaricom & Airtel Sender ID Spoofing Analysis",
      description: "Technical deep-dive into how attackers impersonate mobile network operators and how to detect it.",
      type: "report",
      icon: "📡",
      date: "October 2025",
      readTime: "14 min read",
      popular: false,
      featured: false
    },
    {
      id: 8,
      title: "Blog: 5 Signs Your Organisation is Being Targeted",
      description: "Early warning indicators of APT activity and cybercriminal reconnaissance in East Africa.",
      type: "blog",
      icon: "✍️",
      date: "September 2025",
      readTime: "6 min read",
      popular: true,
      featured: false
    },
    {
      id: 9,
      title: "Ransomware in Africa: A Growing Crisis",
      description: "Webinar recording with incident responders covering recent attacks and prevention strategies.",
      type: "webinar",
      icon: "🦠",
      date: "August 2025",
      readTime: "50 min watch",
      popular: false,
      featured: false
    }
  ];

  const featuredResource = resources.find(r => r.featured) || resources[0];

  // Category badges configuration
  const categories = [
    { id: "all", name: "All Resources", icon: <FileText className="w-4 h-4" /> },
    { id: "report", name: "Threat Reports", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "guide", name: "Guides & Whitepapers", icon: <BookOpen className="w-4 h-4" /> },
    { id: "webinar", name: "Webinars", icon: <Video className="w-4 h-4" /> },
    { id: "blog", name: "Blog Posts", icon: <Newspaper className="w-4 h-4" /> },
    { id: "case", name: "Case Studies", icon: <Briefcase className="w-4 h-4" /> }
  ];

  // Resource type styling
  const getResourceTypeStyles = (type: string) => {
    const styles = {
      report: "bg-[#166b5f]/10 text-[#166b5f]",
      guide: "bg-[#b1536e]/10 text-[#b1536e]",
      webinar: "bg-[#ffb3c6]/20 text-[#b14562]",
      blog: "bg-[#2b9a7a]/10 text-[#2b9a7a]",
      case: "bg-[#1e4a42]/10 text-[#1e4a42]"
    };
    return styles[type as keyof typeof styles] || "bg-gray-100 text-gray-600";
  };

  const getResourceTypeLabel = (type: string) => {
    const labels = {
      report: "Threat Report",
      guide: "Guide",
      webinar: "Webinar",
      blog: "Blog Post",
      case: "Case Study"
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#eef6f0]">
      <TopNavBar />

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="bg-[#ffe0f0] text-[#b34e6b] px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-6">
              📚 Knowledge Centre
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#166b5f] to-[#2b9a7a] bg-clip-text text-transparent mb-6">
              Cybersecurity Resources<br />for African Organisations
            </h1>
            <p className="text-lg text-[#2f5e53] leading-relaxed">
              Threat intelligence reports, expert guides, webinars, and insights tailored to the African threat landscape.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b8f83]" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 border border-green-200 focus:outline-none focus:border-[#166b5f] focus:ring-2 focus:ring-[#166b5f]/20 text-[#1e4a42]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-green-200 text-[#1e4a42] hover:bg-[#166b5f] hover:text-white hover:border-[#166b5f] transition-all duration-200 text-sm font-medium"
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resource Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#c5e5d9] to-[#edf7f1] rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-[#b1536e] text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                  🔥 Featured Resource
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e5a4d] mb-4">
                  {featuredResource.title}
                </h2>
                <p className="text-[#2f5e53] mb-6 leading-relaxed">
                  {featuredResource.description}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-[#6b8f83]">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredResource.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredResource.readTime}</span>
                </div>
                <Link
                  href={`/resources/${featuredResource.id}`}
                  className="inline-flex items-center gap-2 bg-[#b1536e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9a4560] transition"
                >
                  Download Free Report <Download className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-center text-7xl">
                {featuredResource.icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.slice(0, 6).map(resource => (
              <div
                key={resource.id}
                className="group bg-white/90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100"
              >
                <div className="h-40 bg-gradient-to-br from-[#d4eaff] to-[#b6e6c9] flex items-center justify-center text-5xl">
                  {resource.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${getResourceTypeStyles(resource.type)}`}>
                      {getResourceTypeLabel(resource.type)}
                    </span>
                    {resource.popular && (
                      <span className="text-xs text-[#b1536e] font-semibold">⭐ Popular</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#145c4f] mb-2 group-hover:text-[#166b5f] transition">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-[#2f5e53] mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-green-100">
                    <div className="flex gap-3 text-xs text-[#6b8f83]">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {resource.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {resource.readTime}</span>
                    </div>
                    <Link
                      href={`/resources/${resource.id}`}
                      className="text-[#166b5f] font-semibold text-sm hover:text-[#b1536e] transition flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="border-2 border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f] hover:text-white transition-all duration-200">
              Load More Resources →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#166b5f] rounded-3xl p-10 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay ahead of African threats
            </h2>
            <p className="text-white/85 mb-8 max-w-md mx-auto">
              Subscribe to receive weekly threat briefings, new report releases, and expert insights directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#ffb3c6]"
                required
              />
              <button
                type="submit"
                className="bg-[#b1536e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#9a4560] transition flex items-center justify-center gap-2"
              >
                Subscribe <Mail className="w-4 h-4" />
              </button>
            </form>
            <p className="text-white/60 text-xs mt-4">
              No spam. Unsubscribe anytime. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics / Categories Footer Section */}
      <section className="py-12 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-[#145c4f] font-semibold mb-6">Explore by Topic</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "M-Pesa Fraud",
              "Kiswahili Phishing",
              "BEC Protection",
              "KDPA Compliance",
              "Dark Web Monitoring",
              "Bank Security",
              "Government Cyber",
              "Fintech Security"
            ].map(topic => (
              <Link
                key={topic}
                href={`/resources/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white/50 rounded-full text-sm text-[#1e4a42] hover:bg-[#ffe0f0] hover:text-[#b14562] transition border border-green-200"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}