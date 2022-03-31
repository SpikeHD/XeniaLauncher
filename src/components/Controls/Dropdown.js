import { useState, useEffect } from 'preact/hooks'

const Dropdown = ({ text, options, defaultOption, onchange }) => {
  const [selected, setSelected] = useState()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleSelect = (option) => {
    setSelected(option)
    setOpen(false)
    onchange(option)
  }

  useEffect(() => {
    async function setOption() {
      const defOpt = await defaultOption
      if (!selected) setSelected(options.find(o => o.value === defOpt) || options[0])
    }
    setOption()
  })

  return (
    <div class="dropdown">
      <div class="dropdown-title" style="padding-bottom: 4px">{text}</div>
      <div class="dropdown-selected" onClick={handleClick}>
        {selected?.label}
      </div>
      {open &&
        <div class="dropdown-options">
          {options.map(option => (
            <li key={option.value} class="dropdown-option" onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </div>
      }
    </div>
  )
}

export default Dropdown