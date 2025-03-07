import { Button, Container, Image } from "react-bootstrap"

export default function About() {
    return (
        <section id="about" className="about pt-5 mt-5 bg-light">
            <Container>
                <div className="text-center">
                    <h2 className="fw-bold">D'Angello García</h2>
                    <h4>Software Developer</h4>

                    <p>I specialize in backend development. 🚀</p>
                    <p>I'm currently learning <strong>AI, ML, Go, Kafka, NestJS</strong>.</p>

                    <div className="justify-content-center d-flex gap-3">
                        <a href="https://github.com/dangello-g" target="_blank">
                            <Image src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg" alt="Github" height="40" />
                        </a>
                        <a href="https://www.linkedin.com/in/dangello-garcia/" target="_blank">
                            <Image src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/linkedin/linkedin-original.svg" alt="Linkedin" height="40" />
                        </a>
                        <a href="mailto:garcia.dangello@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                            </svg>
                        </a>
                        <Button as="a" href="https://drive.google.com/file/d/1b58_RmwvtLMXsuiDo6PAzrIklys5j1RE/view?usp=sharing" target="_blank" variant="outline-dark">
                            CV
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
