"use client";

import { useState } from "react";
import { COUNTRY_CODES } from "@/lib/countryCodes";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
}

const initial: BookingForm = {
  firstName: "", lastName: "", email: "",
  countryCode: "+1", phone: "", message: "",
};

type FormErrors = Partial<Record<keyof BookingForm, string>>;

export default function BookingModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<BookingForm>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const set = (field: keyof BookingForm, value: string) => {
    setForm(p => ({ ...p, [field]: value }));
    setErrors(p => ({ ...p, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setLoading(true);
    try {
      await fetch("/api/book-vital-buddy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          fullPhone: `${form.countryCode} ${form.phone}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setForm(initial);
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/50 px-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
        style={{ padding: "36px 40px" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "48px 32px 40px" }}>
            {/* Glowing green circle */}
            <div style={{ position: "relative", width: 88, height: 88, margin: "0 auto 28px" }}>
              <div style={{
                position: "absolute", inset: -10, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)",
              }} />
              <div style={{
                width: 88, height: 88, borderRadius: "50%",
                background: "linear-gradient(145deg, #4ade80, #16a34a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 20px rgba(34,197,94,0.4)",
                position: "relative",
              }}>
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </div>

            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: 28, fontWeight: 800, color: "#16a34a", marginBottom: 12, letterSpacing: "-0.5px" }}>
              All Set!
            </h2>

            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6b7280", lineHeight: 1.65, marginBottom: 32 }}>
              Your information has been successfully submitted.
              <br />
              We&apos;ll review everything and get back to you shortly.
            </p>

            <button
              onClick={handleClose}
              style={{
                padding: "13px 48px",
                background: "linear-gradient(135deg, #4ade80, #16a34a)",
                color: "white",
                fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600,
                borderRadius: 999, border: "none", cursor: "pointer",
                boxShadow: "0 4px 14px rgba(34,197,94,0.4)",
                letterSpacing: "0.3px",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: 28, fontWeight: 700, color: "#111827", marginBottom: 6 }}>
              Enter Your Details
            </h2>
            <br />

            {/* First + Last Name */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>First Name <span style={{ color: "#E5476C" }}>*</span></label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={e => set("firstName", e.target.value)}
                  style={inputStyle(!!errors.firstName)}
                />
                {errors.firstName && <p style={errStyle}>{errors.firstName}</p>}
              </div>
              <div>
                <label style={labelStyle}>Last Name <span style={{ color: "#E5476C" }}>*</span></label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={e => set("lastName", e.target.value)}
                  style={inputStyle(!!errors.lastName)}
                />
                {errors.lastName && <p style={errStyle}>{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Email Address <span style={{ color: "#E5476C" }}>*</span></label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                value={form.email}
                onChange={e => set("email", e.target.value)}
                style={inputStyle(!!errors.email)}
              />
              {errors.email && <p style={errStyle}>{errors.email}</p>}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Phone Number <span style={{ color: "#E5476C" }}>*</span></label>
              <div style={{
                display: "flex",
                border: `1px solid ${errors.phone ? "#ef4444" : "#e5e7eb"}`,
                borderRadius: 10,
                overflow: "hidden",
              }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", flexShrink: 0 }}>
                  <select
                    value={form.countryCode}
                    onChange={e => set("countryCode", e.target.value)}
                    style={{
                      width: 90,
                      height: 48,
                      padding: "0 28px 0 12px",
                      borderRight: "1px solid #e5e7eb",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      color: "#374151",
                      outline: "none",
                      background: "transparent",
                      appearance: "none",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={`${c.name}-${c.code}`} value={c.code}>{c.code}</option>
                    ))}
                  </select>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ position: "absolute", right: 8, pointerEvents: "none" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={e => set("phone", e.target.value)}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "#111827",
                    outline: "none",
                    background: "transparent",
                  }}
                />
              </div>
              {errors.phone && <p style={errStyle}>{errors.phone}</p>}
            </div>

            {/* Message */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Messages <span style={{ color: "#E5476C" }}>*</span></label>
              <textarea
                rows={4}
                placeholder="Please share anything that will help prepare for our meeting."
                value={form.message}
                onChange={e => set("message", e.target.value)}
                style={{
                  ...inputStyle(!!errors.message),
                  resize: "none",
                  paddingTop: 12,
                  paddingBottom: 12,
                  lineHeight: "1.5",
                }}
              />
              {errors.message && <p style={errStyle}>{errors.message}</p>}
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: "100%",
                background: loading ? "#f0a0b0" : "#E5476C",
                color: "white",
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                padding: "14px",
                borderRadius: 999,
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
            >
              {loading ? "Submitting…" : "Submit Request"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 600,
  color: "#374151",
  marginBottom: 6,
};

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    display: "block",
    width: "100%",
    padding: "12px 16px",
    border: `1px solid ${hasError ? "#ef4444" : "#e5e7eb"}`,
    borderRadius: 10,
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
  };
}

const errStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 12,
  color: "#ef4444",
  marginTop: 4,
};
