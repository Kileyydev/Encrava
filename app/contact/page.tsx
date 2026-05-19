"use client";

import NavBar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  BrainCircuit,
  Globe,
} from "lucide-react";

import { useState } from "react";

export default function ContactPage() {
  const [active, setActive] = useState<"message" | "support" | null>("message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("✅ Message sent successfully! We'll get back to you soon.");
        e.currentTarget.reset();
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />

      <main className="w-full bg-white overflow-hidden">

        {/* HERO */}
        <section className="relative pt-28 md:pt-36 pb-20">

          {/* GLOWS */}
          <div className="absolute -top-30 -left-25 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />
          <div className="absolute -bottom-30 -right-25 w-[320px] h-80 bg-[#166b5f]/10 blur-[120px]" />

          <div className="relative max-w-7xl mx-auto px-5 md:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

              {/* LEFT */}
              <div className="max-w-2xl">

                <p className="text-[11px] uppercase tracking-[0.28em] text-[#166b5f] font-semibold">
                  Contact Encrava
                </p>

                <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-[-0.05em] text-[#0f172a]">
                  Let’s Secure Your{" "}
                  <span className="text-[#166b5f]">
                    Digital Infrastructure.
                  </span>
                </h1>

                <div className="w-24 h-1 bg-[#166b5f] mt-6" />

                <p className="mt-7 text-[15px] leading-8 text-slate-600 max-w-xl">
                  Reach out to Encrava for cybersecurity inquiries, partnerships,
                  product support, threat intelligence, or enterprise protection
                  solutions tailored for Africa.
                </p>


                {/* CONTACT CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">

                  <div className="stat-card">
                    <Mail size={18} />
                    <div>
                      <h3>Email</h3>
                      <p>support@encrava.com</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <Phone size={18} />
                    <div>
                      <h3>Phone</h3>
                      <p>+254 700 000 000</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <MapPin size={18} />
                    <div>
                      <h3>Location</h3>
                      <p>Nairobi, Kenya</p>
                    </div>
                  </div>

                </div>

                {/* EXTRA SECURITY STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">

                  <div className="stat-card">
                    <ShieldCheck size={18} />
                    <div>
                      <h3>KDPA Ready</h3>
                      <p>Compliance-focused security</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <BrainCircuit size={18} />
                    <div>
                      <h3>AI Detection</h3>
                      <p>Real-time threat intelligence</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <Globe size={18} />
                    <div>
                      <h3>Pan-African</h3>
                      <p>Regional cyber protection</p>
                    </div>
                  </div>

                </div>

              </div>

              {/* RIGHT FORM */}
              <div className="w-full">

                <div className="relative bg-white border border-black/5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8">

                  {/* subtle background */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_right,#166b5f,transparent_40%)]" />

                  <div className="relative z-10">

                    {/* HEADER */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-[#166b5f] text-white flex items-center justify-center shrink-0">
                        <Mail size={20} />
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
                          CONTACT ENCRAVA
                        </p>

                        <h2 className="text-2xl font-bold text-[#0f172a]">
                          Send Us a Message
                        </h2>
                      </div>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-6">

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>
                          <label className="label">Full Name</label>

                          <input
                            name="fullName"
                            type="text"
                            placeholder="Your name"
                            className="input"
                            required
                          />
                        </div>

                        <div>
                          <label className="label">Company</label>

                          <input
                            name="company"
                            type="text"
                            placeholder="Organization"
                            className="input"
                          />
                        </div>

                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>
                          <label className="label">Email Address</label>

                          <input
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            className="input"
                            required
                          />
                        </div>

                        <div>
                          <label className="label">Phone Number</label>

                          <input
                            name="phone"
                            type="tel"
                            placeholder="+254..."
                            className="input"
                          />
                        </div>

                      </div>

                      <div>
                        <label className="label">Subject</label>

                        <input
                          name="subject"
                          type="text"
                          placeholder="What would you like to discuss?"
                          className="input"
                          required
                        />
                      </div>

                      <div>
                        <label className="label">Message</label>

                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Tell us more about your inquiry..."
                          className="input resize-none"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="submit-btn"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowUpRight size={18} />
                      </button>

                    </form>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

      {/* STYLES */}
      <style jsx>{`
        .cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(15, 23, 42, 0.12);
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        .cta-btn:hover {
          border-color: #166b5f;
        }

        .cta-btn.active {
          background: #166b5f;
          color: white;
          box-shadow: 0 10px 30px rgba(22, 107, 95, 0.22);
        }

        .icon {
          opacity: 0;
          transform: translateX(-6px);
          transition: 0.3s ease;
        }

        .cta-btn.active .icon {
          opacity: 1;
          transform: translateX(0);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.06);
          padding: 16px;
          min-height: 90px;
        }

        .stat-card svg {
          color: #166b5f;
          flex-shrink: 0;
        }

        .stat-card h3 {
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        .stat-card p {
          font-size: 12px;
          color: #64748b;
          margin-top: 3px;
          line-height: 1.5;
        }

        .label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 10px;
        }

        .input {
          width: 100%;
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.08);
          padding: 14px 16px;
          font-size: 14px;
          color: #0f172a;
          outline: none;
          transition: 0.25s ease;
        }

        .input:focus {
          border-color: #166b5f;
          box-shadow: 0 0 0 4px rgba(22, 107, 95, 0.08);
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #166b5f;
          color: white;
          padding: 15px 18px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 999px;
          transition: 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(22, 107, 95, 0.22);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}