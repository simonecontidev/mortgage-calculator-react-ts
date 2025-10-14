import { Input } from "../components";
interface Props{
    style?: string;
}

export const Form = ({style=''}: Props) => {
  return (
    <div className={`${style} bg-white px-6 py-8`}>
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>
        <div className="flex flex-col gap-6">
        <Input label="Mortgage amount" unit='€' position="left"/>
        <Input label="Mortgage terms" unit='years'/>
        <Input label="Interest rate" unit='%'/>
        </div>
    </div>
  )
}
