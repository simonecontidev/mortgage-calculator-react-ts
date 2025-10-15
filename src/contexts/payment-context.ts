
import { createContext } from "react";

export interface Results  {
    monthlyPayment: number; 
    totalRepay: number;
}             

export interface PaymentContextType {
    results: Results;
    setResults: (results: Results) => void;
}

export const PaymentContext = createContext<PaymentContextType>({
    results: {monthlyPayment: 0, totalRepay: 0},
    setResults: () => {},
});