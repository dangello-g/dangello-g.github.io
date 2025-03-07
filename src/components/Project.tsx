import { Container, Row, Col, Card } from "react-bootstrap"
import parse from 'html-react-parser';
import "../assets/project.css"

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Sensor Data Dashboard",
            description: "Real-time dashboard for simulating sensor data via WebSockets. Built with React (TypeScript), Java (Spring Boot), and Go, and deployed on Vercel, Render, and Railway, respectively.",
            technologies: [`<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original-wordmark.svg" height="40" alt="reactt logo" />`, `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/spring/spring-original-wordmark.svg" height="40" alt="springg logo" />`, `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/go/go-original-wordmark.svg" height="40" alt="goo logo" />`],
            liveLink: "https://websockets-react-nu.vercel.app/",
            sourceLink: "https://github.com/dangello-g/websockets-react",
            backgroundColor: "#7B68EE",
            imageUrl: "/dashboard.png",
        },
        {
            id: 2,
            title: "Nearby Eats",
            description: "Platform where you can find different types of places as well as create, comment and review them. It is made with Java (Spring Boot) and Angular and it is deployed on Render and Firebase.",
            technologies: [`<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/angular/angular-original.svg" height="40" alt="angular logo" />`, `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/spring/spring-original-wordmark.svg" height="40" alt="springg logo" />`],
            liveLink: "https://nearbyeats-f082c.web.app/",
            sourceLink: "https://github.com/dangello-g/nearby-eats-front",
            backgroundColor: "#87CEFA",
            imageUrl: "/nearby.png",
        },
    ]

    return (
        <section id="projects" className="projects pt-5 mt-5 bg-light">
            <Container>
                <div className="section-title text-center mb-5">
                    <h2 className="fw-bold">Projects</h2>
                </div>
                <Row className="row-cols-1 row-cols-md-2 g-4">
                    {projects.map((project) => (
                        <Col key={project.id}>
                            <Card className="h-100">
                                <Card.Link className="text-dark text-decoration-none" href={project.liveLink} target="_blank">
                                    <div className="image-container" style={{ backgroundColor: project.backgroundColor }}>
                                        <Card.Img className="card-img-top" src={project.imageUrl} variant="top" alt={project.title} loading="lazy" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>{project.description}</Card.Text>
                                        <div className="d-flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <div key={index}>{parse(tech)}</div>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card.Link>
                                <Card.Footer className="bg-white border-0 d-flex justify-content-between align-items-center">
                                    <small className="text-body-secondary">In Development</small>
                                    <div className="d-flex">
                                        <Card.Link href={project.sourceLink} target="_blank">
                                            <img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg"
                                                alt="Github" height="40"></img>
                                        </Card.Link>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
