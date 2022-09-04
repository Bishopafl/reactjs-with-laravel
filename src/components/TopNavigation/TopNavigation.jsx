import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import whiteLogo from '../../asset/image/logo_white.png';
import blackLogo from '../../asset/image/logo_black.png';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import '../../asset/css/responsive.css';
import { Link, NavLink, Route } from 'react-router-dom';

class TopNavigation extends Component {

    constructor(props) {
        super(props); // call the super function when the component is loaded
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
            pageTitle: props.title,
        }
    }

    onScroll = () => {
        if(window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [ blackLogo ],
                navBarBackground: 'navBackgroundScroll',
                navLinkItem: 'navLinkItemScroll',
                navVariant: 'light',
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
            <title>{this.state.pageTitle}</title>
            <Navbar className={this.state.navBarBackground} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVariant}>
                <Container>
                    <Navbar.Brand className={this.state.navBarTitle} href="/">
                        <img src={this.state.navBarLogo} alt="Lopez Marketing Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav> 
                    <Nav>
                        <NavItem>
                            <Nav.Link className={this.state.navLinkItem} href="/" to="/">HOME</Nav.Link>    
                        </NavItem>
                        <NavItem>
                            <Nav.Link className={this.state.navLinkItem} href="/about" to="/about">ABOUT</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link className={this.state.navLinkItem} href="/service" to="/service">SERVICE </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link className={this.state.navLinkItem} href="/portfolio" to="/portfolio">PORTFOLIO </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link className={this.state.navLinkItem} href="/artwork" to="/artwork">ARTWORK </Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link className={this.state.navLinkItem} href="/contact" to="/contact">CONTACT US </Nav.Link>
                        </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
        )
    }
}

export default TopNavigation