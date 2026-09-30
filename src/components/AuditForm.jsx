import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Plus, Video } from "lucide-react";

export default function AuditForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    url: "",
    phone: "",
    notes: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    if (name === "name" && !value) {
      error = "Full Name is required";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (name === "url") {
      const urlRegex =
        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/;
      if (!value) {
        error = "Website URL is required";
      } else if (!urlRegex.test(value)) {
        error = "Please enter a valid URL (e.g. www.example.com)";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const validate = () => {
    const isNameValid = validateField("name", state.name);
    const isEmailValid = validateField("email", state.email);
    const isUrlValid = validateField("url", state.url);
    const isPhoneValid = validateField("phone", state.phone);
    return isNameValid && isEmailValid && isUrlValid && isPhoneValid;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const SHEETDB_URL = import.meta.env.VITE_SHEETDB_URL;

    if (!SHEETDB_URL) {
      console.error(
        "VITE_SHEETDB_URL is missing. Please set VITE_SHEETDB_URL in your .env file."
      );
      alert(
        "Configuration error: Missing VITE_SHEETDB_URL. Please add your SheetDB API endpoint to your .env file."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              ...state,
              date: new Date().toLocaleString("en-GB"),
            },
          ],
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("SheetDB API error response:", errorData);
        throw new Error(errorData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Something went wrong. Please try again or contact me directly.");
    } finally {
      setLoading(false);
    }
  };

  const clearField = (field) => {
    setState((prev) => ({ ...prev, [field]: "" }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "48px",
          background: "var(--primary)",
          borderRadius: "24px",
          textAlign: "center",
          color: "white",
        }}
      >
        <CheckCircle
          size={48}
          style={{ color: "var(--secondary)", marginBottom: "16px" }}
        />
        <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "8px" }}>
          You're on the list!
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            margin: 0,
            maxWidth: "none",
          }}
        >
          I'm based in Helsinki, so I'll review your site during my morning
          hours and get back to you within 48 hours with your 2-minute video breakdown.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "4px" }}
    >
      <div className="form-field">
        <fieldset className={errors.name ? "has-error" : ""}>
          <legend>
            <label htmlFor="audit-name">
              Full Name <span className="required">*</span>
            </label>
          </legend>
          <div className="input-wrapper">
            <input
              id="audit-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="e.g. Anna Lindqvist"
              value={state.name}
              aria-invalid={!!errors.name}
              onBlur={handleBlur}
              onChange={(e) => {
                const val = e.target.value;
                setState((prev) => ({ ...prev, name: val }));
                if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
              }}
            />
            {state.name && (
              <button
                type="button"
                className="clear-btn"
                aria-label="Clear full name"
                onClick={() => clearField("name")}
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </fieldset>
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-field">
        <fieldset className={errors.url ? "has-error" : ""}>
          <legend>
            <label htmlFor="audit-url">
              Website URL <span className="required">*</span>
            </label>
          </legend>
          <div className="input-wrapper">
            <input
              id="audit-url"
              type="text"
              name="url"
              autoComplete="url"
              placeholder="e.g. www.yourspa.com"
              value={state.url}
              aria-invalid={!!errors.url}
              onBlur={handleBlur}
              onChange={(e) => {
                const val = e.target.value;
                setState((prev) => ({ ...prev, url: val }));
                if (errors.url) setErrors((prev) => ({ ...prev, url: null }));
              }}
            />
            {state.url && (
              <button
                type="button"
                className="clear-btn"
                aria-label="Clear website URL"
                onClick={() => clearField("url")}
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </fieldset>
        {errors.url && <span className="form-error">{errors.url}</span>}
      </div>

      <div className="form-field">
        <fieldset className={errors.email ? "has-error" : ""}>
          <legend>
            <label htmlFor="audit-email">
              Email <span className="required">*</span>
            </label>
          </legend>
          <div className="input-wrapper">
            <input
              id="audit-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="e.g. anna@yourspa.com"
              value={state.email}
              aria-invalid={!!errors.email}
              onBlur={handleBlur}
              onChange={(e) => {
                const val = e.target.value;
                setState((prev) => ({ ...prev, email: val }));
                if (errors.email)
                  setErrors((prev) => ({ ...prev, email: null }));
              }}
            />
            {state.email && (
              <button
                type="button"
                className="clear-btn"
                aria-label="Clear email address"
                onClick={() => clearField("email")}
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </fieldset>
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-field">
        <fieldset className={errors.phone ? "has-error" : ""}>
          <legend>
            <label htmlFor="audit-phone">
              WhatsApp Number <span className="optional">(Optional)</span>
            </label>
          </legend>
          <div className="input-wrapper">
            <input
              id="audit-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="e.g. +358 41 234 5678"
              value={state.phone}
              aria-invalid={!!errors.phone}
              onBlur={handleBlur}
              onChange={(e) => {
                const val = e.target.value;
                setState((prev) => ({ ...prev, phone: val }));
                if (errors.phone)
                  setErrors((prev) => ({ ...prev, phone: null }));
              }}
            />
            {state.phone && (
              <button
                type="button"
                className="clear-btn"
                aria-label="Clear WhatsApp number"
                onClick={() => clearField("phone")}
              >
                <XCircle size={16} />
              </button>
            )}
          </div>
        </fieldset>
        {errors.phone && (
          <span className="form-error">{errors.phone}</span>
        )}
      </div>

      {!isExpanded ? (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="expand-btn"
        >
          <Plus size={16} /> Add specific notes
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="form-field">
            <fieldset>
              <legend>
                <label htmlFor="audit-notes">Any specific notes?</label>
              </legend>
              <div className="input-wrapper">
                <textarea
                  id="audit-notes"
                  name="notes"
                  placeholder="Tell me about your spa, your goals, or anything specific you'd like improved..."
                  value={state.notes}
                  onChange={(e) => {
                    const val = e.target.value;
                    setState((prev) => ({ ...prev, notes: val }));
                  }}
                />
              </div>
            </fieldset>
          </div>
        </motion.div>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
        style={{ width: "100%", marginTop: "16px", opacity: loading ? 0.7 : 1 }}
        aria-label="Request your free 2-minute video audit"
      >
        {loading ? (
          "Sending…"
        ) : (
          <>
            Send Me the 2-Minute Video{" "}
            <Video size={18} style={{ marginLeft: "10px" }} />
          </>
        )}
      </button>
      <p
        style={{
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          textAlign: "center",
          marginTop: "12px",
          maxWidth: "none",
        }}
      >
        No spam. No sales pressure. Just a 2-minute video showing what to fix.
      </p>
    </form>
  );
}
