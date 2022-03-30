import Checkbox from "./Controls/Checkbox"
import Button from "./Controls/Button"

const TopBar = () => {
  return (
    <div class="topbar">
      <Button onclick={() => {
        console.log('Launch Xenia!')
      }} text="Launch Xenia" />
      <Checkbox onchange={(e) => {
        console.log(e.target.checked)
        const enabled = e.target.checked ? 'enabled' : 'disabled'
        console.log("Vsync: " + enabled)
      }} text="Enable VSync" checked={null} />
    </div>
  )
}

export default TopBar