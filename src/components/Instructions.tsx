interface Props{
    style?: string;
}

export const Instructions = ({style=''}: Props) => {
  return (
    <div className={`${style}  bg-Slate-900 text-white py-8 px-6 text-center lg:h-full lg:rounded-bl-[80px]` }>
        <img 
        src="/assets/murtgage.jpg" 
        alt="murtgage"
        className="m-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Your results</h2>
        <p className="text-Slate-300">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
    </div>
  )
}
