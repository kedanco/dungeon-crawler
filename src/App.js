import React, { Component } from "react";
import Map from "./features/map/index";
import World from "./features/world";
import Player from "./features/player/player.js";

class App extends Component {
	render() {
		return (
			<div>
				<World />
			</div>
		);
	}
}

export default App;
