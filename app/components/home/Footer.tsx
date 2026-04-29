"use client";

import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="footer">

        <div className="container">

          {/* GRID */}
          <div className="grid">

            {/* BRAND */}
            <div>
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
            <div>
              <h4>Company</h4>
              <a>Home</a>
              <a>Services</a>
              <a>Products</a>
              <a>About</a>
            </div>

            {/* CONTACT */}
            <div>
              <h4>Contact</h4>

              <div className="item"><Mail size={14} /> sales@encrava.africa</div>
              <div className="item"><Phone size={14} /> +254 700 000 000</div>
              <div className="item"><MapPin size={14} /> Nairobi, Kenya</div>
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

      {/* ================= STYLES ================= */}
      <style jsx>{`

        .footer {
          background: #166B5F;
          padding: 24px 0 18px 0;
          position: relative;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 0 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ================= LOGO ================= */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-img {
          height: 98px;
          width: auto;
          object-fit: contain;
          filter: brightness(1.1) contrast(1.05);
        }

        .text {
          font-size: 12.5px;
          margin-top: 10px;
          color: white;
          opacity: 0.95;
          line-height: 1.5;
        }

        h4 {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 10px;
          color: black;
        }

        a {
          display: block;
          font-size: 12.5px;
          margin-bottom: 6px;
          color: white;
          cursor: pointer;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          margin-bottom: 6px;
          color: white;
        }

        .divider {
          height: 1px;
          background: black;
          margin: 14px 0 8px 0;
          opacity: 0.4;
        }

        .bottom {
          text-align: center;
          font-size: 12px;
          margin: 0;
          color: white;
          opacity: 0.9;
        }

        .floating {
          position: absolute;
          right: 18px;
          top: -16px;

          background: black;
          color: white;
          border: none;

          padding: 9px 13px;
          border-radius: 999px;

          display: flex;
          align-items: center;
          gap: 6px;

          font-size: 12px;
          font-weight: 600;

          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          cursor: pointer;
        }

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
          width: 320px;
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

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>
    </>
  );
}