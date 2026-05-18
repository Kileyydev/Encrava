"use client";

import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  // accordion states (mobile only)
  const [companyOpen, setCompanyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="container">

          {/* GRID */}
          <div className="grid">

            {/* BRAND */}
            <div className="brand">
              <div className="logo">
                <img
                  src="/images/logos/greenlogo.png"
                  alt="Encrava Logo"
                  className="logo-img"
                />
              </div>

              <p className="text">
                Securing Africa’s digital future through intelligence-driven cybersecurity
                and AI-powered protection systems.
              </p>
            </div>

            {/* COMPANY */}
            <div className="section">
              <button
                className="mobile-title"
                onClick={() => setCompanyOpen(!companyOpen)}
              >
                Company <span>{companyOpen ? "−" : "+"}</span>
              </button>

              <div className={`links ${companyOpen ? "open" : ""}`}>
                <a>Home</a>
                <a>Services</a>
                <a>Products</a>
                <a>About</a>
              </div>
            </div>

            {/* CONTACT */}
            <div className="section">
              <button
                className="mobile-title"
                onClick={() => setContactOpen(!contactOpen)}
              >
                Contact <span>{contactOpen ? "−" : "+"}</span>
              </button>

              <div className={`links ${contactOpen ? "open" : ""}`}>
                <div className="item"><Mail size={14} /> sales@encrava.africa</div>
                <div className="item"><Phone size={14} /> +254 700 000 000</div>
                <div className="item"><MapPin size={14} /> Nairobi, Kenya</div>
              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="divider" />

          {/* BOTTOM */}
          <div className="bottom">
            © {new Date().getFullYear()} Encrava Africa Ltd. All rights reserved.
          </div>

        </div>

        {/* FLOAT BUTTON */}
        <button className="floating" onClick={() => setOpen(true)}>
          <MessageSquare size={16} />
          Leave a Message
        </button>
      </footer>

      {/* MODAL */}
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Send a Message</h3>

            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Message..." rows={4} />

            <button className="send">Send</button>
            <button className="close" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .footer {
          background: #166b5f;
          padding: clamp(28px, 4vw, 60px) 0 18px;
          position: relative;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 0 clamp(16px, 3vw, 24px);
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2vw, 28px);
        }

        /* BRAND */
        .logo-img {
          height: clamp(70px, 6vw, 98px);
          width: auto;
          object-fit: contain;
          filter: brightness(1.1) contrast(1.05);
        }

        .text {
          font-size: clamp(12px, 1vw, 13px);
          margin-top: 10px;
          color: white;
          opacity: 0.95;
          line-height: 1.5;
        }

        /* LINKS */
        h4 {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 10px;
          color: white;
        }

        a {
          display: block;
          font-size: 13px;
          margin-bottom: 6px;
          color: white;
          cursor: pointer;
          opacity: 0.9;
        }

        a:hover {
          opacity: 1;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 6px;
          color: white;
        }

        /* DIVIDER */
        .divider {
          height: 1px;
          background: black;
          margin: 18px 0 10px;
          opacity: 0.3;
        }

        .bottom {
          text-align: center;
          font-size: 12px;
          color: white;
          opacity: 0.9;
        }

        /* FLOAT BUTTON */
        .floating {
          position: absolute;
          right: 18px;
          top: -16px;

          background: #000;
          color: white;
          border: none;

          padding: 10px 14px;
          border-radius: 999px;

          display: flex;
          align-items: center;
          gap: 6px;

          font-size: 12px;
          font-weight: 600;

          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          cursor: pointer;
        }

        /* MODAL */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal {
          background: white;
          width: min(340px, 90%);
          padding: 16px;
          border-radius: 12px;
        }

        input, textarea {
          width: 100%;
          margin-top: 10px;
          padding: 8px;
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 10px;
          font-size: 12px;
        }

        .send {
          width: 100%;
          margin-top: 10px;
          background: black;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 10px;
        }

        .close {
          width: 100%;
          margin-top: 6px;
          background: transparent;
          border: none;
          font-size: 12px;
        }

        /* ================= MID SCREENS ================= */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ================= MOBILE ACCORDION ================= */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .section {
            border-bottom: 1px solid rgba(255,255,255,0.15);
            padding-bottom: 10px;
          }

          .mobile-title {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            background: transparent;
            border: none;

            color: white;
            font-size: 13px;
            font-weight: 700;
            padding: 10px 0;
            cursor: pointer;
          }

          .links {
            max-height: 0;
            overflow: hidden;
            transition: 0.3s ease;
          }

          .links.open {
            max-height: 300px;
          }
        }
      `}</style>
    </>
  );
}