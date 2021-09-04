import React from "react";
import Link from "next/link";
import Router from "next/router";
import { Collapse, Navbar, NavbarToggler, 
    Nav, NavItem, NavLink } from "reactstrap";

export const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <Navbar color="light" light expand="md">
                <Link href="/">
                    <NavLink className="font-weight-bold"
                        >APP_NAME</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen}>
                    <Nav className="ml-auto" navbar>
                        {/* {!isAuth() && (
                            <main>
                                <NavItem>
                                    <Link hfref="/signin">
                                        <NavLink>Login</NavLink>
                                    </Link>
                                    <Link hfref="/register">
                                        <NavLink>Register</NavLink>
                                    </Link>
                                </NavItem>
                            </main>
                        )}
                        {IsAuth() && (
                            <NavItem>
                                <NavLink 
                                    onClick={() => signout(
                                        () => Router.replace(`/signin`))
                                    }>
                                    Log out
                                </NavLink>
                            </NavItem>
                        )} */}
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
};






