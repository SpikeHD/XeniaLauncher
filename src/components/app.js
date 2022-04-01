import { useState, useEffect } from 'preact/hooks'
import GameList from "./GameList/GameList";
import TopBar from "./TopBar"

const App = () => {
	const [games, setGames] = useState(null);

	async function getGames() {
		setGames(null)
		setGames(await readGameDir(await getGameDir()))
	}

	useEffect(() => {
		getGames()
	}, [])

	return (
		<div id = "app">
			<TopBar gameUpdateFn={getGames} />
			{ games ? <GameList games={games} /> : null }
		</div>
	)
}

export default App;
