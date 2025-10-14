interface Props{
    style?: string;
    label: string;
}

export const Input = ({style='', label}: Props) => {
  return (
    <div className={`${style}`}>
        <label htmlFor="{label}">{label}</label>
        <input type="number" name="" id={label} />
    </div>
  )
}
