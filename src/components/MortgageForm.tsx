// src/App.tsx (oppure src/components/MortgageForm.tsx)
import React from "react";
import useLocalStorage from "./hooks/useLocalStorage"; // <-- percorso corretto
// Se hai già un hook di calcolo, puoi importarlo qui: import useMortgageCalculator from "./hooks/useMortgageCalculator";

type MortgageFormState = {
  amount: number;      // capitale
  annualRate: number;  // tasso % annuo (es. 3.5)
  years: number;       // durata in anni
};

// utilità per convertire input string -> number in modo sicuro
function toNumber(value: string, fallback = 0) {
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

export default function App() {
  // 1) sostituisci useState con useLocalStorage
  const [form, setForm] = useLocalStorage<MortgageFormState>("mortgage:form", {
    amount: 250_000,
    annualRate: 3.5,
    years: 25,
  });

  // 2) handlers controllati per i 3 input
  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, amount: toNumber(e.target.value, form.amount) });

  const onChangeRate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, annualRate: toNumber(e.target.value, form.annualRate) });

  const onChangeYears = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, years: Math.max(1, Math.floor(toNumber(e.target.value, form.years))) });

  // 3) (opzionale) se già calcoli la rata qui
  // const { payment } = useMortgageCalculator(form);

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <h1>Mortgage Calculator</h1>

      {/* Form card */}
      <section
        style={{
          background: "var(--card, #f8fafc)",
          border: "1px solid var(--ring, #e2e8f0)",
          borderRadius: 12,
          padding: 16,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
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

      {/* (opzionale) preview della rata se calcoli qui
      <div className="card" style={{ marginTop: 12 }}>
        Monthly payment: <strong>{payment.toFixed(2)}</strong>
      </div>
      */}
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