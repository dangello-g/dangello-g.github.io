import { Button, Container } from "react-bootstrap"
import "../assets/project.css"

export default function Contact() {
    return (
        <section id="contact" className="contact py-5 my-5 bg-light">
            <Container>
                <div className="section-title text-center mb-5">
                    <h2 className="fw-bold">Contact Me</h2>
                </div>
                <div className="text-center">
                    <p>You can book an appointment with me on</p>
                    <Button as="a" href="https://calendar.app.google/QN1v6C4Le6SYDD5S7" target="_blank" variant="outline-dark">
                        Google Calendar
                    </Button>
                </div>
            </Container>
        </section>
    )
}
