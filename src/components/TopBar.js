import Checkbox from "./Controls/Checkbox"
import Button from "./Controls/Button"
import FileSelect from "./Controls/FileSelect"

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

      <FileSelect id="xeniaPath" text="Set Xenia File" openFn={openFile} saveEntry="xeniaPath" />
      <FileSelect id="gamePath" text="Set Game Path" openFn={openFolder} saveEntry="gamePath" />
    </div>
  )
}

export default TopBar