
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`nav a[href="#${id}"]`);

          if (entry.isIntersecting) {
            navLinks.forEach((el) => el.classList.remove("active"));
            if (link) link.classList.add("active");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  });
