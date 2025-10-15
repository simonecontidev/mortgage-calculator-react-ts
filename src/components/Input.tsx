interface Props{
    style?: string;
    label: string;
    unit: string;
    position?: 'right' | 'left';
    error: boolean;
}

export const Input = ({style='', label, unit, position='right', error, ...props }: Props) => {
  return (
    <div className={`${style} md:w-full`}>
        <label className="mb-3 block text-slate-700 font-bold" htmlFor="{label}">{label}</label>
        <div className="relative">
  <input 
  {...props}
  type="number" 
  step="0.01"
  id={label} 
        className={`outline ${position==='right' ? 'pl-4' : 'pl-14' } ${error ? 'outline-Red' : 'outline-slate-500'}  rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full h-[46px] font-bold focus:outline-Lime peer cursor-pointer`}
        />
        <span className={`${error ? 'bg-Red' : 'bg-slate-100'}   peer-focus:bg-Lime absolute top-0 ${position === 'right' ? 'right-0 rounded-r-sm' : 'left-0 rounded-l-sm'} h-full px-3 grid place-content-center ${error ? 'text-white' : 'text-slate-700'} `}>{unit}</span>
        </div>

        {error && <span className="text-Red text-sm my-3">This field is required</span>}
    </div>
  )
}
