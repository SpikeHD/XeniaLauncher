import { useState } from 'preact/hooks';
import Button from './Button';

const FileSelect = ({ id, text, openFn, onchange, path, showPath, saveEntry }) => {
  const [file, setFile] = useState(null);

  const handleDialog = async () => {
		const file = await openFn()

    setFile(file)
    
    // TODO save file to config for future use
    if (saveEntry) Neutralino.storage.setData(saveEntry, file)
  }

  return (
    <div class="file-select">
      <Button id={id} text={
        <div>
          <p style="display: inline-block; margin: 0 10px 0 0">{text}</p>
          <img style="display: inline-block; width: 20px; vertical-align: middle;" src="assets/images/file_folder.svg" />
        </div>
      } onclick={handleDialog} length="170px" />
      { showPath ? <p class="file-path">{file}</p> : null }
    </div>
  );
}

export default FileSelect