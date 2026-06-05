"use client";

import { useState } from "react";
import s from "./buddy.module.css";

const TOTAL_STEPS = 6;

const steps = [
  { label: "Personal", subtitle: "Your basic information" },
  { label: "Address", subtitle: "Where you live" },
  { label: "Medical", subtitle: "Health history" },
  { label: "Insurance", subtitle: "Coverage details" },
  { label: "Documents", subtitle: "Upload files" },
  { label: "Review", subtitle: "Confirm & submit" },
];

// ── Form data shape ──────────────────────────────────────────────────────────
interface FormData {
  firstName: string; lastName: string; dateOfBirth: string;
  email: string; phone: string;
  street: string; city: string; state: string; zip: string;
  primaryCarePhysician: string; medicalConditions: string;
  medications: string; allergies: string;
  insuranceProvider: string; policyNumber: string; groupNumber: string;
}

const initialForm: FormData = {
  firstName: "", lastName: "", dateOfBirth: "", email: "", phone: "",
  street: "", city: "", state: "", zip: "",
  primaryCarePhysician: "", medicalConditions: "", medications: "", allergies: "",
  insuranceProvider: "", policyNumber: "", groupNumber: "",
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateStep(step: number, form: FormData): FormErrors {
  const e: FormErrors = {};
  if (step === 1) {
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.dateOfBirth) e.dateOfBirth = "Date of birth is required";
    if (!form.email.trim()) e.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
  }
  if (step === 2) {
    if (!form.street.trim()) e.street = "Street address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.state.trim()) e.state = "State is required";
    if (!form.zip.trim()) e.zip = "ZIP is required";
  }
  if (step === 4) {
    if (!form.insuranceProvider.trim()) e.insuranceProvider = "Insurance provider is required";
    if (!form.policyNumber.trim()) e.policyNumber = "Policy number is required";
  }
  return e;
}

const errStyle: React.CSSProperties = { color: "#ef4444", fontSize: "12px", marginTop: "4px" };

// ── Icons ────────────────────────────────────────────────────────────────────
const PersonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="white" />
  </svg>
);
const PersonIconDark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const MapPinIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 21V9h6v12M9 9h6M3 9h18" />
  </svg>
);
const HeartIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);
const ShieldIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" />
  </svg>
);
const UploadIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
const CircleCheckIcon = ({ color = "white" }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1L6.6 10.8z" />
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
  </svg>
);
const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ── Step components ──────────────────────────────────────────────────────────
type OnChange = (field: keyof FormData, value: string) => void;

function PersonalStep({ form, onChange, errors }: { form: FormData; onChange: OnChange; errors: FormErrors }) {
  return (
    <div className={s.stepContent}>
      <div className={s.infoBanner}>
        <InfoIcon />
        <span>Please provide your personal information exactly as it appears on your identification documents.</span>
      </div>

      <div className={s.fieldRow}>
        <div className={s.fieldGroup}>
          <label className={s.label}>First Name <span className={s.required}>*</span></label>
          <div className={s.inputWrapper}>
            <UserIcon />
            <input className={s.input} type="text" placeholder="John"
              value={form.firstName} onChange={e => onChange("firstName", e.target.value)} />
          </div>
          {errors.firstName && <p style={errStyle}>{errors.firstName}</p>}
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Last Name <span className={s.required}>*</span></label>
          <div className={s.inputWrapper}>
            <UserIcon />
            <input className={s.input} type="text" placeholder="Doe"
              value={form.lastName} onChange={e => onChange("lastName", e.target.value)} />
          </div>
          {errors.lastName && <p style={errStyle}>{errors.lastName}</p>}
        </div>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Date of Birth <span className={s.required}>*</span></label>
        <div className={s.inputWrapper}>
          <CalendarIcon />
          <input className={s.input} type="date"
            value={form.dateOfBirth} onChange={e => onChange("dateOfBirth", e.target.value)} />
        </div>
        {errors.dateOfBirth ? <p style={errStyle}>{errors.dateOfBirth}</p> : <p className={s.hint}>Must be 18 years or older</p>}
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Email Address <span className={s.required}>*</span></label>
        <div className={s.inputWrapper}>
          <MailIcon />
          <input className={s.input} type="email" placeholder="john.doe@example.com"
            value={form.email} onChange={e => onChange("email", e.target.value)} />
        </div>
        {errors.email ? <p style={errStyle}>{errors.email}</p> : <p className={s.hint}>We&apos;ll send confirmation to this email</p>}
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Phone Number <span className={s.required}>*</span></label>
        <div className={s.inputWrapper}>
          <PhoneIcon />
          <input className={s.input} type="tel" placeholder="(555) 123-4567"
            value={form.phone} onChange={e => onChange("phone", e.target.value)} />
        </div>
        {errors.phone ? <p style={errStyle}>{errors.phone}</p> : <p className={s.hint}>Include area code</p>}
      </div>
    </div>
  );
}

function AddressStep({ form, onChange, errors }: { form: FormData; onChange: OnChange; errors: FormErrors }) {
  return (
    <div className={s.stepContent}>
      <div className={s.infoBanner}>
        <MapPinIcon size={16} />
        <span>Provide your current residential address where you receive mail.</span>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Street Address <span className={s.required}>*</span></label>
        <div className={s.inputWrapper}>
          <BuildingIcon />
          <input className={s.input} type="text" placeholder="123 Main Street, Apt 4B"
            value={form.street} onChange={e => onChange("street", e.target.value)} />
        </div>
        {errors.street && <p style={errStyle}>{errors.street}</p>}
      </div>

      <div className={s.fieldRow3}>
        <div className={s.fieldGroup}>
          <label className={s.label}>City <span className={s.required}>*</span></label>
          <div className={s.inputWrapper}>
            <MapPinIcon size={18} />
            <input className={s.input} type="text" placeholder="San Francisco"
              value={form.city} onChange={e => onChange("city", e.target.value)} />
          </div>
          {errors.city && <p style={errStyle}>{errors.city}</p>}
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>State <span className={s.required}>*</span></label>
          <div className={s.inputWrapperNoIcon}>
            <input className={s.input} type="text" placeholder="California"
              value={form.state} onChange={e => onChange("state", e.target.value)} />
          </div>
          {errors.state && <p style={errStyle}>{errors.state}</p>}
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>ZIP <span className={s.required}>*</span></label>
          <div className={s.inputWrapperNoIcon}>
            <input className={s.input} type="text" placeholder="94101"
              value={form.zip} onChange={e => onChange("zip", e.target.value)} />
          </div>
          {errors.zip && <p style={errStyle}>{errors.zip}</p>}
        </div>
      </div>
    </div>
  );
}

function MedicalStep({ form, onChange }: { form: FormData; onChange: OnChange }) {
  return (
    <div className={s.stepContent}>
      <div className={s.infoBannerPink}>
        <HeartIcon size={16} color="#E15D77" />
        <span>Your medical information helps us provide better care. All information is confidential.</span>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Primary Care Physician</label>
        <div className={s.inputWrapperNoIcon}>
          <input className={s.input} type="text" placeholder="Dr. Jane Smith"
            value={form.primaryCarePhysician} onChange={e => onChange("primaryCarePhysician", e.target.value)} />
        </div>
        <p className={s.hint}>Optional - Name of your regular doctor</p>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Medical Conditions</label>
        <textarea className={s.textarea} rows={4}
          placeholder="Please list any chronic conditions, previous surgeries, or ongoing health issues..."
          value={form.medicalConditions} onChange={e => onChange("medicalConditions", e.target.value)} />
        <p className={s.hint}>Include conditions like diabetes, hypertension, asthma, etc.</p>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Current Medications</label>
        <textarea className={s.textarea} rows={4}
          placeholder="List all medications including dosage (e.g., Lisinopril 10mg daily)..."
          value={form.medications} onChange={e => onChange("medications", e.target.value)} />
        <p className={s.hint}>Include prescription and over-the-counter medications</p>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Allergies</label>
        <textarea className={s.textarea} rows={4}
          placeholder="List any drug allergies, food allergies, or environmental allergies..."
          value={form.allergies} onChange={e => onChange("allergies", e.target.value)} />
        <p className={s.hint}>Include the type of reaction if known</p>
      </div>
    </div>
  );
}

function InsuranceStep({ form, onChange, errors }: { form: FormData; onChange: OnChange; errors: FormErrors }) {
  return (
    <div className={s.stepContent}>
      <div className={s.infoBannerGreen}>
        <ShieldIcon size={16} color="#16a34a" />
        <span>Please have your insurance card ready. You&apos;ll need the information from both sides.</span>
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Insurance Provider <span className={s.required}>*</span></label>
        <div className={s.inputWrapper}>
          <BuildingIcon />
          <input className={s.input} type="text" placeholder="Blue Cross Blue Shield"
            value={form.insuranceProvider} onChange={e => onChange("insuranceProvider", e.target.value)} />
        </div>
        {errors.insuranceProvider ? <p style={errStyle}>{errors.insuranceProvider}</p> : <p className={s.hint}>Company name as shown on your card</p>}
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Policy Number <span className={s.required}>*</span></label>
        <div className={s.inputWrapperNoIcon}>
          <input className={s.input} type="text" placeholder="ABC123456789"
            value={form.policyNumber} onChange={e => onChange("policyNumber", e.target.value)} />
        </div>
        {errors.policyNumber ? <p style={errStyle}>{errors.policyNumber}</p> : <p className={s.hint}>Also called Member ID or Subscriber ID</p>}
      </div>

      <div className={s.fieldGroup}>
        <label className={s.label}>Group Number</label>
        <div className={s.inputWrapperNoIcon}>
          <input className={s.input} type="text" placeholder="GRP789456"
            value={form.groupNumber} onChange={e => onChange("groupNumber", e.target.value)} />
        </div>
        <p className={s.hint}>Optional - If applicable, found on insurance card</p>
      </div>
    </div>
  );
}

function DocumentsStep({ files, setFiles }: { files: File[]; setFiles: (f: File[]) => void }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles([...files, ...Array.from(e.target.files)]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles([...files, ...dropped]);
  };

  const removeFile = (idx: number) => setFiles(files.filter((_, i) => i !== idx));

  return (
    <div className={s.stepContent}>
      <div className={s.infoBannerPurple}>
        <UploadIcon size={16} color="#7c3aed" />
        <div>
          <p className={s.infoBannerTitle}>Upload copies of the following documents (if available):</p>
          <ul className={s.infoBannerList}>
            <li>Insurance card (front and back)</li>
            <li>Photo identification (driver&apos;s license or passport)</li>
            <li>Previous medical records (optional)</li>
          </ul>
        </div>
      </div>

      <label
        className={s.uploadZone}
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          className={s.uploadInput} onChange={handleChange} />
        <UploadIcon size={40} color="#9ca3af" />
        <p className={s.uploadText}>
          <span className={s.uploadLink}>Click to upload</span> or drag and drop
        </p>
        <p className={s.uploadSub}>PDF, JPG, PNG, DOC up to 10MB each</p>
      </label>

      {files.length > 0 && (
        <div className={s.fileList}>
          {files.map((file, i) => (
            <div key={i} className={s.fileItem}>
              <span className={s.fileName}>{file.name}</span>
              <span className={s.fileSize}>{(file.size / 1024).toFixed(0)} KB</span>
              <button className={s.fileRemove} onClick={() => removeFile(i)} type="button">✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Review ───────────────────────────────────────────────────────────────────
function ReviewRow({ label, value, fallback }: { label: string; value?: string; fallback?: string }) {
  const display = value?.trim() || fallback;
  return (
    <div className={s.reviewRow}>
      <span className={s.reviewLabel}>{label}</span>
      {display && (
        <span className={`${s.reviewValue} ${!value?.trim() ? s.reviewValueFallback : ""}`}>
          {display}
        </span>
      )}
    </div>
  );
}

function ReviewSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className={s.reviewCard}>
      <div className={s.reviewCardHeader}>
        <span className={s.reviewCardIcon}>{icon}</span>
        <h3 className={s.reviewCardTitle}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function ReviewStep({ form, files, agreed, setAgreed }: { form: FormData; files: File[]; agreed: boolean; setAgreed: (v: boolean) => void }) {
  const openFile = (file: File) => {
    const url = URL.createObjectURL(file);
    window.open(url, "_blank");
  };
  const fullName = [form.firstName, form.lastName].filter(Boolean).join(" ");
  const fullAddress = [form.city, form.state, form.zip].filter(Boolean).join(", ");

  return (
    <div className={s.stepContent}>
      <div className={s.infoBannerAmber}>
        <InfoIcon />
        <span>Please review all information carefully before submitting. You can go back to edit any section.</span>
      </div>

      <ReviewSection icon={<PersonIconDark />} title="Personal Information">
        <ReviewRow label="Name" value={fullName} fallback="—" />
        <ReviewRow label="Date of Birth" value={form.dateOfBirth} fallback="—" />
        <ReviewRow label="Email" value={form.email} fallback="—" />
        <ReviewRow label="Phone" value={form.phone} fallback="—" />
      </ReviewSection>

      <ReviewSection icon={<MapPinIcon size={24} />} title="Address">
        <ReviewRow label="Street" value={form.street} fallback="—" />
        <ReviewRow label="City / State / ZIP" value={fullAddress} fallback="—" />
      </ReviewSection>

      <ReviewSection icon={<HeartIcon size={24} />} title="Medical History">
        <ReviewRow label="Primary Care Physician" value={form.primaryCarePhysician} fallback="Not provided" />
        <ReviewRow label="Medical Conditions" value={form.medicalConditions} fallback="None listed" />
        <ReviewRow label="Medications" value={form.medications} fallback="None listed" />
        <ReviewRow label="Allergies" value={form.allergies} fallback="None listed" />
      </ReviewSection>

      <ReviewSection icon={<ShieldIcon size={24} />} title="Insurance">
        <ReviewRow label="Provider" value={form.insuranceProvider} fallback="—" />
        <ReviewRow label="Policy Number" value={form.policyNumber} fallback="—" />
        <ReviewRow label="Group Number" value={form.groupNumber} fallback="Not provided" />
      </ReviewSection>

      <ReviewSection icon={<UploadIcon size={24} color="#7c3aed" />} title="Documents">
        {files.length === 0 ? (
          <p className={s.reviewEmpty}>No documents uploaded</p>
        ) : (
          <div className={s.reviewFileList}>
            {files.map((file, i) => (
              <button key={i} className={s.reviewFileItem} onClick={() => openFile(file)} type="button">
                <span className={s.reviewFileIcon}>
                  <UploadIcon size={14} color="#7c3aed" />
                </span>
                <span className={s.reviewFileName}>{file.name}</span>
                <span className={s.reviewFileSize}>{(file.size / 1024).toFixed(0)} KB</span>
                <span className={s.reviewFileView}>View →</span>
              </button>
            ))}
          </div>
        )}
      </ReviewSection>

      <div className={s.certifyRow}>
        <input id="certify" type="checkbox" className={s.certifyCheck}
          checked={agreed} onChange={e => setAgreed(e.target.checked)} />
        <label htmlFor="certify" className={s.certifyLabel}>
          I certify that all information provided is accurate and complete to the best of my knowledge. I authorize the healthcare provider to use this information for processing my patient intake and to contact me using the provided contact information.
        </label>
      </div>
    </div>
  );
}

// ── Success screen ────────────────────────────────────────────────────────────
function SuccessScreen({ email, refId }: { email: string; refId: string }) {
  return (
    <div className={s.successWrapper}>
      <div className={s.successIcon}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

      <h2 className={s.successTitle}>All Set!</h2>
      <p className={s.successSubtitle}>
        Your information has been successfully submitted.<br />
        We&apos;ll review everything and get back to you shortly.
      </p>

      <div className={s.successEmailBox}>
        <p className={s.successEmailLabel}>Confirmation sent to</p>
        <div className={s.successEmailRow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F39F6" strokeWidth="1.8">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
          </svg>
          {email && <span className={s.successEmailText}>{email}</span>}
        </div>
      </div>

      <p className={s.successRefId}>Reference ID: {refId}</p>
    </div>
  );
}

function generateRefId() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function GetAVitalBuddyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [refId] = useState(generateRefId);
  const [errors, setErrors] = useState<FormErrors>({});

  const onChange: OnChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const goNext = () => {
    const stepErrors = validateStep(currentStep, form);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setCurrentStep(s => Math.min(s + 1, TOTAL_STEPS));
  };

  const goPrev = () => {
    setErrors({});
    setCurrentStep(s => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    let driveFolderName = "";
    let driveFolderUrl = "";

    // Upload documents to Drive if any files selected
    if (files.length > 0) {
      const fd = new FormData();
      fd.append("patientName", `${form.firstName} ${form.lastName}`.trim());
      fd.append("refId", refId);
      files.forEach(f => fd.append("files", f));

      const driveRes = await fetch("/api/upload-documents", { method: "POST", body: fd });
      const driveData = await driveRes.json();
      driveFolderName = driveData.folderName ?? "";
      driveFolderUrl = driveData.folderUrl ?? "";
    }

    // Save to Google Sheet
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    await fetch("/api/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, refId, driveFolderName, driveFolderUrl, timezone: userTimezone }),
    });

    setSubmitted(true);
  };

  const step = steps[currentStep - 1];

  if (submitted) {
    return (
      <main className={s.page}>
        <div className={s.card}>
          <SuccessScreen email={form.email} refId={refId} />
        </div>
      </main>
    );
  }

  return (
    <main className={s.page}>
      <div className={s.card}>
        <div className={s.topBar}>
          <div className={s.topBarFill} style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }} />
        </div>

        <div className={s.stepHeader}>
          <div className={s.stepHeaderLeft}>
            <div className={s.stepIconBox}>
              {currentStep === 1 && <PersonIcon />}
              {currentStep === 2 && <MapPinIcon size={20} color="white" />}
              {currentStep === 3 && <HeartIcon size={20} color="white" />}
              {currentStep === 4 && <ShieldIcon size={20} color="white" />}
              {currentStep === 5 && <UploadIcon size={20} color="white" />}
              {currentStep === 6 && <CircleCheckIcon />}
            </div>
            <div>
              <p className={s.stepLabel}>{step.label}</p>
              <p className={s.stepSubtitle}>{step.subtitle}</p>
            </div>
          </div>
          <div className={s.stepCounter}>
            <span className={s.stepCurrent}>{currentStep}</span>
            <span className={s.stepTotal}>of {TOTAL_STEPS}</span>
          </div>
        </div>

        <div className={s.segments}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i}
              className={`${s.segment} ${i < currentStep - 1 ? s.segmentDone : i === currentStep - 1 ? s.segmentActive : ""}`}
            />
          ))}
        </div>

        {currentStep === 1 && <PersonalStep form={form} onChange={onChange} errors={errors} />}
        {currentStep === 2 && <AddressStep form={form} onChange={onChange} errors={errors} />}
        {currentStep === 3 && <MedicalStep form={form} onChange={onChange} />}
        {currentStep === 4 && <InsuranceStep form={form} onChange={onChange} errors={errors} />}
        {currentStep === 5 && <DocumentsStep files={files} setFiles={setFiles} />}
        {currentStep === 6 && <ReviewStep form={form} files={files} agreed={agreed} setAgreed={setAgreed} />}

        <div className={s.nav}>
          <button
            className={`${s.navBtn} ${s.prevBtn} ${currentStep === 1 ? s.navBtnDisabled : ""}`}
            onClick={goPrev} disabled={currentStep === 1}
          >
            <ArrowLeft /> Previous
          </button>
          <button
            className={`${s.navBtn} ${s.nextBtn} ${currentStep === TOTAL_STEPS && !agreed ? s.navBtnDisabled : ""}`}
            onClick={currentStep === TOTAL_STEPS ? handleSubmit : goNext}
            disabled={currentStep === TOTAL_STEPS && !agreed}
          >
            {currentStep === TOTAL_STEPS ? "Submit Application" : "Continue"}
            {currentStep === TOTAL_STEPS ? <CircleCheckIcon /> : <ArrowRight />}
          </button>
        </div>
      </div>
    </main>
  );
}
