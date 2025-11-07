import { useMemo } from "react";

export type MortgageInput = {
  amount: number;        // capitale
  annualRate: number;    // es. 3.5 (percentuale)
  years: number;         // durata in anni
  paymentsPerYear?: number; // default 12
};

export type AmortRow = {
  period: number;    // 1..N
  payment: number;   // rata costante
  interest: number;  // quota interessi
  principal: number; // quota capitale
  balance: number;   // residuo dopo il pagamento
};

export function calcMonthlyPayment({ amount, annualRate, years, paymentsPerYear = 12 }: MortgageInput) {
  const r = (annualRate / 100) / paymentsPerYear;
  const n = years * paymentsPerYear;
  if (r === 0) return amount / n;
  const m = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  return m;
}

export function buildAmortization(input: MortgageInput): AmortRow[] {
  const { amount, annualRate, years, paymentsPerYear = 12 } = input;
  const payment = calcMonthlyPayment(input);
  let balance = amount;
  const r = (annualRate / 100) / paymentsPerYear;
  const n = years * paymentsPerYear;
  const rows: AmortRow[] = [];

  for (let period = 1; period <= n; period++) {
    const interest = balance * r;
    const principal = Math.min(payment - interest, balance);
    balance = Math.max(balance - principal, 0);
    rows.push({ period, payment, interest, principal, balance });
  }
  return rows;
}

export default function useMortgageCalculator(input: MortgageInput) {
  return useMemo(() => {
    const payment = calcMonthlyPayment(input);
    const schedule = buildAmortization(input);
    const totalPaid = payment * schedule.length;
    const totalInterest = schedule.reduce((acc, r) => acc + r.interest, 0);
    return { payment, schedule, totalPaid, totalInterest };
  }, [input.amount, input.annualRate, input.years, input.paymentsPerYear]);
}