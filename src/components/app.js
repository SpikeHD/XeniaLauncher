import GameList from "./GameList/GameList";

const App = () => {

	return ( 
		<div id = "app">
			<p> Hello from Neutralino and Preact! </p>
			<GameList games = {
				[{
					name: "Super Mario Bros.",
					image: "https://via.placeholder.com/150"
				},{
					name: "Super Mario Bros. 2",
					image: "https://via.placeholder.com/150"
				},
				{
					name: "Super Mario Bros. 3",
					image: "https://via.placeholder.com/150"
				},
				{
					name: "Super Mario Bros. 4",
					image: "https://via.placeholder.com/150"
				},
				{
					name: "Super Mario Bros. 5",
					image: "https://via.placeholder.com/150"
				}]
			}/>
		</div>
	)
}

export default App;
