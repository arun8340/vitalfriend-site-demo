"use client";

import { useState } from "react";
import s from "./contact.module.css";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phone: string;
  role: string;
  subject: string;
  message: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "",
    phone: "",
    role: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    const errorKey = field === "phoneCode" ? "phone" : field as keyof Errors;
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
    }
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) {
      e.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    if (!form.phoneCode.trim()) e.phone = "Country code is required";
    else if (!/^\+\d{1,4}$/.test(form.phoneCode.trim())) e.phone = "Enter a valid country code (e.g. +1)";
    else if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[\d\s\-().]+$/.test(form.phone.trim())) e.phone = "Phone number must contain only digits";
    else if (form.phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number";
    if (!form.role) e.role = "Please select an option";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <p style={{ fontSize: 20, fontWeight: 600, color: "#111827", marginBottom: 8 }}>
          Message sent!
        </p>
        <p style={{ fontSize: 15, color: "#374151" }}>
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className={s.formBody} onSubmit={handleSubmit} noValidate>
      <div className={s.formRow}>
        <div className={s.formGroup}>
          <label className={s.formLabel}>
            First Name <span>*</span>
          </label>
          <input
            type="text"
            className={`${s.formInput}${errors.firstName ? ` ${s.inputError}` : ""}`}
            placeholder="Input First Name"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
          {errors.firstName && <span className={s.errorMsg}>{errors.firstName}</span>}
        </div>
        <div className={s.formGroup}>
          <label className={s.formLabel}>
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            className={`${s.formInput}${errors.lastName ? ` ${s.inputError}` : ""}`}
            placeholder="Input last Name"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
          {errors.lastName && <span className={s.errorMsg}>{errors.lastName}</span>}
        </div>
      </div>

      <div className={s.formRow}>
        <div className={s.formGroup}>
          <label className={s.formLabel}>
            Email Address <span>*</span>
          </label>
          <input
            type="email"
            className={`${s.formInput}${errors.email ? ` ${s.inputError}` : ""}`}
            placeholder="john.doe@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <span className={s.errorMsg}>{errors.email}</span>}
        </div>
        <div className={s.formGroup}>
          <label className={s.formLabel}>
            Phone Number <span>*</span>
          </label>
          <div className={`${s.phoneField}${errors.phone ? ` ${s.inputError}` : ""}`}>
            <input
              type="text"
              className={s.phonePrefixInput}
              placeholder="+00"
              value={form.phoneCode}
              onChange={(e) => update("phoneCode", e.target.value)}
              maxLength={5}
            />
            <input
              type="tel"
              className={s.phoneInput}
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          {errors.phone && <span className={s.errorMsg}>{errors.phone}</span>}
        </div>
      </div>

      <div className={s.formGroup}>
        <label className={s.formLabel}>
          I am a ... <span>*</span>
        </label>
        <select
          className={`${s.formSelect}${form.role ? ` ${s.selectChosen}` : ""}${errors.role ? ` ${s.inputError}` : ""}`}
          value={form.role}
          onChange={(e) => update("role", e.target.value)}
        >
          <option value="" disabled>
            Family Member / Caregiver
          </option>
          <option value="family">Family Member / Caregiver</option>
          <option value="professional">Healthcare Professional</option>
          <option value="facility">Facility Administrator</option>
          <option value="other">Other</option>
        </select>
        {errors.role && <span className={s.errorMsg}>{errors.role}</span>}
      </div>

      <div className={s.formGroup}>
        <label className={s.formLabel}>
          Subject <span>*</span>
        </label>
        <input
          type="text"
          className={`${s.formInput}${errors.subject ? ` ${s.inputError}` : ""}`}
          placeholder="How can we help you?"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
        />
        {errors.subject && <span className={s.errorMsg}>{errors.subject}</span>}
      </div>

      <div className={s.formGroup}>
        <label className={s.formLabel}>
          Messages <span>*</span>
        </label>
        <textarea
          className={`${s.formTextarea}${errors.message ? ` ${s.inputError}` : ""}`}
          placeholder="Tell us more about your Inquiries"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message && <span className={s.errorMsg}>{errors.message}</span>}
      </div>

      <button type="submit" className={s.submitBtn}>
        Send Message
      </button>
    </form>
  );
}
