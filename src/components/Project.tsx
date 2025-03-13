import parse from "html-react-parser";
import "../assets/project.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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
        `<img className="h-10 object-cover" src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/react/react-original-wordmark.svg" alt="reactt logo" />`,
        `<img className="h-10 object-cover" src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/spring/spring-original-wordmark.svg" alt="springg logo" />`,
        `<img className="h-10 object-cover" src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/go/go-original-wordmark.svg" alt="goo logo" />`,
      ],
      liveLink: "https://websockets-react-nu.vercel.app/",
      sourceLink: "https://github.com/dangello-g/websockets-react",
      backgroundColor: "bg-sky-300",
      imageUrl: "/dashboard.png",
    },
    {
      id: 2,
      title: "Nearby Eats",
      description:
        "Platform where you can find different types of places as well as create, comment and review them. It is made with Java (Spring Boot) and Angular and it is deployed on Render and Firebase.",
      technologies: [
        `<img className="h-10 object-cover" src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/angular/angular-original.svg" alt="angular logo" />`,
        `<img className="h-10 object-cover" src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/spring/spring-original-wordmark.svg" alt="springg logo" />`,
      ],
      liveLink: "https://nearbyeats-f082c.web.app/",
      sourceLink: "https://github.com/dangello-g/nearby-eats-front",
      backgroundColor: "bg-violet-400",
      imageUrl: "/nearby.png",
    },
  ];

  return (
    <section id="projects" className="m-6">
      <div>
        <div className="section-title text-center">
          <h2 className="text-3xl font-bold m-2 p-2">Projects</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {projects.map((project) => (
            <div key={project.id} className="w-full lg:w-5/12">
              <Card className="p-0">
                <a href={project.liveLink} target="_blank">
                  <CardHeader className="p-0">
                    <div
                      className={`${project.backgroundColor} rounded-xl overflow-hidden`}
                    >
                      <img
                        className="rounded-xl object-cover scale-90 transition duration-300 ease-in-out hover:scale-95"
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="px-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>
                      <p className="py-2">{project.description}</p>
                    </CardDescription>
                  </CardContent>
                </a>
                <CardFooter className="flex justify-between p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <div key={index}>{parse(tech)}</div>
                    ))}
                  </div>
                  <a
                    className="h-10 w-10"
                    href={project.sourceLink}
                    target="_blank"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full fill-current text-black dark:text-white"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
