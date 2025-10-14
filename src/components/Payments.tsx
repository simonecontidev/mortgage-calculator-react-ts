interface Props{
    style?: string;
}

export const Payments = ({style=''}: Props) => {
  return (
    <div className={`${style} bg-black/25 border-t-4 border-Lime rounded-lg py-6 px-4` }>
    <h3 className="text-Slate-300 mb-2">Your Monthly Payments</h3>
    <p className="text-Lime text-[40px] font-bold mb-4 ">€292130</p>
    <hr className="text-Slate-300 mb-4" />
    <h3 className="text-Slate-300 mb-2">Total you'lll repay pver the term</h3>
    <p className="text-2xl font-bold">€292130</p>
    </div>
  )
}
