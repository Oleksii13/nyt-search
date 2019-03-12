import React from "react";
import { Jumbotron } from "react-bootstrap";

const Jumbo = ({children}) => {
	return (
		<Jumbotron>
			{children}
		</Jumbotron>
	)
};

export default Jumbo;
