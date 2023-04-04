import '../css/btn.css'

export const Button = ({onClickFn, value}) => {
  return (
    <button onClick={onClickFn}> {value} </button>
  )
}


