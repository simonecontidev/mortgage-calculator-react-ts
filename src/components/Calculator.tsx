import { Form, Results, Instructions } from "../components";

interface Props{
    style?: string;
}

export const Calculator = ({style=''}: Props) => {
  return (
    <div className={`${style}`}>
        <Form/>
        <div>
            <Instructions/>
            <Results/>
        </div>
    </div>
  )
}
