type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

function Checkbox({ ...props }: CheckboxProps) {
  return <input type="checkbox" {...props} />
}

export default Checkbox
