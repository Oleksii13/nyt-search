import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Books from '../components/Books';
import API from '../utils/API';

class Search extends Component {
	state = {
		title: "",
		books: [],
		
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	Press = event => {
		API.getBooks(this.state.title )
			.then(response => {
				this.setState({ books: response.data });
				
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>(React) Google Book Search</h1>
					<h4>Search for and Save Books of Interest</h4>
				</Jumbotron>
				<Jumbotron>
					<h4>Book Search</h4>
					<h6>Book</h6>
					<InputGroup className="mb-3">
						<FormControl
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							placeholder="Books name"
							name="title"
							value={this.state.title}
							onChange={this.handleChange}
						/>
						<InputGroup.Append>
							<Button
								variant="outline-secondary"
								onClick={this.Press}
							>
								Search
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Jumbotron>
				
				<Books books={this.state.books}/>
				
			</div>
		);
	}
}

export default Search;