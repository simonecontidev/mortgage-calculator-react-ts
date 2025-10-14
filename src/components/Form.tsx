import { Input, Radio, Button } from "../components";
interface Props{
    style?: string;
}

export const Form = ({style=''}: Props) => {
  return (
    <div className={`${style} bg-white px-6 py-8`}>
        <h1 className="text-2xl font-bold mb-2">Mortgage Calculator</h1>
        <div className="flex flex-col gap-6 mb-6">
        <Input label="Mortgage amount" unit='€' position="left"/>
        <Input label="Mortgage terms" unit='years'/>
        <Input label="Interest rate" unit='%'/>
        </div>

        <h2 className="text-slate-700 mb-3">Mortgage Type</h2>
        <Radio label="Repayment"/>
        <Radio label="Interest Only"/>

        <Button/>
    </div>
  )
}
