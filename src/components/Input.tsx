interface Props{
    style?: string;
    label: string;
    unit: string;
    position?: 'right' | 'left';
}

export const Input = ({style='', label, unit, position='right'}: Props) => {
  return (
    <div className={`${style}`}>
        <label className="mb-3 block" htmlFor="{label}">{label}</label>
        <div className="relative">
        <input 
        type="number" 
        name="" 
        id={label} 
        className={`outline ${position==='right' ? 'pl-3' : 'pl-12' } outline-slate-500  rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full h-[46px] font-bold`}
        />
        <span className={`bg-slate-100  absolute top-0 ${position === 'right' ? 'right-0 rounded-r-sm' : 'left-0 rounded-l-sm'} h-full px-3 grid place-content-center`}>{unit}</span>
        </div>
    </div>
  )
}
