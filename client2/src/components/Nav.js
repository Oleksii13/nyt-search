import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
	return (
		<Navbar bg="light">
			<Navbar.Brand>Google Book Search</Navbar.Brand>
			<Nav variant="pills" defaultActiveKey="/">
				<LinkContainer to="/">
					<Nav.Item>
						<Nav.Link href="/">Search</Nav.Link>
					</Nav.Item>
				</LinkContainer>
				<LinkContainer to="/saved">
					<Nav.Item>
						<Nav.Link href="/saved">Saved</Nav.Link>
					</Nav.Item>
				</LinkContainer>
			</Nav>
		</Navbar>
	);
};

export default Navigation;
