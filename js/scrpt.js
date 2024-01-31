{
    const navLinks = document.querySelectorAll(".js-navLink");

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
            if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove("navigation__show");
                toggle.classList.remove("bx-x");
            }
        };
        navLinks.forEach(n => n.addEventListener("click", () => {
            nav.classList.remove("navigation__show");
            toggle.classList.remove("bx-x");
        }));
    }

    showMenu("menu-toggle", "nav-menu");

    const linkAction = (e) => {
        navLinks.forEach(n => n.classList.remove("navigation__linkActive"));

        e.target.classList.add("navigation__linkActive");
    }

    navLinks.forEach(n => n.addEventListener("click", linkAction));


}