const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("navigation__show");
            toggle.classList.toggle("bx-x");
        })
    };
};

showMenu("menu-toggle", "nav-menu");