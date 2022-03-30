import {} from 'preact'

const GameTile = ({name, image}) => (
  <div class="game-tile">
    <div class="game-title">
      {name}
    </div>
    <div class="game-image">
      <img src={image} />
    </div>
  </div>
)

export default GameTile