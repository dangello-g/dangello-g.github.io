import { Container, Nav, Navbar } from "react-bootstrap"

export default function Footer() {
    return (
        <footer className="footer d-flex d-md-none bg-light">
            <Container className="d-flex justify-content-center">
                <Navbar className=" d-flex">
                    <Nav className="d-flex flex-row gap-3">
                        <Nav.Link href="#about"> About </Nav.Link>
                        <Nav.Link href="#projects"> Projects </Nav.Link>
                        <Nav.Link href="#skills"> Skills </Nav.Link>
                        <Nav.Link href="#contact"> Contact </Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </footer>
    )
}
