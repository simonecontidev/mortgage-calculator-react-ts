import { useState } from "react";
import { PaymentContext, type Results } from "./payment-context";

interface Props{
  children: React.ReactNode
}

export const PaymentContextProvider = ({children}:Props) => {

    const [results, setResults] = useState<Results>({
        monthlyPayment:0,
        totalRepay: 0,
    });
  
    return(
        <PaymentContext.Provider value={{results, setResults}}>
      {children}
    </PaymentContext.Provider>
    )

}

