import {} from 'preact'

const GameTile = ({name, path}) => (
  <div class="game-tile">
    <div class="game-image">
      <img src="assets/images/disc.svg" />
    </div>
    <div class="game-title">
      {name}
    </div>
  </div>
)

export default GameTile