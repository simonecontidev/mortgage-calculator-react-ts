// src/App.tsx (oppure src/components/MortgageForm.tsx)
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useUrlMortgageSync, { MortgageFormState } from "../hooks/useUrlMortgageSync";
import { clearQuery } from "../utils/urlState";

function toNumber(value: string, fallback = 0) {
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

export default function App() {
  const [form, setForm] = useLocalStorage<MortgageFormState>("mortgage:form", {
    amount: 250_000,
    annualRate: 3.5,
    years: 25,
  });

  // 🔗 URL sync (step 3)
  useUrlMortgageSync(form, setForm);

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, amount: Math.max(0, toNumber(e.target.value, form.amount)) });

  const onChangeRate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, annualRate: Math.max(0, toNumber(e.target.value, form.annualRate)) });

  const onChangeYears = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, years: Math.max(1, Math.floor(toNumber(e.target.value, form.years))) });

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } catch {
      // fallback semplice
      prompt("Copy this URL:", window.location.href);
    }
  };

  const resetAll = () => {
    // Resetta stato
    setForm({ amount: 250_000, annualRate: 3.5, years: 25 });
    // Pulisce query
    clearQuery(["amount", "rate", "years"]);
    // Pulisce localStorage chiave form
    try { localStorage.removeItem("mortgage:form"); } catch {}
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1>Mortgage Calculator</h1>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={copyShareLink}>Copy share link</button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </header>

      <section
        style={{
          background: "var(--card, #f8fafc)",
          border: "1px solid var(--ring, #e2e8f0)",
          borderRadius: 12,
          padding: 16,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
          marginTop: 12,
        }}
      >
        <label style={{ display: "grid", gap: 6 }}>
          <span>Amount</span>
          <input
            type="number"
            inputMode="decimal"
            value={form.amount}
            onChange={onChangeAmount}
            min={0}
            step={1000}
            style={inputStyle}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Interest rate (%)</span>
          <input
            type="number"
            inputMode="decimal"
            value={form.annualRate}
            onChange={onChangeRate}
            min={0}
            step={0.05}
            style={inputStyle}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span>Years</span>
          <input
            type="number"
            inputMode="numeric"
            value={form.years}
            onChange={onChangeYears}
            min={1}
            step={1}
            style={inputStyle}
          />
        </label>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  appearance: "none",
  WebkitAppearance: "none",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid var(--ring, #e2e8f0)",
  outline: "none",
  fontSize: 16,
  background: "var(--bg, #fff)",
  color: "var(--fg, #0f172a)",
};