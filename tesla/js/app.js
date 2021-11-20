const sections = document.querySelectorAll(".section");
const lastSection = sections[sections.length - 1];
const footer = document.querySelector("footer");
const observerOpts = {
  threshold: 0.5,
};
const observer = new IntersectionObserver(observerCallback, observerOpts);

sections.forEach((el) => {
  observer.observe(el);
});

function observerCallback(entries) {
  entries.forEach((entry) => {
    const textbox = entry.target.querySelector(".section-textbox");
    const actionbox = entry.target.querySelector(".section-actions");
    if (entry.isIntersecting) {
      textbox.classList.add("show");
      actionbox.classList.add("show");

      if (entry.target == lastSection) {
        footer.style.display = "flex";
      } else {
        footer.style.display = "none";
      }
      return;
    }
    textbox.classList.remove("show");
    actionbox.classList.remove("show");
  });
}

const navLinks = document.querySelectorAll(".navigation ul li a");
const navs = document.querySelector(".navs");
const linkMouseOver = document.querySelector(".link-mouseover");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    const { x, y, width, height } = link.getClientRects()["0"];
    linkMouseOver.style.display = "block";
    linkMouseOver.style.top = `${y}px`;
    linkMouseOver.style.left = `${x}px`;
    linkMouseOver.style.width = `${width}px`;
    linkMouseOver.style.height = `${height}px`;
  });
});

navs.addEventListener("mouseleave", (e) => {
  linkMouseOver.style.display = "none";
});

const mobileMenu = document.querySelector(".navigation--menu .menu");
const closeMobileNavBtn = document.querySelector(".mobile-navs-closebtn");
const mobileBackdrop = document.querySelector(".mobile-dropback");
const mobileNavs = document.querySelector(".mobile-navs");

mobileMenu.addEventListener("click", (e) => {
  mobileBackdrop.style.zIndex = 1000;
  mobileNavs.style.right = 0;
});
closeMobileNavBtn.addEventListener("click", (e) => {
  mobileNavs.style.right = "-100%";
  mobileBackdrop.style.zIndex = -1000;
});
