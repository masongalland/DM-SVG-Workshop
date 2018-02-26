import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SingleTri from "./Components/SingleTri";
import TriTriangle from "./Components/TriTriangle";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">SVG Animations</h1>
				</header>
				<div className="triangles">
					<SingleTri />
					<TriTriangle />
				</div>
			</div>
		);
	}
}

export default App;
