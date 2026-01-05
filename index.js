  const navLinks = document.querySelectorAll('.nav-link');
  const panels = document.querySelectorAll('.skills-panel');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // enlever active sur tous les liens
      navLinks.forEach(l => l.classList.remove('active'));

      // ajouter active sur le lien cliqué
      link.classList.add('active');

      const target = link.dataset.target;

      // cacher tous les panels
      panels.forEach(panel => {
        panel.classList.remove('active');
      });

      // afficher le panel ciblé
      const panelToShow = document.querySelector('.' + target);
      if (panelToShow) {
        panelToShow.classList.add('active');
      }
    });
  });

const sections = document.querySelectorAll("div[id]");
const navLink = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLink.forEach(link => {
          link.classList.remove("active-section");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active-section");
          }
        });
      }
    });
  },
  {
    threshold: 1 // Trigger when the entire section is in view

    
  }
);
sections.forEach(section => observer.observe(section));