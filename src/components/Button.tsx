interface Props{
    style?: string;
}

export const Button = ({style=''}: Props) => {
  return (
    <button
    type="submit" 
    className={`${style} bg-Lime h-[54px] w-full rounded-full content-center text-center hover:bg-Lime/50 cursor-pointer`}>
    Calculate Repayments
    </button>
  )
}
