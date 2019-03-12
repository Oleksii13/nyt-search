import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	Button
} from "react-bootstrap";
import API from "../utils/API";

class Books extends Component {
	state = {
		books: []
	};

	componentDidMount() {
		this.loadBooks();
		
	}

	loadBooks=()=>{
		API.showSaved()
			.then(response => this.setState({ books: response.data }))
			.catch(err => console.log(err));

	};

	deleteBooks=(id)=>{
		API.deleteBook(id)
			.then(res=>this.loadBooks())
			.catch(err => console.log(err));
	};

	render() {

		var bookItems = this.state.books.length
			? this.state.books.map((book, i) => {
					return (
						<Container
							key={book._id}
							header={book.title}
							style={{ marginTop: "20px" }}
						>
							<Row>
								<Col xs={3} md={3} lg={3}>
									<img src={book.image} alt="presentation" />
								</Col>
								<Col xs={8} md={8} lg={8}>
									<ListGroup>
										<ListGroupItem>
											<strong>Authors: </strong>Authors:
											{book.author.map(item => {
												return " " + item + " ";
											})}
										</ListGroupItem>
										<ListGroupItem>
											<strong>Publisher: </strong>
											{book.publisher}
										</ListGroupItem>
										<ListGroupItem>
											<strong>Publish Date: </strong>
											{book.publishedDate}
										</ListGroupItem>
										<ListGroupItem>
											<strong>Page Count: </strong>
											{book.pageCount}
										</ListGroupItem>
									</ListGroup>
								</Col>
							</Row>
							<Row>
								<Col xs={11} md={11} lg={11}>
									<h3>Book Description</h3>
									{book.description}

									<Button href={book.url} variant="primary">
										Preview Book
									</Button>

									<Button
										onClick={() => this.deleteBooks(book._id)}
									>
										Delete
									</Button>
								</Col>
							</Row>
						</Container>
					);
			  })
			: <h1>Nothing saved here!</h1>;

		return bookItems;
	}
}

export default Books;
