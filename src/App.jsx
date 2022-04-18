import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import {
    Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, DropdownToggle, DropdownItem, DropdownMenu, UncontrolledDropdown, Container,
    Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, Dropdown, ButtonDropdown, Offcanvas, OffcanvasHeader, OffcanvasBody, NavbarText
} from 'reactstrap';


function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="App">
            <div className='bg-image'>
                <div>
                    <Navbar
                        color="danger"
                        dark
                        expand
                        fixed="top"
                        full="true"
                        light
                    >
                        <NavbarBrand href="/">
                            Home
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink href="/components/">
                                        Search Recipes
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Ingredients
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Refrigerator
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Pantry
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Spice Rack
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>
                                About
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
                
                <Container className="container">
                    <Row>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/755/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                </CardBody>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/326/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                    <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/365/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                    <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/429/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                    <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/674/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                </CardBody>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/326/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                    <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/493/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                    <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card className="sm-3" style={{ color: "#000" }}>
                                <CardImg src="https://picsum.photos/id/63/200/100" />
                                <CardBody>
                                    <CardTitle>Card Example</CardTitle>
                                    <CardText>
                                        This is an example of ReactStrap Card
                                    </CardText>
                                    <UncontrolledDropdown
                                    inNavbar
                                    nav
                                    >
                                    <DropdownToggle
                                        caret
                                        nav
                                    >
                                        Schedule
                                    </DropdownToggle>
                                    <DropdownMenu end>
                                        <DropdownItem>
                                            Saturday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Sunday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Monday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Tuesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Wednesday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Thursday
                                        </DropdownItem>
                                        <DropdownItem>
                                            Friday
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
