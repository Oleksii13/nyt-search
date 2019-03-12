import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Search} />
					<Route exact path="/saved" component={Saved} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
