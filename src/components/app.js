import { useState, useEffect } from 'preact/hooks'
import GameList from "./GameList/GameList";
import TopBar from "./TopBar"

const App = () => {
	const [games, setGames] = useState(null);

	async function getGames() {
		const dir = await getGameDir()
		const files = await readGameDir(dir)

		setGames(files)
	}

	useEffect(() => {
		getGames()
	}, [])

	return (
		<div id = "app">
			<TopBar gameUpdateFn={getGames} />
			{ games?.length > 0 ? <GameList games={games} /> : null }
		</div>
	)
}

export default App;
