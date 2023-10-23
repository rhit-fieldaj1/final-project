document.addEventListener('DOMContentLoaded', (event) => {
    const menuButon = document.getElementById("menuButton");
    const menu = document.getElementById("menuContent");

    menuButton.addEventListener("click", function() {
        menu.innerHTML = `<ul class="list-group mb-3" id="menu">
        <li class="list-group-item d-flex justify-content-between lh-condensed" id="menu-phone">Dial 2･1･1 or (866) 211-9966</li>
        <li class="list-group-item d-flex justify-content-between lh-condensed" id="menu-findHelp">FIND HELP / BUSCAR AYUDA</li>
        <li class="list-group-item d-flex justify-content-between lh-condensed" id="menu-dataDash">Indiana 211 Data Dashboard</li>
        <li class="list-group-item d-flex justify-content-between lh-condensed" id="menu-about">About Us</li>
        <li class="list-group-item d-flex justify-content-between lh-condensed" id="menu-serviceProviders">Service Providers</li>
        </ul>`
    })
})