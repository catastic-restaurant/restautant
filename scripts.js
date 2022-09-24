const toggleMenu = () => {
    const menu = document.querySelector('header nav ul');
    if (menu.className === "navbar") {
        menu.className += " responsive-menu";
    } else {
        menu.className = "navbar";
    }
}
