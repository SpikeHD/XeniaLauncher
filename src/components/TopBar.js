import { useState } from 'preact/hooks'

import Checkbox from "./Controls/Checkbox"
import Button from "./Controls/Button"
import FileSelect from "./Controls/FileSelect"
import Dropdown from "./Controls/Dropdown"

const TopBar = ({ gameUpdateFn }) => {
  return (
    <div class="topbar">

      <Button onclick={async () => {
        launchGame()
      }} text="Launch Xenia" />

      <a style="padding-right: 12px" href="https://github.com/xenia-project/release-builds-windows/releases/latest/download/xenia_master.zip">
        <img style="width: 16px;" src="assets/images/download.svg" />
      </a>

      <Checkbox onchange={(e) => {
        const enabled = e.target.checked
        setCLIConfigOption('vsync', enabled)
      }} text="Enable VSync" defaultCheck={getCLIConfigOption('vsync')} />
      
      <Checkbox onchange={(e) => {
        const enabled = e.target.checked
        setCLIConfigOption('protect_zero', enabled)
      }} text="Protect Zero" defaultCheck={getCLIConfigOption('protect_zero')} />

      <Dropdown onchange={(option) => {
        const value = option.value
        setCLIConfigOption('gpu', value)
      }} text="GPU Backend:" options={[{
        label: 'Any (reccomended)',
        value: 'any'
      }, {
        label: 'Direct3D 12',
        value: 'd3d12'
      }, {
        label: 'Vulkan (not recommended)',
        value: 'vulkan'
      }, {
        label: 'None',
        value: 'null'
      }]} defaultOption={getCLIConfigOption('gpu')} />

      <FileSelect id="xeniaPath" text="Set Xenia File" openFn={openFile} saveEntry="xeniaPath" />
      <FileSelect id="gamePath" text="Set Game Path" openFn={openFolder} saveEntry="gamePath" onSave={gameUpdateFn} />

    </div>
  )
}

export default TopBar