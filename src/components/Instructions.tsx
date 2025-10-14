interface Props{
    style?: string;
}

export const Instructions = ({style=''}: Props) => {
  return (
    <div className={`${style}`}>Instructions</div>
  )
}
