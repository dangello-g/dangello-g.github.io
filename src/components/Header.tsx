import { Navbar, Nav, Container } from "react-bootstrap"

export default function Header() {

    return (
        <header className="bg-light">
            <Container>
                <Navbar className="header justify-content-center" fixed="top">
                    <Nav className="d-flex flex-row gap-3">
                        <Nav.Link href="#about"> About </Nav.Link>
                        <Nav.Link href="#projects"> Projects </Nav.Link>
                        <Nav.Link href="#skills"> Skills </Nav.Link>
                        <Nav.Link href="#contact"> Contact </Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </header>
    )
}
