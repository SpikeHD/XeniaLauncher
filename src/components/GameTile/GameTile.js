import {} from 'preact/hooks'

const GameTile = ({name, path}) => {
  const handleOnClick = () => {
    launchGame(path)
  }

  return (
    <div class="game-tile" onclick={handleOnClick}>
      <div class="game-image">
        <img src="assets/images/disc.svg" />
      </div>
      <div class="game-title">
        {name}
      </div>
    </div>
  )
}

export default GameTile