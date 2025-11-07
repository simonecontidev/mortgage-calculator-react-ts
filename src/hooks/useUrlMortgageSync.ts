import { useEffect, useRef } from "react";
import { readQueryNumber, writeQuery } from "../utils/urlState";

export type MortgageFormState = {
  amount: number;
  annualRate: number;
  years: number;
};

// Sincronizza LOCAL ↔ URL (one-shot read, continuous write)
export default function useUrlMortgageSync(
  form: MortgageFormState,
  setForm: (next: MortgageFormState) => void
) {
  const didInit = useRef(false);

  // 1) On mount: leggi URL e applica SOLO una volta
  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    const next: MortgageFormState = {
      amount: readQueryNumber("amount", form.amount),
      annualRate: readQueryNumber("rate", form.annualRate),
      years: readQueryNumber("years", form.years),
    };

    // Se i valori letti sono diversi, aggiorna lo stato
    if (
      next.amount !== form.amount ||
      next.annualRate !== form.annualRate ||
      next.years !== form.years
    ) {
      setForm(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2) On form change: scrivi su URL
  useEffect(() => {
    writeQuery({
      amount: form.amount,
      rate: form.annualRate,
      years: form.years,
    });
  }, [form.amount, form.annualRate, form.years]);
}