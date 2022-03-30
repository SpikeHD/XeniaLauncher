

const Checkbox = ({ onchange, text, checked }) => {
  return (
    <div class="checkbox">
      <input type="checkbox" onchange={onchange} checked={checked} />
      <label>{text}</label>
    </div>
  )
}

export default Checkbox