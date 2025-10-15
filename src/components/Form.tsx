import { Input, Radio, Button } from "../components";
import { useForm, type SubmitHandler } from "react-hook-form"
import { calculateMortgage, type MortgageType } from "../utils/CalculateMortgage";

interface Props{
    style?: string;
}

interface Inputs{
  mortgageAmount: number;
  mortgageTerm: number;
  interestRate: number;
  mortgageType: MortgageType;
}

export const Form = ({style=''}: Props) => {

  const {register, handleSubmit, formState:{errors}} = useForm<Inputs>();
  const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {
    const {mortgageAmount, mortgageTerm, interestRate, mortgageType} = data;
    const {monthlyPayment, totalRepay} = calculateMortgage(mortgageAmount, mortgageTerm, interestRate, mortgageType);

    console.log({monthlyPayment, totalRepay});
  }

  return (
    <form onSubmit={handleSubmit(sendForm)} className={`${style} bg-white px-6 py-8 md:p-10`}>
        <div className="md:flex md:justify-between items-center md:mb-5">
          <h1 className="text-2xl font-bold mb-2 md:mb-0">Mortgage Calculator</h1>
          <button className="underline text-slate-700 mb-6 cursor-pointer md:mb-0">Clear All</button>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <Input 
          {...register("mortgageAmount", {required: true, valueAsNumber: true, min: { value: 0.01, message: "Must be greater than 0"} } )} 
          label="Mortgage amount" 
          unit='€' 
          position="left"
          error= {errors.mortgageAmount?.type === "required"}
          />

          <div className="md:flex md:gap-6 ">
          <Input {...register("mortgageTerm", {required: true, valueAsNumber: true, min: { value: 0.01, message: "Must be greater than 0"} })}   label="Mortgage terms" unit='years'
          error= {errors.mortgageTerm?.type === "required"}/>
          <Input {...register("interestRate", {required: true, valueAsNumber: true, min: { value: 0.01, message: "Must be greater than 0"} })}   label="Interest rate" unit='%'
          error= {errors.interestRate?.type === "required"}/>
          </div>
        </div>

        <h2 className="text-slate-700 mb-3">Mortgage Type</h2>
        <Radio {...register("mortgageType", {required: true})} label="Repayment"/>
        <Radio  {...register("mortgageType", {required: true})} label="Interest Only"/>
        {errors.mortgageType && <span className="text-Red block mb-6">This field is required</span>}
        <Button/>
    </form>
  )
}
