import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';

class TopNavigation extends Component {

    constructor() {
        super(); // call the super function when the component is loaded
        /**
         * This will show two different states for our nav bar
         * a class `.navTitle` is made for the inital view
         * 
         * then when the document is scrolled, another class
         * will load for that view `navTitleScroll`
         */
        this.state={
            navBarTitle: 'navTitle', // string
            navBarLogo: [ whiteLogo ], // object
        }
    }

    onScroll = () => {
        if(window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [ blackLogo ]
            })
        } else if(window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [ whiteLogo ]
            })
        }
    }

    // this method will be executed when the component is run
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
        <Fragment>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className={this.state.navBarTitle} href="#home">
                        <img src={this.state.navBarLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">HOME</Nav.Link>
                        <Nav.Link href="#deets">ABOUT</Nav.Link>
                        <Nav.Link href="#deets">SERVICE</Nav.Link>
                        <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#deets">ARTWORK</Nav.Link>
                        <Nav.Link href="#deets">CONTACT US</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
        )
    }
}

export default TopNavigation