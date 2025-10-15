import { Form, Results, Instructions } from "../components";
import { useContext } from "react"; // Added to use context if needed in the future
import { PaymentContext } from "../contexts/payment-context"; // Added to use context 

interface Props{
    style?: string;
}

export const Calculator = ({style=''}: Props) => {

  const context = useContext(PaymentContext); 

  return (
    <div className={`${style} md:max-w-[688px] md:my-10 md:rounded-2xl overflow-hidden lg:flex lg:max-w-[1008px]`}>
        <Form style="lg:flex-1"/>
        <div className="lg:flex-1 bg-white">
          {context.results.monthlyPayment === 0 ? <Instructions/> :  <Results/>
          
        }
            
           
        </div>
    </div>
  )
}
