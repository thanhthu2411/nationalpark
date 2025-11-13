export function enableNavigation() {
    const menuBtn = document.querySelector("#global-nav-toggle");
    const subMenuBtns = document.querySelectorAll(".global-nav__split-button__toggle");
    const globalNav = document.querySelector(".global-nav");
    
    menuBtn.addEventListener("click", (event) => {
      let target = event.target;

      globalNav.classList.toggle("show");

      if (target.tagName != "BUTTON")  {
        target = target.closest("button");
      }

      if (globalNav.classList.contains("show"))
      {
        target.setAttribute("aria-expanded", true);
      } else {
        target.setAttribute("aria-expanded", false);
      }

      console.log("aria-expanded now:", menuBtn.getAttribute("aria-expanded"));

    })

    subMenuBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const liContainer = btn.closest("li");
        const subMenu = liContainer.querySelector(".global-nav__submenu");
        const icon = btn.querySelector(".icon");

        subMenu.classList.toggle("show");
        icon.classList.toggle("rotate");
      })
    })
}
