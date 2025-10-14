import { Input, Radio, Button } from "../components";
interface Props{
    style?: string;
}

export const Form = ({style=''}: Props) => {
  return (
    <div className={`${style} bg-white px-6 py-8 md:p-10`}>
        <div className="md:flex md:justify-between items-center md:mb-4 md:mb-5">
          <h1 className="text-2xl font-bold mb-2 md:mb-0">Mortgage Calculator</h1>
          <button className="underline text-slate-700 mb-6 cursor-pointer md:mb-0">Clear All</button>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <Input label="Mortgage amount" unit='€' position="left"/>
          <div className="md:flex md:gap-6 ">
          <Input label="Mortgage terms" unit='years'/>
          <Input label="Interest rate" unit='%'/>
          </div>
        </div>

        <h2 className="text-slate-700 mb-3">Mortgage Type</h2>
        <Radio label="Repayment"/>
        <Radio label="Interest Only"/>

        <Button/>
    </div>
  )
}
