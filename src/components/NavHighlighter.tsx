import { useEffect } from "react";

export default function NavHighlighter() {
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]") as NodeListOf<HTMLElement>;
        const navLinks = document.querySelectorAll(".navbar-nav a") as NodeListOf<HTMLAnchorElement>;
        const menuToggle = document.getElementById("navbarNav");

        const navHighlighter = () => {
            const scrollY = window.scrollY;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 100;
                const sectionId = current.getAttribute("id");

                if (sectionId) {
                    const link = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`) as HTMLElement;
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        link?.classList.add("active");
                    } else {
                        link?.classList.remove("active");
                    }
                }
            });
        };

        window.addEventListener("scroll", navHighlighter);

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute("href");
                if (targetId) {
                    const target = document.querySelector(targetId) as HTMLElement;
                    target?.scrollIntoView({ behavior: "smooth" });
                }
            });
        });

        // Cerrar menú móvil al hacer clic en un enlace
        if (menuToggle) {
            try {
                const bootstrap = (window as any).bootstrap; // Evita error de TypeScript
                const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

                navLinks.forEach((link) => {
                    link.addEventListener("click", () => {
                        if (menuToggle.classList.contains("show")) {
                            bsCollapse.toggle();
                        }
                    });
                });
            } catch (error) {
                console.warn("Bootstrap is not available:", error);
            }
        }

        // Cleanup event listeners al desmontar el componente
        return () => {
            window.removeEventListener("scroll", navHighlighter);
            document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                anchor.removeEventListener("click", () => { });
            });
        };
    }, []);

    return null;
}
