import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SaveBook from '../components/SaveBook';


class Saved extends Component{

		

	

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>(React) Google Book Search</h1>
					<h4>Search for and Save Books of Interest</h4>
				</Jumbotron>
				<Jumbotron>
					<h4>Saved Books</h4>
					
					<SaveBook />
				</Jumbotron>
				
				
				
			</div>
		);
	}
}



export default Saved