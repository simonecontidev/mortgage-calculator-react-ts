interface Props{
    style?: string;
}

export const Form = ({style=''}: Props) => {
  return (
    <div className={`${style}`}>Form</div>
  )
}
