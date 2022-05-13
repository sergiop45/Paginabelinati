let btnmenu = document.querySelector("#btnmenu");
let menu = document.querySelector(".menu-header");
var x = 0;

btnmenu.addEventListener("click", function() {
    ativarmenu();
});

function ativarmenu() {
    if (x == 0) {
        menu.style = "display: flex;";
        x++;
    } else {
        menu.style = "display: none;";
        x--;
    }
}