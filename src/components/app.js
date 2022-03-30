import { useState, useEffect } from 'preact/hooks'
import GameList from "./GameList/GameList";
import Button from "./Button/Button";

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
			<Button onclick={() => {
				console.log('Launch Xenia!')
			}} text="Launch Xenia" />
			{(() => {
				if (games) {
					return <GameList games={games} />
				}
			})()}
		</div>
	)
}

export default App;
