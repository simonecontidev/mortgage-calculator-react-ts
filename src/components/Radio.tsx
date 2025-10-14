interface Props{
    style?: string;
    label: string;
}

export const Radio = ({label}: Props) => {
  return (
        <label htmlFor="{label}" className="border border-slate-500 rounded-sm flex items-center gap-2 px-2 h-[46px] mb-3 w-full cursor-pointer hover:border-Lime hover:bg-Lime/10 has-checked:bg-Lime/10 has-checked:border-Lime">
        <div className="relative">
        <input name='Mortgage Type' type="radio" id={label} className="appearance-none size-5 border-1 checked:border-Lime rounded-full peer"/>
        <span className="absolute size-3 rounded-full top-[4px] left-[4px] bg-Lime opacity-0 peer-checked:opacity-100"></span>
        </div>
        <span>
            {label}
        </span>
        </label>
  )
}
