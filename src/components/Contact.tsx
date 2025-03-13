import { Button } from "@/components/ui/button";
import "../assets/project.css";

export default function Contact() {
  return (
    <section id="contact" className="m-2">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="text-3xl font-bold m-2 p-2">Contact Me</h2>
        </div>
        <div className="text-center">
          <p className="m-2 p-2">You can book an appointment with me on</p>
          <Button variant="outline">
            <a
              href="https://calendar.app.google/QN1v6C4Le6SYDD5S7"
              target="_blank"
            >
              Google Calendar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
