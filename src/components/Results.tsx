interface Props{
    style?: string;
}

export const Results = ({style=''}: Props) => {
  return (
    <div className={`${style}`}>Results</div>
  )
}
