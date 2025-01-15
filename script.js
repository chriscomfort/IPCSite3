// JavaScript for creating a polished and professional vintage business card-inspired website

document.addEventListener("DOMContentLoaded", function () {
  // Fade-in effect for the page
  document.body.style.opacity = "1";

  // Dynamically set the footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
  }

  // Add header with "IVY PHAM CASTING" and menu button
  const isHomePage = window.location.pathname.includes("index.html");

  const header = document.createElement("header");
  header.style.position = "fixed";
  header.style.top = "0";
  header.style.width = "100%";
  header.style.backgroundColor = "white";
  header.style.padding = "10px 20px";
  header.style.textAlign = "center";
  header.style.zIndex = "1000";

  if (!isHomePage) {
      const logo = document.createElement("h1");
      logo.textContent = "IVY PHAM CASTING";
      logo.style.margin = "0";
      logo.style.cursor = "pointer";
      logo.style.color = "#5a321a";
      logo.style.fontFamily = "'Charter', serif";
      logo.style.fontWeight = "bold";
      logo.style.fontSize = "2em";
      logo.style.textTransform = "uppercase";
      logo.style.transition = "transform 0.1s ease, color 0.1s ease";

      logo.addEventListener("click", () => {
          window.location.href = "index.html";
      });

      logo.addEventListener("mouseover", () => {
          logo.style.transform = "scale(1.01)";
          logo.style.color = "maroon";
      });

      logo.addEventListener("mouseout", () => {
          logo.style.transform = "scale(1)";
          logo.style.color = "#5a321a";
      });

      header.appendChild(logo);
  } else {
      // Update the logo on the homepage to trigger a contact popup
      const logo = document.querySelector("h1");
      if (logo) {
          logo.style.cursor = "pointer";
          logo.style.transition = "transform 0.1s ease, color 0.1s ease";
          logo.addEventListener("mouseover", () => {
              logo.style.transform = "scale(1.01)";
              logo.style.color = "maroon";
          });
          logo.addEventListener("mouseout", () => {
              logo.style.transform = "scale(1)";
              logo.style.color = "#5a321a";
          });

          logo.addEventListener("click", () => {
              const overlay = document.createElement("div");
              overlay.style.position = "fixed";
              overlay.style.top = "0";
              overlay.style.left = "0";
              overlay.style.width = "100%";
              overlay.style.height = "100%";
              overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              overlay.style.zIndex = "999";

              const modal = document.createElement("div");
              modal.style.position = "fixed";
              modal.style.top = "50%";
              modal.style.left = "50%";
              modal.style.transform = "translate(-50%, -50%)";
              modal.style.width = "320px";
              modal.style.padding = "20px";
              modal.style.backgroundColor = "white";
              modal.style.border = "1px solid #5a321a";
              modal.style.borderRadius = "10px";
              modal.style.zIndex = "1000";
              modal.style.transition = "transform 0.1s ease";
              modal.style.cursor = "pointer";
              modal.innerHTML = `
                  <p>Email: <a href="mailto:ivy@ivyphamcasting.com" style="color: #5a321a; text-decoration: underline;">ivy@ivyphamcasting.com</a></p>
                  <p>Phone: +1-917-769-8225</p>
                  <div style="position: absolute; top: 10px; right: 10px; cursor: pointer; font-size: 18px; color: #5a321a; font-weight: bold;">&times;</div>
              `;

              modal.querySelector("div").addEventListener("click", () => {
                  modal.remove();
                  overlay.remove();
              });

              overlay.addEventListener("click", () => {
                  modal.remove();
                  overlay.remove();
              });

              modal.addEventListener("mouseover", () => {
                  modal.style.transform = "scale(1.01)";
              });

              modal.addEventListener("mouseout", () => {
                  modal.style.transform = "scale(1)";
              });

              document.body.appendChild(overlay);
              document.body.appendChild(modal);
          });
      }
  }

  // Add the menu button dynamically
  const menuButton = document.createElement("button");
  menuButton.className = "menu-button";
  menuButton.style.cursor = "pointer";
  menuButton.style.border = "none";
  menuButton.style.background = "none";
  menuButton.style.display = "flex";
  menuButton.style.flexDirection = "column";
  menuButton.style.alignItems = "flex-end";
  menuButton.style.justifyContent = "center";
  menuButton.style.padding = "5px";

  menuButton.innerHTML = `
      <div style="width: 30px; height: 4px; background-color: #5a321a; margin: 3px 0;"></div>
      <div style="width: 30px; height: 4px; background-color: #5a321a; margin: 3px 0;"></div>
      <div style="width: 30px; height: 4px; background-color: #5a321a; margin: 3px 0;"></div>
  `;

  const menu = document.createElement("div");
  menu.className = "menu";
  menu.style.position = "absolute";
  menu.style.top = "10px";
  menu.style.right = "20px";
  menu.appendChild(menuButton);

  const dropdown = document.createElement("div");
  dropdown.className = "dropdown";
  dropdown.style.display = "none";
  dropdown.style.position = "absolute";
  dropdown.style.top = "40px";
  dropdown.style.right = "0";
  dropdown.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Translucent background

  const menuItems = [
      { text: "HOME", href: "index.html" },
      { text: "FILM & TV", href: "film.html" },
      { text: "ABOUT", href: "about.html" },
      { text: "CURRENTLY CASTING", href: "https://tinyurl.com/soymilkaudition" },
  ];

  menuItems.forEach(item => {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.text;
      link.style.color = "#5a321a";
      link.style.textDecoration = "none";
      link.style.display = "block";
      link.style.padding = "10px 20px";
      link.style.fontSize = "1.2em";
      link.style.textAlign = "right";
      link.style.textTransform = "uppercase";
      link.style.transition = "color 0.2s ease, transform 0.1s ease";
      link.addEventListener("mouseover", () => {
          link.style.color = "maroon";
          link.style.transform = "scale(1.01)";
      });
      link.addEventListener("mouseout", () => {
          link.style.color = "#5a321a";
          link.style.transform = "scale(1)";
      });
      dropdown.appendChild(link);
  });

  menu.appendChild(dropdown);

  // Show and hide the dropdown menu on hover
  menu.addEventListener("mouseover", () => {
      dropdown.style.display = "block";
      dropdown.style.transform = "scale(1.01)";
  });

  menu.addEventListener("mouseout", () => {
      dropdown.style.display = "none";
      dropdown.style.transform = "scale(1)";
  });

  header.appendChild(menu);
  document.body.insertBefore(header, document.body.firstChild);

  // Ensure menu button remains fixed across pages
  document.body.style.margin = "0";
  document.body.style.position = "relative";
  document.body.style.paddingTop = "70px";

  // Add page transition effects
  const links = document.querySelectorAll("a");
  links.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = e.target.href;
          document.body.style.transition = "opacity 0.5s ease";
          document.body.style.opacity = "0";
          setTimeout(() => {
              window.location.href = target;
          }, 500);
      });
  });

  // Enhance hover effect for 'Film/Fashion/Advertising' buttons
  const taglineLinks = document.querySelectorAll(".tagline a");
  taglineLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
          link.style.transition = "transform 0.03s linear, color 0.03s linear";
          link.style.transform = "scale(1.01)";
          link.style.color = "maroon";
      });

      link.addEventListener("mouseout", () => {
          link.style.transform = "scale(1)";
          link.style.color = "#5a321a";
      });
  });

  // Enhance hover effect for film posters on film.html
  const filmPosters = document.querySelectorAll(".film-gallery img");
  filmPosters.forEach(poster => {
      poster.addEventListener("mouseover", () => {
          poster.style.transition = "transform 0.03s linear, color 0.03s linear";
          poster.style.transform = "scale(1.01)";
          poster.style.filter = "brightness(0.9)";
      });

      poster.addEventListener("mouseout", () => {
          poster.style.transform = "scale(1)";
          poster.style.filter = "brightness(1)";
      });
  });
});
