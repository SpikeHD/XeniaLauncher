import { useState, useEffect } from 'preact/hooks'
import GameList from "./GameList/GameList";

const App = () => {
	const [games, setGames] = useState(null);
	
	useEffect(() => {
		async function getGames() {
			setGames(await readGameDir(await getGameDir()))
		}
		getGames()
	}, [])

	return (
		<div id = "app">
			<p>This is a test!</p>
			{(() => {
				if (games) {
					return <GameList games={games} />
				}
			})()}
		</div>
	)
}

export default App;
