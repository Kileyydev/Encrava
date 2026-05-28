// app/resources/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Download, 
  Mail, 
  FileText,
  Video,
  BookOpen,
  Newspaper,
  Briefcase,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";
import Footer from "../components/home/Footer";
import TopNavBar from "../components/home/Navbar";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter resources
  const filteredResources = resources.filter(r => 
    (activeCategory === "all" || r.type === activeCategory) &&
    (r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     r.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const visibleResources = filteredResources.slice(0, 6);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all", name: "All Resources", icon: <FileText className="w-4 h-4" /> },
    { id: "report", name: "Threat Reports", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "guide", name: "Guides & Whitepapers", icon: <BookOpen className="w-4 h-4" /> },
    { id: "webinar", name: "Webinars", icon: <Video className="w-4 h-4" /> },
    { id: "blog", name: "Blog Posts", icon: <Newspaper className="w-4 h-4" /> },
    { id: "case", name: "Case Studies", icon: <Briefcase className="w-4 h-4" /> }
  ];

  const getResourceTypeStyles = (type: string) => {
    const styles: Record<string, string> = {
      report: "bg-[#166b5f]/10 text-[#166b5f]",
      guide: "bg-[#b1536e]/10 text-[#b1536e]",
      webinar: "bg-[#ffb3c6]/20 text-[#b14562]",
      blog: "bg-[#2b9a7a]/10 text-[#2b9a7a]",
      case: "bg-[#1e4a42]/10 text-[#1e4a42]"
    };
    return styles[type] || "bg-gray-100 text-gray-600";
  };

  const getResourceTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      report: "Threat Report",
      guide: "Guide",
      webinar: "Webinar",
      blog: "Blog Post",
      case: "Case Study"
    };
    return labels[type] || type;
  };

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
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#166b5f] font-semibold">
                Knowledge Centre
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[#0f172a]">
                Cybersecurity{" "}
                <span className="text-[#166b5f]">Resources</span>
              </h1>
              <div className="w-24 h-1 bg-[#166b5f] mx-auto mt-6" />
              <p className="mt-7 text-[15px] leading-8 text-slate-600 max-w-xl mx-auto">
                Threat intelligence reports, expert guides, webinars, and insights tailored to the African threat landscape.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto mt-10">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-black/10 rounded-full text-sm focus:outline-none focus:border-[#166b5f] focus:ring-1 focus:ring-[#166b5f]/20 text-slate-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY TABS */}
        <section className="pb-8">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-[#166b5f] text-white"
                      : "bg-white border border-black/10 text-slate-600 hover:border-[#166b5f] hover:text-[#166b5f]"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED RESOURCE */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="relative bg-white border border-black/5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] p-8 md:p-10">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top_right,#166b5f,transparent_40%)]" />
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-1 bg-[#166b5f] text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                    🔥 Featured Resource
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
                    {featuredResource.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredResource.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredResource.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredResource.readTime}</span>
                  </div>
                  <Link
                    href={`/resources/${featuredResource.id}`}
                    className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all hover:gap-3"
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

        {/* RESOURCES GRID */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            {filteredResources.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500">No resources found. Try adjusting your search.</p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 text-[#166b5f] underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(showAll ? filteredResources : filteredResources.slice(0, 6)).map((resource) => (
                    <div
                      key={resource.id}
                      className="group bg-white border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1"
                    >
                      <div className="text-4xl mb-4">{resource.icon}</div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${getResourceTypeStyles(resource.type)}`}>
                          {getResourceTypeLabel(resource.type)}
                        </span>
                        {resource.popular && (
                          <span className="text-xs text-[#b1536e] font-semibold">⭐ Popular</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#166b5f] transition">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-black/5">
                        <div className="flex gap-3 text-xs text-slate-500">
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
                  ))}
                </div>

                {/* Load More Button */}
                {filteredResources.length > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="border border-[#166b5f] text-[#166b5f] px-8 py-3 rounded-full font-semibold hover:bg-[#166b5f] hover:text-white transition-all duration-200"
                    >
                      {showAll ? "Show Less" : `Load More Resources (${filteredResources.length - 6} more) →`}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="py-16 bg-slate-50/30">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a]">Stay ahead of African threats</h2>
            <div className="w-16 h-0.5 bg-[#166b5f] mx-auto mt-3 mb-6" />
            <p className="text-slate-600 mb-8">
              Subscribe to receive weekly threat briefings, new report releases, and expert insights directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 bg-white border border-black/10 rounded-full text-sm focus:outline-none focus:border-[#166b5f] focus:ring-1 focus:ring-[#166b5f]/20"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#166b5f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0f5549] transition-all"
              >
                Subscribe <Mail className="w-4 h-4" />
              </button>
            </form>
            <p className="text-slate-400 text-xs mt-4">
              No spam. Unsubscribe anytime. Read our Privacy Policy.
            </p>
          </div>
        </section>

        {/* POPULAR TOPICS */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <h3 className="text-center text-[#0f172a] font-semibold mb-6">Explore by Topic</h3>
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
              ].map((topic) => (
                <Link
                  key={topic}
                  href={`/resources/topic/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-white border border-black/10 rounded-full text-sm text-slate-600 hover:bg-[#166b5f] hover:text-white hover:border-[#166b5f] transition-all duration-200"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#0f172a]">Need expert guidance?</h2>
            <p className="text-slate-600 mt-4 mb-8">
              Our team can help you understand the threat landscape and implement the right security measures for your organisation.
            </p>
            <Link 
              href="/consultation" 
              className="inline-flex items-center gap-2 bg-[#166b5f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0f5549] transition-all hover:gap-3"
            >
              Book a Consultation <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}