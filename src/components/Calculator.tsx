import { Form, Results, Instructions } from "../components";

interface Props{
    style?: string;
}

export const Calculator = ({style=''}: Props) => {
  return (
    <div className={`${style} md:max-w-[688px] md:my-10 md:rounded-2xl overflow-hidden lg:flex lg:max-w-[1008px]`}>
        <Form style="lg:flex-1"/>
        <div className="lg:flex-1 bg-white">
            <Instructions/>
            <Results/>
        </div>
    </div>
  )
}
