import parse from "html-react-parser";
import "../assets/project.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sensor Data Dashboard",
      description:
        "Real-time dashboard for simulating sensor data via WebSockets. Built with React (TypeScript), Java (Spring Boot), and Go, and deployed on Vercel, Render, and Railway, respectively.",
      technologies: [
        `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original-wordmark.svg" height="40" alt="reactt logo" />`,
        `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/spring/spring-original-wordmark.svg" height="40" alt="springg logo" />`,
        `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/go/go-original-wordmark.svg" height="40" alt="goo logo" />`,
      ],
      liveLink: "https://websockets-react-nu.vercel.app/",
      sourceLink: "https://github.com/dangello-g/websockets-react",
      backgroundColor: "#87CEFA",
      imageUrl: "/dashboard.png",
    },
    {
      id: 2,
      title: "Nearby Eats",
      description:
        "Platform where you can find different types of places as well as create, comment and review them. It is made with Java (Spring Boot) and Angular and it is deployed on Render and Firebase.",
      technologies: [
        `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/angular/angular-original.svg" height="40" alt="angular logo" />`,
        `<img src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/spring/spring-original-wordmark.svg" height="40" alt="springg logo" />`,
      ],
      liveLink: "https://nearbyeats-f082c.web.app/",
      sourceLink: "https://github.com/dangello-g/nearby-eats-front",
      backgroundColor: "#7B68EE",
      imageUrl: "/nearby.png",
    },
  ];

  return (
    <section id="projects" className="m-6">
      <div>
        <div className="section-title text-center">
          <h2 className="text-3xl font-bold m-2 p-2">Projects</h2>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4 w-full px-2 md:w-1/2">
          {projects.map((project) => (
            <div key={project.id}>
              <Card className="">
                <a
                  className="text-dark text-decoration-none"
                  href={project.liveLink}
                  target="_blank"
                >
                  <div
                    className="image-container"
                    style={{ backgroundColor: project.backgroundColor }}
                  >
                    <img
                      className="card-img-top"
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <div key={index}>{parse(tech)}</div>
                      ))}
                    </div>
                  </CardContent>
                </a>
                <CardFooter className="bg-white border-0 d-flex justify-between align-center">
                  <small></small>
                  <div className="d-flex">
                    <a href={project.sourceLink} target="_blank">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg"
                        alt="Github"
                        height="40"
                      ></img>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
