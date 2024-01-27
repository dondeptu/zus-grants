{
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener("click", () => {
                nav.classList.toggle("navigation__show");
                toggle.classList.toggle("bx-x");
            });
        };
        document.onclick = (e) => {
            if (!toggle.contains(e.target)) {
                nav.classList.toggle("navigation__show");
                toggle.classList.toggle("bx-x");
            }
        }
    }


    showMenu("menu-toggle", "nav-menu");


    const navLinks = document.querySelectorAll(".js-navLink");
    const linkAction = (e) => {
        navLinks.forEach(n => n.classList.remove("navigation__linkActive"));
        e.target.classList.add("navigation__linkActive");
    }
    navLinks.forEach(n => n.addEventListener("click", linkAction));

}