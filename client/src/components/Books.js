import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	Button,
	Image
} from "react-bootstrap";
import API from "../utils/API";

class Books extends Component {
	

	Safe=(book)=>{ 
		
		API.saveBook(book)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
  };
	

	render() {

		let something=this.props.books.filter((book)=>{return (book.volumeInfo.imageLinks!==undefined )});
		console.log(something);
		let bookItems;
		bookItems=(something) ?( 
			something.map((book, i) => {
				return (
					<Container
						key={book.id}
						header={book.volumeInfo.title}
						style={{ marginTop: "20px" }}
					>
						<Row>
							<Col xs={3} md={3} lg={3}>
								<Image
									src={book.volumeInfo.imageLinks.thumbnail}
									alt="presentation"
								/>
							</Col>
							<Col xs={8} md={8} lg={8}>
								<ListGroup>
									<ListGroupItem>
										<strong>Title: </strong>
										{book.volumeInfo.title}
									</ListGroupItem>
									<ListGroupItem>
										<strong>Authors: </strong>
										{book.volumeInfo.authors.map(item => {
											return " " + item + " ";
										})}
									</ListGroupItem>
									<ListGroupItem>
										<strong>Publisher: </strong>
										{book.volumeInfo.publisher}
									</ListGroupItem>
									<ListGroupItem>
										<strong>Publish Date: </strong>
										{book.volumeInfo.publishedDate}
									</ListGroupItem>
									<ListGroupItem>
										<strong>Page Count: </strong>
										{book.volumeInfo.pageCount}
									</ListGroupItem>
								</ListGroup>
							</Col>
						</Row>
						<Row>
							<Col xs={11} md={11} lg={11}>
								<h5>Book Description</h5>
								{book.volumeInfo.description}

								<Button
									href={book.volumeInfo.previewLink}
									variant="primary"
								>
									Preview Book
								</Button>
								<Button  onClick={()=>this.Safe(book)}>Save</Button>
							</Col>
						</Row>
					</Container>
				);
			})):(
		<h1>Nothing was found. Try again!</h1>)
		return bookItems;
	}
}

export default Books;
