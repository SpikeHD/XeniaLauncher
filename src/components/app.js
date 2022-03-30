import { useState, useEffect } from 'preact/hooks'
import GameList from "./GameList/GameList";
import TopBar from "./TopBar"

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
			<TopBar />
			{(() => {
				if (games) {
					return <GameList games={games} />
				}
			})()}
		</div>
	)
}

export default App;
