"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import s from "./document-intake.module.css";

const TOTAL_STEPS = 8;

const steps = [
  { label: "Documents",     subtitle: "Upload files" },
  { label: "Personal",      subtitle: "Your basic information" },
  { label: "Address",       subtitle: "Where you live" },
  { label: "Medical",       subtitle: "Health history" },
  { label: "Insurance",     subtitle: "Coverage details" },
  { label: "Emergency",     subtitle: "Emergency contact" },
  { label: "Authorization", subtitle: "RPM agreement" },
  { label: "Review",        subtitle: "Confirm & submit" },
];

// ── Form data shape ──────────────────────────────────────────────────────────
interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

interface FormData {
  firstName: string; lastName: string; dateOfBirth: string;
  email: string; phone: string; gender: string; referredBy: string;
  street: string; city: string; state: string; zip: string;
  primaryCarePhysician: string; medicalConditions: string;
  medications: string; allergies: string;
  insuranceProvider: string; policyNumber: string; groupNumber: string;
  memberId: string; primaryPolicyHolder: string; relationshipToPolicyHolder: string;
  emergencyContactName: string; emergencyContactPhone: string; emergencyContactRelationship: string;
  printName: string; signatureDate: string;
  poaName: string; witnessName: string;
}

interface ConsentState {
  rpmConsent: boolean;
  hipaaConsent: boolean;
  billingConsent: boolean;
  infoAccuracy: boolean;
}

interface DocItem {
  type: string;
  file: File | null;
}

const DOC_TYPES = [
  "Government-Issued ID",
  "Insurance Card (Front)",
  "Insurance Card (Back)",
  "Insurance Coverage Document",
  "Other",
];

const REQUIRED_DOC_TYPES = [
  "Government-Issued ID",
  "Insurance Card (Front)",
  "Insurance Card (Back)",
];

interface ChronicCondition {
  name: string;
  code: string | null;
  isOther?: boolean;
}

const CHRONIC_CONDITIONS: ChronicCondition[] = [
  { name: "Essential (primary) hypertension", code: "I10" },
  { name: "Atherosclerotic heart disease of native coronary artery without angina pectoris", code: "I25.10" },
  { name: "Hypertensive heart disease without heart failure", code: "I11.9" },
  { name: "Hypertensive chronic kidney disease with stage 1-4 CKD", code: "I12.9" },
  { name: "Heart failure, unspecified", code: "I50.9" },
  { name: "Atrial fibrillation, unspecified", code: "I48.91" },
  { name: "Chronic ischemic heart disease, unspecified", code: "I25.9" },
  { name: "Type 2 diabetes mellitus without complications", code: "E11.9" },
  { name: "Type 2 diabetes mellitus with hyperglycemia", code: "E11.65" },
  { name: "Type 2 diabetes mellitus with diabetic chronic kidney disease", code: "E11.22" },
  { name: "Hypothyroidism, unspecified", code: "E03.9" },
  { name: "Obesity, unspecified", code: "E66.9" },
  { name: "Hyperlipidemia, unspecified", code: "E78.5" },
  { name: "Mixed hyperlipidemia", code: "E78.2" },
  { name: "Pure hypercholesterolemia, unspecified", code: "E78.00" },
  { name: "Chronic obstructive pulmonary disease, unspecified", code: "J44.9" },
  { name: "Chronic obstructive pulmonary disease with acute exacerbation", code: "J44.1" },
  { name: "Asthma, unspecified", code: "J45.9" },
  { name: "Obstructive sleep apnea (adult) (pediatric)", code: "G47.33" },
  { name: "Chronic kidney disease, stage 3 unspecified", code: "N18.30" },
  { name: "Chronic kidney disease, stage 4 (severe)", code: "N18.4" },
  { name: "End stage renal disease", code: "N18.6" },
  { name: "Gastro-esophageal reflux disease without esophagitis", code: "K21.9" },
  { name: "Constipation, unspecified", code: "K59.00" },
  { name: "Age-related osteoporosis without current pathological fracture", code: "M81.0" },
  { name: "Unspecified osteoarthritis, unspecified site", code: "M19.90" },
  { name: "Panniculitis, unspecified", code: "M79.3" },
  { name: "Anxiety disorder, unspecified", code: "F41.9" },
  { name: "Major depressive disorder, single episode, unspecified", code: "F32.9" },
  { name: "Major depressive disorder, recurrent, unspecified", code: "F33.9" },
  { name: "Vitamin D deficiency, unspecified", code: "E55.9" },
  { name: "Iron deficiency anemia, unspecified", code: "D50.9" },
  { name: "Gestational hypertension without significant proteinuria", code: "O13.9" },
  { name: "Unspecified diabetes mellitus in pregnancy", code: "O24.919" },
  { name: "Encounter for antineoplastic chemotherapy", code: "Z51.11" },
  { name: "Personal history of nicotine dependence", code: "Z87.891" },
  { name: "Presence of aortocoronary bypass graft", code: "Z95.1" },
  { name: "Personal history of pulmonary embolism", code: "Z87.11" },
  { name: "Venous insufficiency (chronic) (peripheral)", code: "I87.2" },
  { name: "Urinary tract infection, site not specified", code: "N39.0" },
  { name: "Alzheimer's Disease", code: null },
  { name: "Dementia", code: null },
  { name: "ADHD", code: null },
  { name: "Autism Spectrum Disorder", code: null },
  { name: "Other", code: null, isOther: true },
];

const initialForm: FormData = {
  firstName: "", lastName: "", dateOfBirth: "", email: "", phone: "", gender: "", referredBy: "",
  street: "", city: "", state: "", zip: "",
  primaryCarePhysician: "", medicalConditions: "", medications: "", allergies: "",
  insuranceProvider: "", policyNumber: "", groupNumber: "",
  memberId: "", primaryPolicyHolder: "", relationshipToPolicyHolder: "",
  emergencyContactName: "", emergencyContactPhone: "", emergencyContactRelationship: "",
  printName: "", signatureDate: new Date().toISOString().split("T")[0],
  poaName: "", witnessName: "",
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validateStep(step: number, form: FormData, emergencyContacts?: EmergencyContact[]): FormErrors {
  const e: FormErrors = {};
  // step 1 = Documents scan — no validation, always skippable
  if (step === 2) {
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.dateOfBirth) e.dateOfBirth = "Date of birth is required";
    if (!form.email.trim()) e.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.referredBy.trim()) e.referredBy = "Referred by is required";
  }
  if (step === 3) {
    if (!form.street.trim()) e.street = "Street address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.state.trim()) e.state = "State is required";
    if (!form.zip.trim()) e.zip = "ZIP is required";
  }
  if (step === 5) {
    if (!form.insuranceProvider.trim()) e.insuranceProvider = "Insurance company is required";
    if (!form.memberId.trim()) e.memberId = "Member ID is required";
  }
  if (step === 6) {
    const primary = emergencyContacts?.[0];
    if (!primary?.name.trim()) e.emergencyContactName = "Emergency contact name is required";
    if (!primary?.phone.trim()) e.emergencyContactPhone = "Emergency contact phone is required";
    if (!primary?.relationship.trim()) e.emergencyContactRelationship = "Relationship is required";
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
const PhoneIcon = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1L6.6 10.8z" />
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
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
const SpinnerIcon = ({ color = "white" }: { color?: string }) => (
  <svg className={s.spinner} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
  </svg>
);
const ContactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const ContactIconDark = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const PenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

// ── OCR Widget ───────────────────────────────────────────────────────────────
type OcrState = "idle" | "scanning" | "done" | "error";

interface OcrWidgetProps {
  docType: "id" | "insurance";
  onFill: (fields: Record<string, string>, fillEmptyOnly?: boolean) => void;
  onFileReady?: (file: File, docTypeName: string) => void;
}

const FIELD_LABELS: Record<string, string> = {
  firstName: "First name", lastName: "Last name", dateOfBirth: "Date of birth",
  gender: "Gender", street: "Street", city: "City", state: "State", zip: "ZIP",
  insuranceProvider: "Insurance company", policyNumber: "Policy #",
  groupNumber: "Group #", memberId: "Member ID", primaryPolicyHolder: "Policy holder",
};

const ScanIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
    <rect x="8" y="8" width="8" height="8" rx="1" />
  </svg>
);



const CameraIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const UploadFileIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

function OcrWidget({ docType, onFill, onFileReady }: OcrWidgetProps) {
  const [state, setState] = useState<OcrState>("idle");
  const [filledFields, setFilledFields] = useState<string[]>([]);
  const [idType, setIdType] = useState("Driving License");
  const [insSide, setInsSide] = useState("Front");
  const [lastScanned, setLastScanned] = useState<"Front" | "Back" | null>(null);
  const [scannedSides, setScannedSides] = useState<{ front: boolean; back: boolean }>({ front: false, back: false });

  const handleFile = useCallback(async (file: File, fileDocTypeName: string) => {
    setState("scanning");
    try {
      const fd = new globalThis.FormData();
      fd.append("file", file);
      const res = await fetch("/api/extract-document", { method: "POST", body: fd });
      if (!res.ok) throw new Error("extraction failed");
      const data = await res.json();
      if (data.error === "auto-fill-unavailable") throw new Error("unavailable");
      if (data.error) throw new Error(data.error);
      const raw: Record<string, string> = data.fields ?? {};
      const allowed = docType === "id"
        ? new Set(["firstName", "lastName", "dateOfBirth", "gender", "street", "city", "state", "zip"])
        : new Set(["insuranceProvider", "policyNumber", "groupNumber", "memberId", "primaryPolicyHolder"]);
      const fields = Object.fromEntries(Object.entries(raw).filter(([k]) => allowed.has(k)));
      const filled = Object.entries(fields).filter(([, v]) => v?.trim()).map(([k]) => k);
      if (filled.length === 0) throw new Error("no fields found");
      const fillEmptyOnly =
        (fileDocTypeName === "Insurance Card (Back)" && scannedSides.front && !scannedSides.back) ||
        (fileDocTypeName === "Insurance Card (Front)" && scannedSides.back && !scannedSides.front);
      onFill(fields, fillEmptyOnly);
      setFilledFields(filled);
      setState("done");
      if (fileDocTypeName === "Insurance Card (Front)") {
        setLastScanned("Front");
        setScannedSides(prev => ({ ...prev, front: true }));
      } else if (fileDocTypeName === "Insurance Card (Back)") {
        setLastScanned("Back");
        setScannedSides(prev => ({ ...prev, back: true }));
      }
      onFileReady?.(file, fileDocTypeName);
    } catch {
      setState("error");
    }
  }, [docType, onFill, onFileReady, scannedSides]);

  const reset = () => { setState("idle"); setFilledFields([]); setLastScanned(null); setScannedSides({ front: false, back: false }); };

  const isId = docType === "id";

  return (
    <div className={s.ocrWidget}>
      <div className={s.ocrWidgetHeader}>
        <div className={s.ocrWidgetIcon}><ScanIcon /></div>
        <div>
          <p className={s.ocrWidgetTitle}>Auto-fill from document</p>
          <p className={s.ocrWidgetSubtitle}>Upload a file or use your camera</p>
        </div>
      </div>

      {state === "idle" && (
        <div className={s.ocrWidgetBody}>
          {isId ? (
            <div className={s.ocrInsSection}>
              <div className={s.ocrInsTabs}>
                {["Driving License", "State ID", "Passport"].map(t => (
                  <button key={t} type="button"
                    className={`${s.ocrInsTab} ${idType === t ? s.ocrInsTabActive : ""}`}
                    onClick={() => setIdType(t)}>
                    {t}
                  </button>
                ))}
              </div>
              <div className={s.ocrInsSideRow}>
                <label className={s.ocrTileSmall}>
                  <input type="file" accept="image/jpeg,image/png,image/webp"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Government-Issued ID")} />
                  <UploadFileIcon /> Upload
                </label>
                <label className={s.ocrTileSmallGreen}>
                  <input type="file" accept="image/*" capture="environment"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Government-Issued ID")} />
                  <CameraIcon /> Scan
                </label>
              </div>
            </div>
          ) : (
            <div className={s.ocrInsSection}>
              <div className={s.ocrInsTabs}>
                {["Front", "Back"].map(side => (
                  <button key={side} type="button"
                    className={`${s.ocrInsTab} ${insSide === side ? s.ocrInsTabActive : ""}`}
                    onClick={() => setInsSide(side)}>
                    {side}
                  </button>
                ))}
              </div>
              <div className={s.ocrInsSideRow}>
                <label className={s.ocrTileSmall}>
                  <input type="file" accept="image/jpeg,image/png,image/webp"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], `Insurance Card (${insSide})`)} />
                  <UploadFileIcon /> Upload
                </label>
                <label className={s.ocrTileSmallGreen}>
                  <input type="file" accept="image/*" capture="environment"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], `Insurance Card (${insSide})`)} />
                  <CameraIcon /> Scan
                </label>
              </div>
            </div>
          )}
        </div>
      )}

      {state === "scanning" && (
        <div className={s.ocrScanning}>
          <div className={s.ocrDots}>
            <div className={s.ocrDot} /><div className={s.ocrDot} /><div className={s.ocrDot} />
          </div>
          Scanning document…
        </div>
      )}

      {state === "done" && (
        <>
          <div className={s.ocrSuccess}>
            <div className={s.ocrSuccessIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className={s.ocrSuccessText}>
              <p className={s.ocrSuccessTitle}>{filledFields.length} field{filledFields.length !== 1 ? "s" : ""} auto-filled from {lastScanned ? `${lastScanned} side` : "document"}</p>
              <div className={s.ocrSuccessTags}>
                {filledFields.map(f => (
                  <span key={f} className={s.ocrTag}>{FIELD_LABELS[f] ?? f}</span>
                ))}
              </div>
            </div>
            <button className={s.ocrResetBtn} onClick={reset} type="button">↺ Reset</button>
          </div>

          {/* Only front done → prompt to scan back */}
          {!isId && scannedSides.front && !scannedSides.back && (
            <div className={s.ocrBackPrompt}>
              <div className={s.ocrBackPromptHeader}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
                </svg>
                <div>
                  <p className={s.ocrBackPromptTitle}>Scan back of card</p>
                  <p className={s.ocrBackPromptSub}>Only empty fields will be updated</p>
                </div>
              </div>
              <div className={s.ocrInsSideRow}>
                <label className={s.ocrTileSmall}>
                  <input type="file" accept="image/jpeg,image/png,image/webp"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Back)")} />
                  <UploadFileIcon /> Upload Back
                </label>
                <label className={s.ocrTileSmallGreen}>
                  <input type="file" accept="image/*" capture="environment"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Back)")} />
                  <CameraIcon /> Scan Back
                </label>
              </div>
            </div>
          )}

          {/* Only back done → prompt to scan front */}
          {!isId && scannedSides.back && !scannedSides.front && (
            <div className={s.ocrBackPrompt}>
              <div className={s.ocrBackPromptHeader}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
                </svg>
                <div>
                  <p className={s.ocrBackPromptTitle}>Scan front of card</p>
                  <p className={s.ocrBackPromptSub}>Only empty fields will be updated</p>
                </div>
              </div>
              <div className={s.ocrInsSideRow}>
                <label className={s.ocrTileSmall}>
                  <input type="file" accept="image/jpeg,image/png,image/webp"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Front)")} />
                  <UploadFileIcon /> Upload Front
                </label>
                <label className={s.ocrTileSmallGreen}>
                  <input type="file" accept="image/*" capture="environment"
                    onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Front)")} />
                  <CameraIcon /> Scan Front
                </label>
              </div>
            </div>
          )}

          {/* Both done → summary with re-upload options */}
          {!isId && scannedSides.front && scannedSides.back && (
            <div className={s.ocrBothDone}>
              <div className={s.ocrBothDoneRow}>
                <div className={s.ocrBothDoneItem}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Front uploaded</span>
                </div>
                <div className={s.ocrBothDoneActions}>
                  <label className={s.ocrRescanBtn}>
                    <input type="file" accept="image/jpeg,image/png,image/webp"
                      onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Front)")} />
                    <UploadFileIcon /> Re-upload
                  </label>
                  <label className={s.ocrRescanBtnGreen}>
                    <input type="file" accept="image/*" capture="environment"
                      onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Front)")} />
                    <CameraIcon /> Re-scan
                  </label>
                </div>
              </div>
              <div className={s.ocrBothDoneDivider} />
              <div className={s.ocrBothDoneRow}>
                <div className={s.ocrBothDoneItem}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Back uploaded</span>
                </div>
                <div className={s.ocrBothDoneActions}>
                  <label className={s.ocrRescanBtn}>
                    <input type="file" accept="image/jpeg,image/png,image/webp"
                      onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Back)")} />
                    <UploadFileIcon /> Re-upload
                  </label>
                  <label className={s.ocrRescanBtnGreen}>
                    <input type="file" accept="image/*" capture="environment"
                      onChange={e => e.target.files?.[0] && handleFile(e.target.files[0], "Insurance Card (Back)")} />
                    <CameraIcon /> Re-scan
                  </label>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {state === "error" && (
        <div className={s.ocrError}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
          </svg>
          Auto-fill is currently unavailable — please fill in your details below.
          <button className={s.ocrErrorRetry} onClick={reset} type="button">Try again</button>
        </div>
      )}
    </div>
  );
}

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

      <div className={s.fieldRow}>
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
          <label className={s.label}>Gender</label>
          <div className={s.inputWrapperNoIcon}>
            <select className={s.select}
              value={form.gender} onChange={e => onChange("gender", e.target.value)}>
              <option value="">Prefer not to say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
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

      <div className={s.fieldGroup}>
        <label className={s.label}>Referred By <span className={s.required}>*</span></label>
        <div className={s.inputWrapper}>
          <UserIcon />
          <input className={s.input} type="text" placeholder="e.g. John Smith"
            value={form.referredBy} onChange={e => onChange("referredBy", e.target.value)} />
        </div>
        {errors.referredBy && <p style={errStyle}>{errors.referredBy}</p>}
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
            <input className={s.input} type="text" placeholder="CA"
              value={form.state} onChange={e => onChange("state", e.target.value)} />
          </div>
          {errors.state && <p style={errStyle}>{errors.state}</p>}
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>ZIP Code <span className={s.required}>*</span></label>
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

function chronicConditionLabel(c: ChronicCondition): string {
  return c.code ? `${c.name} - ${c.code}` : c.name;
}

function ChronicConditionsField({
  selected, onToggle, otherText, onOtherTextChange,
}: {
  selected: string[];
  onToggle: (name: string) => void;
  otherText: string;
  onOtherTextChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const selectedConditions = CHRONIC_CONDITIONS.filter(c => selected.includes(c.name));
  const isOtherSelected = selected.includes("Other");

  return (
    <div className={s.fieldGroup}>
      <label className={s.label}>Chronic Conditions</label>
      <div className={s.multiSelectWrapper} ref={wrapperRef}>
        <button type="button" className={s.multiSelectTrigger} onClick={() => setOpen(o => !o)}>
          <span className={s.multiSelectTriggerText}>
            {selected.length === 0 ? "Select chronic conditions..." : `${selected.length} selected`}
          </span>
          <ChevronDownIcon />
        </button>
        {open && (
          <div className={s.multiSelectPanel}>
            {CHRONIC_CONDITIONS.map(c => (
              <label key={c.name} className={s.multiSelectOption}>
                <input type="checkbox" className={s.certifyCheck}
                  checked={selected.includes(c.name)}
                  onChange={() => onToggle(c.name)} />
                <span>{chronicConditionLabel(c)}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {selectedConditions.length > 0 && (
        <div className={s.multiSelectChips}>
          {selectedConditions.map(c => (
            <span key={c.name} className={s.multiSelectChip}>
              {chronicConditionLabel(c)}
              <button type="button" aria-label={`Remove ${c.name}`} onClick={() => onToggle(c.name)}>×</button>
            </span>
          ))}
        </div>
      )}

      {isOtherSelected && (
        <div className={s.inputWrapperNoIcon}>
          <input className={s.input} type="text" placeholder="Please specify the other condition"
            value={otherText} onChange={e => onOtherTextChange(e.target.value)} />
        </div>
      )}
      <p className={s.hint}>Select all chronic conditions that apply</p>
    </div>
  );
}

function MedicalStep({
  form, onChange, chronicConditions, onToggleChronicCondition, otherConditionText, onOtherConditionTextChange,
}: {
  form: FormData;
  onChange: OnChange;
  chronicConditions: string[];
  onToggleChronicCondition: (name: string) => void;
  otherConditionText: string;
  onOtherConditionTextChange: (value: string) => void;
}) {
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

      <ChronicConditionsField
        selected={chronicConditions} onToggle={onToggleChronicCondition}
        otherText={otherConditionText} onOtherTextChange={onOtherConditionTextChange}
      />

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

      <div className={s.fieldRow}>
        <div className={s.fieldGroup}>
          <label className={s.label}>Insurance Company <span className={s.required}>*</span></label>
          <div className={s.inputWrapper}>
            <BuildingIcon />
            <input className={s.input} type="text" placeholder="Blue Cross Blue Shield"
              value={form.insuranceProvider} onChange={e => onChange("insuranceProvider", e.target.value)} />
          </div>
          {errors.insuranceProvider ? <p style={errStyle}>{errors.insuranceProvider}</p> : <p className={s.hint}>As shown on your insurance card</p>}
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Policy Number</label>
          <div className={s.inputWrapperNoIcon}>
            <input className={s.input} type="text" placeholder="ABC123456789"
              value={form.policyNumber} onChange={e => onChange("policyNumber", e.target.value)} />
          </div>
          {errors.policyNumber && <p style={errStyle}>{errors.policyNumber}</p>}
        </div>
      </div>

      <div className={s.fieldRow}>
        <div className={s.fieldGroup}>
          <label className={s.label}>Group Number</label>
          <div className={s.inputWrapperNoIcon}>
            <input className={s.input} type="text" placeholder="GRP789456"
              value={form.groupNumber} onChange={e => onChange("groupNumber", e.target.value)} />
          </div>
          <p className={s.hint}>Optional - Found on your insurance card</p>
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Member ID <span className={s.required}>*</span></label>
          <div className={s.inputWrapperNoIcon}>
            <input className={s.input} type="text" placeholder="MEM123456"
              value={form.memberId} onChange={e => onChange("memberId", e.target.value)} />
          </div>
          {errors.memberId ? <p style={errStyle}>{errors.memberId}</p> : <p className={s.hint}>Found on your insurance card</p>}
        </div>
      </div>

      <div className={s.fieldRow}>
        <div className={s.fieldGroup}>
          <label className={s.label}>Primary Policy Holder</label>
          <div className={s.inputWrapper}>
            <UserIcon />
            <input className={s.input} type="text" placeholder="If different from patient"
              value={form.primaryPolicyHolder} onChange={e => onChange("primaryPolicyHolder", e.target.value)} />
          </div>
          <p className={s.hint}>Optional - Leave blank if you are the policy holder</p>
        </div>
        <div className={s.fieldGroup}>
          <label className={s.label}>Relationship to Policy Holder</label>
          <div className={s.inputWrapperNoIcon}>
            <select className={s.select}
              value={form.relationshipToPolicyHolder} onChange={e => onChange("relationshipToPolicyHolder", e.target.value)}>
              <option value="">Select relationship</option>
              <option value="Self">Self</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              <option value="Parent">Parent</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmergencyContactStep({
  contacts, onUpdate, onAdd, onRemove, errors,
}: {
  contacts: EmergencyContact[];
  onUpdate: (index: number, field: keyof EmergencyContact, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  errors: FormErrors;
}) {
  return (
    <div className={s.stepContent}>
      <div className={s.infoBannerAmber}>
        <InfoIcon />
        <span>Please provide someone we can contact in case of an emergency. This person should not be yourself.</span>
      </div>

      {contacts.map((contact, index) => (
        <div key={index} className={s.contactCard}>
          <div className={s.contactCardHeader}>
            <span className={s.contactCardLabel}>
              {index === 0 ? "Primary Emergency Contact" : `Emergency Contact ${index + 1}`}
            </span>
            {index > 0 && (
              <button type="button" className={s.contactRemoveBtn} onClick={() => onRemove(index)}>
                ✕ Remove
              </button>
            )}
          </div>

          <div className={s.fieldGroup}>
            <label className={s.label}>
              Full Name {index === 0 && <span className={s.required}>*</span>}
            </label>
            <div className={s.inputWrapper}>
              <UserIcon />
              <input className={s.input} type="text" placeholder="Jane Doe"
                value={contact.name} onChange={e => onUpdate(index, "name", e.target.value)} />
            </div>
            {index === 0 && errors.emergencyContactName && <p style={errStyle}>{errors.emergencyContactName}</p>}
          </div>

          <div className={s.fieldRow}>
            <div className={s.fieldGroup}>
              <label className={s.label}>
                Phone Number {index === 0 && <span className={s.required}>*</span>}
              </label>
              <div className={s.inputWrapper}>
                <PhoneIcon />
                <input className={s.input} type="tel" placeholder="(555) 987-6543"
                  value={contact.phone} onChange={e => onUpdate(index, "phone", e.target.value)} />
              </div>
              {index === 0 && (errors.emergencyContactPhone
                ? <p style={errStyle}>{errors.emergencyContactPhone}</p>
                : <p className={s.hint}>Include area code</p>)}
            </div>
            <div className={s.fieldGroup}>
              <label className={s.label}>
                Relationship {index === 0 && <span className={s.required}>*</span>}
              </label>
              <div className={s.inputWrapperNoIcon}>
                <select className={s.select}
                  value={contact.relationship} onChange={e => onUpdate(index, "relationship", e.target.value)}>
                  <option value="">Select relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Parent">Parent</option>
                  <option value="Child">Child</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {index === 0 && errors.emergencyContactRelationship && <p style={errStyle}>{errors.emergencyContactRelationship}</p>}
            </div>
          </div>
        </div>
      ))}

      <button type="button" className={s.addContactBtn} onClick={onAdd}>
        + Add Another Emergency Contact
      </button>
    </div>
  );
}

const OPTIONAL_DOC_TYPES = DOC_TYPES.filter(t => !REQUIRED_DOC_TYPES.includes(t));

const OCR_ID_TYPES  = new Set(["Government-Issued ID"]);
const OCR_INS_TYPES = new Set(["Insurance Card (Front)", "Insurance Card (Back)"]);
const OCR_ALLOWED_FIELDS: Record<string, Set<string>> = {
  id:        new Set(["firstName","lastName","dateOfBirth","gender","street","city","state","zip"]),
  insurance: new Set(["insuranceProvider","policyNumber","groupNumber","memberId","primaryPolicyHolder"]),
};

type DocOcrStatus = "idle" | "scanning" | "done" | "error" | "skipped";

function DocumentsStep({ docItems, setDocItems, docError, ocrStatus, ocrFilled, runOcr, isOcrBusy, onSkipAll }: {
  docItems: DocItem[];
  setDocItems: (items: DocItem[]) => void;
  docError: string;
  ocrStatus: Record<string, DocOcrStatus>;
  ocrFilled: Record<string, string[]>;
  runOcr: (file: File, docTypeName: string) => void;
  isOcrBusy: boolean;
  onSkipAll: () => void;
}) {
  const renameFile = (file: File, type: string): File => {
    const ext = file.name.includes(".") ? "." + file.name.split(".").pop() : "";
    return new File([file], `${type}${ext}`, { type: file.type });
  };

  const updateRequiredFile = (type: string, file: File) => {
    const renamed = renameFile(file, type);
    setDocItems(docItems.map(d => d.type === type ? { type, file: renamed } : d));
    const isOcrType = OCR_ID_TYPES.has(type) || OCR_INS_TYPES.has(type);
    const isImage = ["image/jpeg","image/png","image/gif","image/webp"].includes(file.type);
    if (isOcrType && isImage) runOcr(file, type);
  };

  const updateOptionalType = (index: number, type: string) => {
    const next = [...docItems];
    next[index] = { type, file: next[index].file && type ? renameFile(next[index].file!, type) : next[index].file };
    setDocItems(next);
  };

  const updateOptionalFile = (index: number, file: File) => {
    const type = docItems[index].type;
    setDocItems(docItems.map((d, i) => i === index ? { ...d, file: type ? renameFile(file, type) : file } : d));
  };

  const removeOptional = (index: number) => setDocItems(docItems.filter((_, i) => i !== index));

  const addRow = () => setDocItems([...docItems, { type: "", file: null }]);

  const requiredItems = REQUIRED_DOC_TYPES.map(type => docItems.find(d => d.type === type) ?? { type, file: null });
  const optionalItems = docItems.map((d, i) => ({ ...d, i })).filter(d => !REQUIRED_DOC_TYPES.includes(d.type));

  return (
    <div className={s.stepContent}>
      <div className={s.infoBanner}>
        <InfoIcon />
        <span>Upload your documents — we&apos;ll auto-fill the form from them. If auto-fill is unavailable, fill in your details on the next steps.</span>
      </div>
      {isOcrBusy && (
        <div className={s.docOcrStatusBar}>
          <SpinnerIcon color="#7c3aed" />
          <span className={s.docOcrStatusBarText}>Reading your documents…</span>
          <button type="button" className={s.docOcrSkipAllBtn} onClick={onSkipAll}>Skip auto-fill</button>
        </div>
      )}
      <div className={s.docList}>
        {requiredItems.map(item => {
          const st = ocrStatus[item.type] ?? "idle";
          const filled = ocrFilled[item.type] ?? [];
          return (
            <div key={item.type} className={`${s.docCard} ${item.file ? s.docCardDone : ""}`}>
              <div className={s.docCardLeft}>
                <div className={s.docCardIconWrap}>
                  {st === "scanning"
                    ? <SpinnerIcon />
                    : item.file
                      ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                      : <UploadIcon size={14} color="#7c3aed" />}
                </div>
                <div>
                  <p className={s.docCardName}>{item.type} <span className={s.required}>*</span></p>
                  {item.file && <p className={s.docCardFileName}>{item.file.name.length > 28 ? item.file.name.slice(0, 26) + "…" : item.file.name}</p>}
                  {st === "scanning" && <p className={s.hint} style={{ color: "#7c3aed" }}>Reading document…</p>}
                  {st === "done" && filled.length > 0 && <p className={s.hint} style={{ color: "#16a34a" }}>{filled.length} field{filled.length !== 1 ? "s" : ""} auto-filled</p>}
                  {st === "error" && <p className={s.hint} style={{ color: "#6b7280" }}>Auto-fill unavailable — fill manually</p>}
                  {st === "skipped" && <p className={s.hint} style={{ color: "#6b7280" }}>Auto-fill skipped — fill manually</p>}
                </div>
              </div>
              {item.file ? (
                <label className={s.docChangeBtn}>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className={s.uploadInput}
                    onChange={e => e.target.files?.[0] && updateRequiredFile(item.type, e.target.files[0])} />
                  Replace
                </label>
              ) : (
                <div className={s.docBtnGroup}>
                  <label className={s.docUploadBtnNew}>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className={s.uploadInput}
                      onChange={e => e.target.files?.[0] && updateRequiredFile(item.type, e.target.files[0])} />
                    <UploadFileIcon /> Upload
                  </label>
                  <label className={s.docCameraBtn}>
                    <input type="file" accept="image/*" capture="environment" className={s.uploadInput}
                      onChange={e => e.target.files?.[0] && updateRequiredFile(item.type, e.target.files[0])} />
                    <CameraIcon /> Camera
                  </label>
                </div>
              )}
            </div>
          );
        })}

        {optionalItems.map(item => (
          <div key={item.i} className={s.docCard}>
            <div className={s.docCardLeft} style={{ flex: 1 }}>
              <div className={s.docCardIconWrap}>
                {item.file
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                  : <UploadIcon size={14} color="#9ca3af" />}
              </div>
              <div className={s.inputWrapperNoIcon} style={{ flex: 1 }}>
                <select className={s.select} value={item.type} onChange={e => updateOptionalType(item.i, e.target.value)}>
                  <option value="">Select document type</option>
                  {OPTIONAL_DOC_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            {item.file ? (
              <label className={s.docChangeBtn}>
                <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className={s.uploadInput}
                  onChange={e => e.target.files?.[0] && updateOptionalFile(item.i, e.target.files[0])} />
                Replace
              </label>
            ) : (
              <div className={s.docBtnGroup}>
                <label className={s.docUploadBtnNew}>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" className={s.uploadInput}
                    onChange={e => e.target.files?.[0] && updateOptionalFile(item.i, e.target.files[0])} />
                  <UploadFileIcon /> Upload
                </label>
                <label className={s.docCameraBtn}>
                  <input type="file" accept="image/*" capture="environment" className={s.uploadInput}
                    onChange={e => e.target.files?.[0] && updateOptionalFile(item.i, e.target.files[0])} />
                  <CameraIcon /> Camera
                </label>
              </div>
            )}
            <button className={s.fileRemove} onClick={() => removeOptional(item.i)} type="button" title="Remove">✕</button>
          </div>
        ))}
      </div>

      <button className={s.addDocBtn} type="button" onClick={addRow}>
        + Add Document
      </button>

      {docError && <p style={{ color: "#ef4444", fontSize: "13px", marginTop: "4px" }}>{docError}</p>}
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

function ConsentCheckbox({ id, checked, onChange, children }: {
  id: string; checked: boolean; onChange: (v: boolean) => void; children: React.ReactNode;
}) {
  return (
    <div className={s.certifyRow}>
      <input id={id} type="checkbox" className={s.certifyCheck}
        checked={checked} onChange={e => onChange(e.target.checked)} />
      <label htmlFor={id} className={s.certifyLabel}>{children}</label>
    </div>
  );
}

function ReviewStep({
  form, onChange, docItems, emergencyContacts, consents, setConsents, signatureDataUrl, setSignatureDataUrl,
}: {
  form: FormData; onChange: OnChange; docItems: DocItem[];
  emergencyContacts: EmergencyContact[];
  consents: ConsentState; setConsents: (v: ConsentState) => void;
  signatureDataUrl: string; setSignatureDataUrl: (v: string) => void;
}) {
  const openFile = (file: File) => {
    const url = URL.createObjectURL(file);
    window.open(url, "_blank");
  };
  const uploadedDocs = docItems.filter(d => d.file !== null);
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
        <ReviewRow label="Gender" value={form.gender} fallback="Not specified" />
        <ReviewRow label="Email" value={form.email} fallback="—" />
        <ReviewRow label="Phone" value={form.phone} fallback="—" />
      </ReviewSection>

      <ReviewSection icon={<MapPinIcon size={24} />} title="Address">
        <ReviewRow label="Street" value={form.street} fallback="—" />
        <ReviewRow label="City / State / ZIP" value={fullAddress} fallback="—" />
      </ReviewSection>

      <ReviewSection icon={<HeartIcon size={24} />} title="Medical History">
        <ReviewRow label="Primary Care Physician" value={form.primaryCarePhysician} fallback="Not provided" />
        <ReviewRow label="Chronic Conditions" value={form.medicalConditions} fallback="None listed" />
        <ReviewRow label="Medications" value={form.medications} fallback="None listed" />
        <ReviewRow label="Allergies" value={form.allergies} fallback="None listed" />
      </ReviewSection>

      <ReviewSection icon={<ShieldIcon size={24} />} title="Insurance">
        <ReviewRow label="Insurance Company" value={form.insuranceProvider} fallback="—" />
        <ReviewRow label="Policy Number" value={form.policyNumber} fallback="—" />
        <ReviewRow label="Group Number" value={form.groupNumber} fallback="Not provided" />
        <ReviewRow label="Member ID" value={form.memberId} fallback="—" />
        <ReviewRow label="Primary Policy Holder" value={form.primaryPolicyHolder} fallback="Self" />
        <ReviewRow label="Relationship to Policy Holder" value={form.relationshipToPolicyHolder} fallback="Not specified" />
      </ReviewSection>

      <ReviewSection icon={<ContactIconDark />} title="Emergency Contact">
        {emergencyContacts.map((c, i) => (
          <div key={i}>
            {emergencyContacts.length > 1 && (
              <p className={s.reviewContactLabel}>{i === 0 ? "Primary" : `Contact ${i + 1}`}</p>
            )}
            <ReviewRow label="Name" value={c.name} fallback="—" />
            <ReviewRow label="Phone" value={c.phone} fallback="—" />
            <ReviewRow label="Relationship" value={c.relationship} fallback="—" />
          </div>
        ))}
      </ReviewSection>

      <ReviewSection icon={<UploadIcon size={24} color="#7c3aed" />} title="Documents">
        {uploadedDocs.length === 0 ? (
          <p className={s.reviewEmpty}>No documents uploaded</p>
        ) : (
          <div className={s.reviewFileList}>
            {uploadedDocs.map((doc, i) => (
              <button key={i} className={s.reviewFileItem} onClick={() => openFile(doc.file!)} type="button">
                <span className={s.reviewFileIcon}>
                  <UploadIcon size={14} color="#7c3aed" />
                </span>
                <span className={s.reviewFileName}>
                  {doc.type ? `${doc.type} — ` : ""}{doc.file!.name}
                </span>
                <span className={s.reviewFileSize}>{(doc.file!.size / 1024).toFixed(0)} KB</span>
                <span className={s.reviewFileView}>View →</span>
              </button>
            ))}
          </div>
        )}
      </ReviewSection>

      <div className={s.consentSection}>
        <h4 className={s.consentTitle}>Consent and Authorization</h4>
        <p className={s.consentSubtitle}>All four items below must be acknowledged before submitting.</p>

        <ConsentCheckbox id="rpmConsent" checked={consents.rpmConsent}
          onChange={v => setConsents({ ...consents, rpmConsent: v })}>
          <strong>RPM Consent:</strong> I consent to participate in the Remote Patient Monitoring program and understand that my health data will be monitored and transmitted to my healthcare provider.
        </ConsentCheckbox>

        <ConsentCheckbox id="hipaaConsent" checked={consents.hipaaConsent}
          onChange={v => setConsents({ ...consents, hipaaConsent: v })}>
          <strong>HIPAA Authorization:</strong> I authorize the sharing of my protected health information (PHI) for remote patient monitoring purposes.
        </ConsentCheckbox>

        <ConsentCheckbox id="billingConsent" checked={consents.billingConsent}
          onChange={v => setConsents({ ...consents, billingConsent: v })}>
          <strong>Billing Authorization:</strong> I authorize my healthcare provider to bill my insurance for RPM services and understand my financial responsibilities.
        </ConsentCheckbox>

        <ConsentCheckbox id="infoAccuracy" checked={consents.infoAccuracy}
          onChange={v => setConsents({ ...consents, infoAccuracy: v })}>
          <strong>Information Accuracy:</strong> I certify that all information provided is accurate and complete to the best of my knowledge.
        </ConsentCheckbox>
      </div>

      <div className={s.signatureSection}>
        <h4 className={s.consentTitle}>Signature</h4>
        <div className={s.fieldRow} style={{ padding: "0 20px" }}>
          <div className={s.fieldGroup}>
            <label className={s.label}>Print Name <span className={s.required}>*</span></label>
            <div className={s.inputWrapper}>
              <PenIcon />
              <input className={s.input} type="text" placeholder="Full legal name"
                value={form.printName} onChange={e => onChange("printName", e.target.value)} />
            </div>
            <p className={s.hint}>Type your full name to sign electronically</p>
          </div>
          <div className={s.fieldGroup}>
            <label className={s.label}>Date <span className={s.required}>*</span></label>
            <div className={s.inputWrapper}>
              <CalendarIcon />
              <input className={s.input} type="date"
                value={form.signatureDate} onChange={e => onChange("signatureDate", e.target.value)} />
            </div>
          </div>
        </div>
        <div className={s.sigFieldGroup}>
          <label className={s.label}>
            Patient Signature <span className={s.required}>*</span>
          </label>
          <SignaturePad value={signatureDataUrl} onChange={setSignatureDataUrl} />
          {!signatureDataUrl && (
            <p className={s.hint}>Please draw your signature above to enable submission</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Authorization terms ───────────────────────────────────────────────────────
const FileTextIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const AUTHORIZATION_TERMS = [
  { text: "I am permitted to use the remote monitoring device(s) (a.k.a. BUDDI®).", bold: false },
  { text: "I will use the RPM device(s) as instructed; I will not use the RPM device(s) for any reason other than for my health to be monitored.", bold: false },
  { text: "I will keep the RPM device(s) always sanitized and clean before wearing it.", bold: false },
  { text: "I understand if any rash or skin itchiness has occurred because of sweat and not keeping hygiene standards then I take full 100% responsibility.", bold: false },
  { text: "I will not alter, throw or tamper with the RPM device(s). If the device(s) is not maintained as per the standards, then I understand that VitalFriend Inc. can take back the RPM device(s) and terminate this program.", bold: false },
  { text: "I understand that if I fall or slip and the device(s) breaks, it can hurt my hand as any other wearable.", bold: false },
  { text: "My data will be electronically transmitted from the RPM device(s) to VitalFriend's platform in a safe and secure manner.", bold: false },
  { text: "I will assist the staff or, if doing myself, will ensure that my measurements are taken at least 2 times a day. If I fail to maintain minimum usage requirements, the program administrators will provide an initial reminder. If non-compliance continues, additional follow-up reminders will be issued. Failure to maintain minimum usage requirements for more than 5 consecutive days despite these reminders may result in device(s) retrieval.", bold: false },
  { text: "I permit that my data can be used for additional research and development purposes by VitalFriend Inc. for providing better health statistics, benchmarks, predictive AI etc. for myself. If my data is used for other research, then it has to be in an unidentified manner.", bold: false },
  { text: "A qualified healthcare professional, from VitalFriend Inc. / Equicare / Medical Solutions Consultants LLC (MSC), will view my remote patient monitoring every seven (15) days. I may be contacted through a secure communication channel to review and discuss health details, as necessary.", bold: false },
  { text: "The RPM device(s) is not designed for an emergency response unit and is not monitored 24/7. I will call 911 for any medical emergencies. Any delay in seeking emergency care is the sole responsibility of the patient. Alerts and notifications may experience delays and should not be relied upon for immediate emergency response.", bold: true },
  { text: "I may withdraw my consent to participate in the remote monitoring program and stop participating at any time by notifying VitalFriend Inc. Upon doing so, I would ship back the device(s) (a.k.a BUDDI®) to VitalFriend Inc. All shipping charges will be incurred by me and not VitalFriend Inc.", bold: false },
  { text: "I understand that the medication reminder feature is provided solely as a convenience tool. This feature does not create any obligation for me to take medication, nor does it transfer any responsibility to VitalFriend Inc. for missed medications. I acknowledge that I should only follow medication instructions as recommended by my healthcare provider, who maintains full responsibility for my medication management.", bold: false },
  { text: "I acknowledge that any readings from this device(s), including elevated or abnormal values, are not diagnostic in nature and do not automatically indicate a need for medication changes. I understand that all device(s) readings must be reviewed by a qualified healthcare professional before making any medical decisions or changes to my treatment plan. VitalFriend Inc. provides monitoring tools only and does not offer medical advice or medication recommendations.", bold: false },
  { text: "I understand that RPM device(s) may experience technical malfunctions, connectivity issues, or measurement inaccuracies. I will not rely solely on RPM device(s) readings for medical decisions and will continue all prescribed treatments and medications as directed by my healthcare provider.", bold: false },
  { text: "I acknowledge that remote patient monitoring supplements but does not replace regular medical care, routine appointments, or direct communication with my healthcare provider. RPM data does not constitute medical advice, diagnosis, or treatment recommendations.", bold: false },
  { text: "I am responsible for ensuring proper device(s) connectivity and will promptly report any technical issues, connectivity problems, or suspected device(s) malfunctions to VitalFriend Inc. I understand that data transmission failures or platform downtime may occur and that VitalFriend Inc. is not liable for such technical interruptions. Inaccurate data due to improper use is not the responsibility of VitalFriend Inc. or Equicare/MSC.", bold: false },
  { text: "I understand that I should contact my primary healthcare provider or seek immediate medical attention if I experience concerning symptoms, regardless of RPM device(s) readings. I will not delay seeking medical care based on RPM data.", bold: true },
  { text: "I acknowledge that while VitalFriend Inc. and its partners strive to provide reliable monitoring services, no medical technology is 100% accurate or foolproof. I understand the limitations of remote monitoring technology and agree not to hold VitalFriend Inc., Equicare/Medical Solutions Consultants LLC, or their employees liable for device(s) limitations, technical failures, or any adverse outcomes related to my participation in this program.", bold: false },
  { text: "I agree to notify VitalFriend Inc. and my healthcare provider within 48 hours of any diagnosis changes, new medical conditions, medication changes, or hospitalizations that may affect remote monitoring protocols.", bold: false },
  { text: "Patient is responsible for maintaining current contact information for themselves, their designated emergency contacts, primary care physician, and authorized caregivers. If VitalFriend Inc. or Equicare/MSC detects critical vital sign anomalies and cannot reach the patient, emergency contacts, or healthcare provider using the contact information on file, the patient assumes full responsibility for any adverse outcomes resulting from the inability to establish contact.", bold: false },
  { text: "Repeated non-compliance with program requirements, including failure to take measurements, failure to update health information, or failure to maintain device(s) properly, may result in termination from the program and device(s) retrieval without refund.", bold: false },
  { text: "Patient acknowledges that their primary care physician and Equicare/MSC providers are responsible for medical decisions and treatment recommendations. VitalFriend Inc. provides technology platform services only and does not provide medical advice or treatment.", bold: false },
  { text: "If any provision of this Agreement is found to be unenforceable or invalid by a court of competent authority, the remaining provisions shall continue in full force and effect.", bold: false },
  { text: "I agree to indemnify and hold harmless VitalFriend Inc., Equicare/Medical Solutions Consultants LLC, and their respective officers, directors, employees, agents, contractors, and affiliates from and against any and all claims, demands, damages, liabilities, costs, expenses or losses (including reasonable attorneys' fees and court costs) arising from my use of the RPM device(s) or participation in the monitoring program, except in cases of gross negligence or willful misconduct. This indemnification obligation shall survive termination of my participation in the program.", bold: false },
  { text: "This Authorization Agreement constitutes the entire agreement between the parties regarding remote patient monitoring services and supersedes all prior discussions, representations, or agreements.", bold: false },
];

function AuthorizationStep({
  agreed, setAgreed, form, onChange,
  poaSignatureDataUrl, setPoaSignatureDataUrl,
  witnessSignatureDataUrl, setWitnessSignatureDataUrl,
  authError,
}: {
  agreed: boolean; setAgreed: (v: boolean) => void;
  form: FormData; onChange: OnChange;
  poaSignatureDataUrl: string; setPoaSignatureDataUrl: (v: string) => void;
  witnessSignatureDataUrl: string; setWitnessSignatureDataUrl: (v: string) => void;
  authError: string;
}) {
  const [hasPOA, setHasPOA] = useState(false);
  const [hasWitness, setHasWitness] = useState(false);
  const [hasReadAll, setHasReadAll] = useState(false);
  const termsRef = useRef<HTMLDivElement>(null);

  const handleTermsScroll = () => {
    const el = termsRef.current;
    if (!el || hasReadAll) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) setHasReadAll(true);
  };

  return (
    <div className={s.stepContent}>
      <div className={s.infoBannerAmber}>
        <InfoIcon />
        <span>Please scroll through and read all terms — the checkbox will unlock once you reach the bottom.</span>
      </div>

      {/* Scrollable terms box */}
      <div className={s.authTermsBox} ref={termsRef} onScroll={handleTermsScroll}>
        <h3 className={s.authTermsTitle}>AUTHORIZATION AGREEMENT / RELEASE OF LIABILITY</h3>
        <p className={s.authTermsIntro}>By signing this form, I agree that I have read and understood the following:</p>
        <ol className={s.authTermsList}>
          {AUTHORIZATION_TERMS.map((t, i) => (
            <li key={i} className={t.bold ? s.authTermBold : s.authTerm}>{t.text}</li>
          ))}
        </ol>
        <p className={s.authTermsPara}>
          I hereby authorize VitalFriend Inc. and Equicare/Medical Solutions Consultants LLC to provide
          device(s) and services related to remote monitoring. My provider will direct the details and
          frequency of the remote monitoring services that have been discussed with me. I further state
          that I have read and understood the above authorization; and any questions I have on the device(s)
          or the use of the device(s) for my medical care have been answered to my satisfaction. I hereby
          agree to participate in the remote monitoring program as explained, under the terms as described herein.
        </p>
        <p className={s.authTermsPara}>
          <strong>LIMITATION OF LIABILITY:</strong> To the maximum extent permitted by law, VitalFriend Inc.
          and Equicare/Medical Solutions Consultants LLC shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from or related to the remote patient monitoring
          program, including but not limited to device(s) malfunctions, data transmission errors, or any
          medical outcomes.
        </p>
      </div>

      {!hasReadAll && (
        <p className={s.authScrollHint}>↓ Scroll to the bottom to unlock the agreement checkbox</p>
      )}

      {/* Agree checkbox */}
      <div className={`${s.authAgreeRow} ${!hasReadAll ? s.authAgreeRowLocked : ""}`}>
        <input
          id="authAgreed"
          type="checkbox"
          className={s.certifyCheck}
          checked={agreed}
          disabled={!hasReadAll}
          onChange={e => setAgreed(e.target.checked)}
        />
        <label htmlFor="authAgreed" className={s.certifyLabel} style={!hasReadAll ? { opacity: 0.45, cursor: "not-allowed" } : undefined}>
          <strong>I have read and agree to all terms</strong> of the Authorization Agreement above.
        </label>
      </div>
      {authError && <p style={{ color: "#ef4444", fontSize: "13px", marginTop: "4px" }}>{authError}</p>}

      {/* Optional POA section */}
      <div className={s.authOptionalSection}>
        <div className={s.authOptionalHeader} onClick={() => setHasPOA(v => !v)}>
          <span className={s.authOptionalToggle}>{hasPOA ? "▾" : "▸"}</span>
          <span className={s.authOptionalTitle}>Power of Attorney (Optional)</span>
        </div>
        {hasPOA && (
          <div className={s.authOptionalBody}>
            <div className={s.fieldGroup}>
              <label className={s.label}>POA Full Name</label>
              <div className={s.inputWrapper}>
                <UserIcon />
                <input className={s.input} type="text" placeholder="Power of Attorney name"
                  value={form.poaName} onChange={e => onChange("poaName", e.target.value)} />
              </div>
            </div>
            <div className={s.fieldGroup}>
              <label className={s.label}>POA Signature</label>
              <SignaturePad value={poaSignatureDataUrl} onChange={setPoaSignatureDataUrl} />
            </div>
          </div>
        )}
      </div>

      {/* Optional Witness section */}
      <div className={s.authOptionalSection}>
        <div className={s.authOptionalHeader} onClick={() => setHasWitness(v => !v)}>
          <span className={s.authOptionalToggle}>{hasWitness ? "▾" : "▸"}</span>
          <span className={s.authOptionalTitle}>Witness (Optional)</span>
        </div>
        {hasWitness && (
          <div className={s.authOptionalBody}>
            <div className={s.fieldGroup}>
              <label className={s.label}>Witness Full Name</label>
              <div className={s.inputWrapper}>
                <UserIcon />
                <input className={s.input} type="text" placeholder="Witness name"
                  value={form.witnessName} onChange={e => onChange("witnessName", e.target.value)} />
              </div>
            </div>
            <div className={s.fieldGroup}>
              <label className={s.label}>Witness Signature</label>
              <SignaturePad value={witnessSignatureDataUrl} onChange={setWitnessSignatureDataUrl} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Success screen ────────────────────────────────────────────────────────────
function SuccessScreen({
  refId, pdfsReady, pdfBase64, pdfName, pdfBase64NoSig, pdfNameNoSig,
}: {
  refId: string; pdfsReady: boolean;
  pdfBase64?: string; pdfName?: string;
  pdfBase64NoSig?: string; pdfNameNoSig?: string;
}) {
  const triggerDownload = (b64: string, filename: string) => {
    const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const blob  = new Blob([bytes], { type: "application/pdf" });
    const url   = URL.createObjectURL(blob);
    const a     = document.createElement("a");
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  };

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

      <p className={s.successRefId}>Reference ID: {refId}</p>

      <div className={s.downloadGroup}>
        {!pdfsReady && (
          <div className={s.preparingBox}>
            <SpinnerIcon color="#4F39F6" />
            <span>Preparing your documents for download…</span>
          </div>
        )}
        {pdfsReady && pdfBase64 && (
          <button className={s.downloadBtn} onClick={() => triggerDownload(pdfBase64, pdfName ?? "RPM_Form.pdf")} type="button">
            <DownloadIcon /> Download Form
          </button>
        )}
        {pdfsReady && pdfBase64NoSig && (
          <>
            <div className={s.downloadDivider}>Without signature</div>
            <button className={`${s.downloadBtn} ${s.downloadBtnGhost}`} onClick={() => triggerDownload(pdfBase64NoSig, pdfNameNoSig ?? "RPM_Form_NoSignature.pdf")} type="button">
              <DownloadIcon /> Form (No Signature)
            </button>
          </>
        )}
        {pdfsReady && !pdfBase64 && (
          <p className={s.pdfUnavailable}>Your documents couldn&apos;t be prepared for download. Please contact support for a copy.</p>
        )}
      </div>
    </div>
  );
}

// ── Signature pad ────────────────────────────────────────────────────────────
function SignaturePad({ value, onChange }: { value: string; onChange: (dataUrl: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [isEmpty, setIsEmpty] = useState(!value);

  const getPos = (canvas: HTMLCanvasElement, src: MouseEvent | Touch) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (src.clientX - rect.left) * (canvas.width / rect.width),
      y: (src.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawing.current = true;
    const src = "touches" in e ? e.touches[0] : (e as React.MouseEvent).nativeEvent;
    const { x, y } = getPos(canvas, src as MouseEvent | Touch);
    const ctx = canvas.getContext("2d")!;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsEmpty(false);
  };

  const continueDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drawing.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const src = "touches" in e ? e.touches[0] : (e as React.MouseEvent).nativeEvent;
    const { x, y } = getPos(canvas, src as MouseEvent | Touch);
    const ctx = canvas.getContext("2d")!;
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#1a1a2e";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  };

  const stopDraw = () => {
    if (!drawing.current) return;
    drawing.current = false;
    const canvas = canvasRef.current;
    if (canvas) onChange(canvas.toDataURL("image/png"));
  };

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
    setIsEmpty(true);
    onChange("");
  };

  return (
    <div className={s.sigPadWrapper}>
      <div className={s.sigPadContainer}>
        {isEmpty && <p className={s.sigPadPlaceholder}>Draw your signature here</p>}
        <canvas
          ref={canvasRef}
          width={600}
          height={180}
          className={s.sigPadCanvas}
          onMouseDown={startDraw}
          onMouseMove={continueDraw}
          onMouseUp={stopDraw}
          onMouseLeave={stopDraw}
          onTouchStart={startDraw}
          onTouchMove={continueDraw}
          onTouchEnd={stopDraw}
        />
      </div>
      <div className={s.sigPadFooter}>
        <p className={s.sigPadLine} />
        <button type="button" className={s.sigClearBtn} onClick={clear}>
          ✕ Clear
        </button>
      </div>
    </div>
  );
}

function dataUrlToFile(dataUrl: string, filename: string): File {
  const [header, data] = dataUrl.split(",");
  const mime = header.match(/:(.*?);/)![1];
  const bytes = atob(data);
  const arr = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i);
  return new File([arr], filename, { type: mime });
}

function generateRefId() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

// ── Page ─────────────────────────────────────────────────────────────────────
function IntakeWizard({ onLogout }: { onLogout: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [consents, setConsents] = useState<ConsentState>({
    rpmConsent: false,
    hipaaConsent: false,
    billingConsent: false,
    infoAccuracy: false,
  });
  const [form, setForm] = useState<FormData>(initialForm);
  const [docItems, setDocItems] = useState<DocItem[]>(REQUIRED_DOC_TYPES.map(type => ({ type, file: null })));
  const [ocrStatus, setOcrStatus] = useState<Record<string, DocOcrStatus>>({});
  const [ocrFilled, setOcrFilled] = useState<Record<string, string[]>>({});
  const ocrAbortControllers = useRef<Record<string, AbortController>>({});
  const [signatureDataUrl, setSignatureDataUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refId] = useState(generateRefId);
  const [errors, setErrors] = useState<FormErrors>({});
  const [docError, setDocError] = useState("");
  const [pdfBase64, setPdfBase64] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [pdfBase64NoSig, setPdfBase64NoSig] = useState("");
  const [pdfNameNoSig, setPdfNameNoSig] = useState("");
  const [pdfsReady, setPdfsReady] = useState(false);
  const [authAgreed, setAuthAgreed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [poaSignatureDataUrl, setPoaSignatureDataUrl] = useState("");
  const [witnessSignatureDataUrl, setWitnessSignatureDataUrl] = useState("");
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([
    { name: "", phone: "", relationship: "" },
  ]);
  const [chronicConditions, setChronicConditions] = useState<string[]>([]);
  const [otherConditionText, setOtherConditionText] = useState("");

  const toggleChronicCondition = (name: string) => {
    setChronicConditions(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  };

  useEffect(() => {
    const summary = CHRONIC_CONDITIONS
      .filter(c => chronicConditions.includes(c.name))
      .map(c => (c.isOther ? (otherConditionText.trim() ? `Other - ${otherConditionText.trim()}` : "Other") : chronicConditionLabel(c)))
      .join("; ");
    setForm(prev => (prev.medicalConditions === summary ? prev : { ...prev, medicalConditions: summary }));
  }, [chronicConditions, otherConditionText]);

  const updateEmergencyContact = (index: number, field: keyof EmergencyContact, value: string) => {
    setEmergencyContacts(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
    if (index === 0) {
      const formField = field === "name" ? "emergencyContactName" : field === "phone" ? "emergencyContactPhone" : "emergencyContactRelationship";
      setErrors(prev => ({ ...prev, [formField]: undefined }));
    }
  };

  const addEmergencyContact = () =>
    setEmergencyContacts(prev => [...prev, { name: "", phone: "", relationship: "" }]);

  const removeEmergencyContact = (index: number) =>
    setEmergencyContacts(prev => prev.filter((_, i) => i !== index));

  const onChange: OnChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleOcrFill = useCallback((fields: Record<string, string>, fillEmptyOnly = false) => {
    setForm(prev => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(fields)) {
        if (v?.trim() && k in prev) {
          if (!fillEmptyOnly || !(prev as unknown as Record<string, string>)[k]?.trim()) {
            (next as Record<string, string>)[k] = v.trim();
          }
        }
      }
      // Auto-set "Self" when the policy holder name matches the patient's own name
      if (fields.primaryPolicyHolder && prev.firstName && prev.lastName) {
        const norm = (s: string) => s.toLowerCase().replace(/[^a-z]/g, " ").trim();
        const holder = norm(fields.primaryPolicyHolder);
        const first  = norm(prev.firstName);
        const last   = norm(prev.lastName);
        const isSelf = last.length > 2 && holder.includes(last) &&
                       (first.length <= 2 || holder.includes(first));
        if (isSelf && !next.relationshipToPolicyHolder) {
          next.relationshipToPolicyHolder = "Self";
        }
      }
      return next;
    });
  }, []);

  const runOcr = useCallback(async (file: File, docTypeName: string) => {
    const docCat = OCR_ID_TYPES.has(docTypeName) ? "id" : "insurance";
    const allowed = OCR_ALLOWED_FIELDS[docCat];
    const controller = new AbortController();
    ocrAbortControllers.current[docTypeName] = controller;
    setOcrStatus(prev => ({ ...prev, [docTypeName]: "scanning" }));
    try {
      const fd = new globalThis.FormData();
      fd.append("file", file);
      const res = await fetch("/api/extract-document", { method: "POST", body: fd, signal: controller.signal });
      if (!res.ok) throw new Error("failed");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      const raw: Record<string, string> = data.fields ?? {};
      const fields = Object.fromEntries(Object.entries(raw).filter(([k]) => allowed.has(k)));
      const filled = Object.entries(fields).filter(([, v]) => v?.trim()).map(([k]) => k);
      if (filled.length === 0) throw new Error("no fields");
      handleOcrFill(fields, docTypeName === "Insurance Card (Back)");
      setOcrStatus(prev => ({ ...prev, [docTypeName]: "done" }));
      setOcrFilled(prev => ({ ...prev, [docTypeName]: filled }));
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setOcrStatus(prev => ({ ...prev, [docTypeName]: "error" }));
    } finally {
      delete ocrAbortControllers.current[docTypeName];
    }
  }, [handleOcrFill]);

  const skipAllOcr = useCallback(() => {
    const pending = Object.keys(ocrAbortControllers.current);
    pending.forEach(type => ocrAbortControllers.current[type]?.abort());
    setOcrStatus(prev => {
      const next = { ...prev };
      for (const type of pending) next[type] = "skipped";
      return next;
    });
  }, []);

  const isOcrBusy = Object.values(ocrStatus).some(st => st === "scanning");

  const handleDocFileReady = useCallback((file: File, docTypeName: string) => {
    setDocItems(prev => {
      const ext = file.name.includes(".") ? "." + file.name.split(".").pop() : "";
      const renamed = new File([file], `${docTypeName}${ext}`, { type: file.type });
      // Replace existing slot with same type
      const idx = prev.findIndex(d => d.type === docTypeName);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { type: docTypeName, file: renamed };
        return next;
      }
      // Fill first empty slot
      const emptyIdx = prev.findIndex(d => !d.type && !d.file);
      if (emptyIdx !== -1) {
        const next = [...prev];
        next[emptyIdx] = { type: docTypeName, file: renamed };
        return next;
      }
      return [...prev, { type: docTypeName, file: renamed }];
    });
  }, []);

  const goNext = () => {
    if (currentStep === 1) {
      const uploadedTypes = docItems.filter(d => d.file).map(d => d.type);
      const missing = REQUIRED_DOC_TYPES.filter(t => !uploadedTypes.includes(t));
      if (missing.length > 0) {
        setDocError(`Please upload: ${missing.join(", ")}`);
        return;
      }
      setDocError("");
    }
    if (currentStep === 7) {
      if (!authAgreed) {
        setAuthError("You must read and agree to all terms before continuing.");
        return;
      }
      setAuthError("");
    }
    const stepErrors = validateStep(currentStep, form, emergencyContacts);
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

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    onLogout();
  };

  const allConsentsChecked = Object.values(consents).every(Boolean);
  const canSubmit = allConsentsChecked && form.printName.trim() !== "" && signatureDataUrl !== "";

  const handleSubmit = async () => {
    setSubmitting(true);
    let driveFolderName = "";
    let driveFolderUrl = "";
    let driveFolderId = "";

    // 1. Upload documents + signature to Drive
    const uploadableFiles = docItems.filter(d => d.file !== null).map(d => d.file as File);
    const hasAnything = uploadableFiles.length > 0 || signatureDataUrl !== "";
    if (hasAnything) {
      const fd = new FormData();
      fd.append("patientName", `${form.firstName} ${form.lastName}`.trim());
      fd.append("refId", refId);
      uploadableFiles.forEach(f => fd.append("files", f));
      if (signatureDataUrl) {
        fd.append("files", dataUrlToFile(signatureDataUrl, `Signature_${form.firstName}_${form.lastName}.png`));
      }

      const driveRes = await fetch("/api/upload-documents", { method: "POST", body: fd });
      const driveData = await driveRes.json();
      driveFolderName = driveData.folderName ?? "";
      driveFolderUrl  = driveData.folderUrl  ?? "";
      driveFolderId   = driveData.folderId   ?? "";
    }

    const generatePdfs = async () => {
      if (!driveFolderId) { setPdfsReady(true); return; }

      try {
        const res = await fetch("/api/generate-intake-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            form,
            emergencyContacts,
            consents,
            refId,
            signatureDataUrl,
            poaSignatureDataUrl,
            witnessSignatureDataUrl,
            folderId: driveFolderId,
          }),
        });
        const data = await res.json();

        if (data.pdfBase64) setPdfBase64(data.pdfBase64);
        if (data.pdfName) setPdfName(data.pdfName);
        if (data.pdfBase64NoSig) setPdfBase64NoSig(data.pdfBase64NoSig);
        if (data.pdfNameNoSig) setPdfNameNoSig(data.pdfNameNoSig);
      } finally {
        setPdfsReady(true);
      }
    };

    void generatePdfs().catch(err => {
      console.error("PDF generation failed:", err);
    });

    // 2. Save form data to Google Sheet
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    await fetch("/api/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        emergencyContactName: emergencyContacts[0]?.name ?? "",
        emergencyContactPhone: emergencyContacts[0]?.phone ?? "",
        emergencyContactRelationship: emergencyContacts[0]?.relationship ?? "",
        additionalEmergencyContacts: emergencyContacts.slice(1),
        refId,
        driveFolderName,
        driveFolderUrl,
        timezone: userTimezone,
        consents,
      }),
    });

    setSubmitted(true);
  };

  const step = steps[currentStep - 1];

  if (submitted) {
    return (
      <main className={s.page}>
        <div className={s.card}>
          <SuccessScreen
            refId={refId} pdfsReady={pdfsReady}
            pdfBase64={pdfBase64} pdfName={pdfName}
            pdfBase64NoSig={pdfBase64NoSig} pdfNameNoSig={pdfNameNoSig}
          />
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
              {currentStep === 1 && <UploadIcon size={20} color="white" />}
              {currentStep === 2 && <PersonIcon />}
              {currentStep === 3 && <MapPinIcon size={20} color="white" />}
              {currentStep === 4 && <HeartIcon size={20} color="white" />}
              {currentStep === 5 && <ShieldIcon size={20} color="white" />}
              {currentStep === 6 && <ContactIcon />}
              {currentStep === 7 && <FileTextIcon />}
              {currentStep === 8 && <CircleCheckIcon />}
            </div>
            <div>
              <p className={s.stepLabel}>{step.label}</p>
              <p className={s.stepSubtitle}>{step.subtitle}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
            <button type="button" className={s.logoutBtn} onClick={handleLogout}>
              <LogoutIcon /> Log out
            </button>
            <div className={s.stepCounter}>
              <span className={s.stepCurrent}>{currentStep}</span>
              <span className={s.stepTotal}>of {TOTAL_STEPS}</span>
            </div>
          </div>
        </div>

        <div className={s.segments}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i}
              className={`${s.segment} ${i < currentStep - 1 ? s.segmentDone : i === currentStep - 1 ? s.segmentActive : ""}`}
            />
          ))}
        </div>

        {currentStep === 1 && (
          <DocumentsStep
            docItems={docItems} setDocItems={setDocItems} docError={docError}
            ocrStatus={ocrStatus} ocrFilled={ocrFilled} runOcr={runOcr}
            isOcrBusy={isOcrBusy} onSkipAll={skipAllOcr}
          />
        )}
        {currentStep === 2 && <PersonalStep form={form} onChange={onChange} errors={errors} />}
        {currentStep === 3 && <AddressStep form={form} onChange={onChange} errors={errors} />}
        {currentStep === 4 && (
          <MedicalStep
            form={form} onChange={onChange}
            chronicConditions={chronicConditions} onToggleChronicCondition={toggleChronicCondition}
            otherConditionText={otherConditionText} onOtherConditionTextChange={setOtherConditionText}
          />
        )}
        {currentStep === 5 && <InsuranceStep form={form} onChange={onChange} errors={errors} />}
        {currentStep === 6 && (
          <EmergencyContactStep
            contacts={emergencyContacts}
            onUpdate={updateEmergencyContact}
            onAdd={addEmergencyContact}
            onRemove={removeEmergencyContact}
            errors={errors}
          />
        )}
        {currentStep === 7 && (
          <AuthorizationStep
            agreed={authAgreed} setAgreed={setAuthAgreed}
            form={form} onChange={onChange}
            poaSignatureDataUrl={poaSignatureDataUrl} setPoaSignatureDataUrl={setPoaSignatureDataUrl}
            witnessSignatureDataUrl={witnessSignatureDataUrl} setWitnessSignatureDataUrl={setWitnessSignatureDataUrl}
            authError={authError}
          />
        )}
        {currentStep === 8 && (
          <ReviewStep
            form={form} onChange={onChange} docItems={docItems}
            emergencyContacts={emergencyContacts}
            consents={consents} setConsents={setConsents}
            signatureDataUrl={signatureDataUrl} setSignatureDataUrl={setSignatureDataUrl}
          />
        )}

        <div className={s.nav}>
          <button
            className={`${s.navBtn} ${s.prevBtn} ${currentStep === 1 || submitting ? s.navBtnDisabled : ""}`}
            onClick={goPrev} disabled={currentStep === 1 || submitting}
          >
            <ArrowLeft /> Previous
          </button>
          <button
            className={`${s.navBtn} ${s.nextBtn} ${(currentStep === TOTAL_STEPS && !canSubmit) || submitting || (currentStep === 1 && isOcrBusy) ? s.navBtnDisabled : ""}`}
            onClick={currentStep === TOTAL_STEPS ? handleSubmit : goNext}
            disabled={(currentStep === TOTAL_STEPS && !canSubmit) || submitting || (currentStep === 1 && isOcrBusy)}
          >
            {currentStep === TOTAL_STEPS
              ? submitting ? "Submitting…" : "Submit Application"
              : "Continue"}
            {currentStep === TOTAL_STEPS
              ? submitting ? <SpinnerIcon /> : <CircleCheckIcon />
              : <ArrowRight />}
          </button>
        </div>
      </div>
    </main>
  );
}

// ── Login gate ───────────────────────────────────────────────────────────────
const LockIcon = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

function LoginGate({ onSuccess }: { onSuccess: () => void }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Unable to log in. Please try again.");
        return;
      }
      onSuccess();
    } catch {
      setError("Unable to log in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={s.page}>
      <div className={s.loginCard}>
        <div className={s.loginBrandPanel}>
          <div className={s.loginBrandLogo}>
            <img src="/images/full-logo.svg" alt="VitalFriend" />
          </div>
          <img src="/images/about-us/hero-buddy.png" alt="VitalFriend Buddy" className={s.loginBuddyImg} />
          <p className={s.loginBrandTitle}>Hey, welcome back!</p>
          <p className={s.loginBrandSubtitle}>Sign in to securely manage patient document intake.</p>
        </div>

        <div className={s.loginFormPanel}>
          <div>
            <p className={s.loginTitle}>Admin Login</p>
            <p className={s.loginSubtitle}>Sign in to access the document intake tool</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "24px" }}>
            <div className={s.infoBanner}>
              <InfoIcon />
              <span>This page is restricted to authorized staff. Sign in with your admin account to continue.</span>
            </div>

            <div className={s.fieldGroup}>
              <label className={s.label}>Email or Phone <span className={s.required}>*</span></label>
              <div className={s.inputWrapper}>
                <UserIcon />
                <input className={s.input} type="text" placeholder="you@vitalfrnd.com" autoComplete="username"
                  value={identifier} onChange={e => setIdentifier(e.target.value)} required />
              </div>
            </div>

            <div className={s.fieldGroup}>
              <label className={s.label}>Password <span className={s.required}>*</span></label>
              <div className={s.inputWrapper}>
                <LockIcon />
                <input className={s.input} type="password" placeholder="••••••••" autoComplete="current-password"
                  value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
            </div>

            {error && <p style={errStyle}>{error}</p>}

            <button type="submit" className={`${s.navBtn} ${s.nextBtn}`} disabled={submitting}
              style={{ justifyContent: "center" }}>
              {submitting ? "Signing in…" : "Sign In"}
              {submitting ? <SpinnerIcon /> : <ArrowRight />}
            </button>

            <p className={s.loginFooterNote}>Trouble signing in? Contact your system administrator.</p>
          </form>
        </div>
      </div>
    </main>
  );
}

// ── Top-level page: auth gate in front of the wizard ────────────────────────
export default function DocumentIntakePage() {
  const [authState, setAuthState] = useState<"checking" | "authed" | "unauthed">("checking");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/session")
      .then(res => { if (!cancelled) setAuthState(res.ok ? "authed" : "unauthed"); })
      .catch(() => { if (!cancelled) setAuthState("unauthed"); });
    return () => { cancelled = true; };
  }, []);

  if (authState === "checking") {
    return (
      <main className={s.page}>
        <div className={s.card} style={{ padding: "64px 32px", display: "flex", justifyContent: "center" }}>
          <SpinnerIcon color="#7c3aed" />
        </div>
      </main>
    );
  }

  if (authState === "unauthed") {
    return <LoginGate onSuccess={() => setAuthState("authed")} />;
  }

  return <IntakeWizard onLogout={() => setAuthState("unauthed")} />;
}
