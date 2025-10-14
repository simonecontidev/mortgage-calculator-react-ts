import { Payments } from "./Payments";
interface Props{
    style?: string;
}

export const Results = ({style=''}: Props) => {
  return (
    <div className={`${style} bg-slate-900 text-white py-8 px-6 ` }>
        <h2 className="text-2xl mb-6">Your results</h2>
        <p className="text-slate-300 mb-6">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repauments" again.</p>
        <Payments/>
    </div>
  )
}
