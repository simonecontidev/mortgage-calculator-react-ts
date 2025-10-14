import { Form, Results, Instructions } from "../components";

interface Props{
    style?: string;
}

export const Calculator = ({style=''}: Props) => {
  return (
    <div className={`${style} w-[375px]`}>
        <Form/>
        <div>
            <Instructions/>
            <Results/>
        </div>
    </div>
  )
}
