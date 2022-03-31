import Checkbox from "./Controls/Checkbox"
import Button from "./Controls/Button"
import FileSelect from "./Controls/FileSelect"

const TopBar = () => {
  return (
    <div class="topbar">
      <Button onclick={async () => {
        launchGame()
      }} text="Launch Xenia" />
      <Checkbox onchange={(e) => {
        const enabled = e.target.checked
      }} text="Enable VSync" checked={null} />

      <FileSelect id="xeniaPath" text="Set Xenia File" openFn={openFile} saveEntry="xeniaPath" />
      <FileSelect id="gamePath" text="Set Game Path" openFn={openFolder} saveEntry="gamePath" />
    </div>
  )
}

export default TopBar