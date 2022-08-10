import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';

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
            navVariant: 'dark',
            navBarBackground: 'navBackground',
            navLinkItem: 'navLinkItem',
        }
    }

    onScroll = () => {
        if(window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [ blackLogo ],
                navBarBackground: 'navBackgroundScroll',
                navLinkItem: 'navLinkItemScroll',
                navVariant: 'light'
            })
        } else if(window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [ whiteLogo ],
                navBarBackground: 'navBackground',
                navLinkItem: 'navLinkItem',
                navVariant: 'dark',
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
            <Navbar className={this.state.navBarBackground} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                <Container>
                    <Navbar.Brand className={this.state.navBarTitle} href="#home">
                        <img src={this.state.navBarLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav> 
                    <Nav>
                        <Nav.Link className={this.state.navLinkItem} href="#">HOME</Nav.Link>
                        <Nav.Link className={this.state.navLinkItem} href="#">ABOUT</Nav.Link>
                        <Nav.Link className={this.state.navLinkItem} href="#">SERVICE</Nav.Link>
                        <Nav.Link className={this.state.navLinkItem} href="#">PORTFOLIO</Nav.Link>
                        <Nav.Link className={this.state.navLinkItem} href="#">ARTWORK</Nav.Link>
                        <Nav.Link className={this.state.navLinkItem} href="#">CONTACT US</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
        )
    }
}

export default TopNavigation