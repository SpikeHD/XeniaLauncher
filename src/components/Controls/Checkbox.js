import { useState, useEffect } from 'preact/hooks'

const Checkbox = ({ onchange, text, defaultCheck }) => {
  const [checked, setChecked] = useState()

  useEffect(() => {
    async function check() {
      setChecked(await defaultCheck)
    }
    check()
  })

  return (
    <div class="checkbox">
      <input type="checkbox" onchange={onchange} checked={checked} />
      <label>{text}</label>
    </div>
  )
}

export default Checkbox