import GameTile from '../GameTile/GameTile.js'

const GameList = ({ games }) => {
  

  return (
    <div class="game-list">
      {games.map(game => (
        <GameTile {...game} />
      ))}
    </div>
  )
}

export default GameList