document.getElementById('burger').addEventListener('change', function() {
    document.getElementById('menu').classList.toggle('show', this.checked);
});
document.getElementById("exercicio-item").addEventListener("click", function() {
let submenu = document.getElementById("submenu");
submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});