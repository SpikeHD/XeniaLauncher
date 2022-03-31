import { useState } from 'preact/hooks';
import Button from './Button';

const FileSelect = ({ id, text, onchange, path }) => {
  const [file, setFile] = useState(null);

  const handleDialog = async () => {
		const files = await openFile()
    const first = files[0]

    setFile(first)
    
    // TODO save file to config for future use
  }

  return (
    <div class="file-select">
      <Button id={id} text={
        <div>
          <p style="display: inline-block; margin: 0 10px 0 0">{text}</p>
          <img style="display: inline-block; width: 20px; vertical-align: middle;" src="assets/images/file_folder.svg" />
        </div>
      } onclick={handleDialog} length="170px" />
      <p class="file-path">{file}</p>
    </div>
  );
}

export default FileSelect