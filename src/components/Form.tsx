import { Input } from "../components";
interface Props{
    style?: string;
}

export const Form = ({style=''}: Props) => {
  return (
    <div className={`${style}`}>
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>
        <Input label="Mortgage amount"/>
        <Input label="Mortgage terms"/>
        <Input label="Interest rate"/>
    </div>
  )
}
