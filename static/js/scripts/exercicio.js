window.onload = function() {
    const paragrafo1 = document.getElementById("info");
    const paragrafo2 = document.getElementById("info-2");
    
    
    paragrafo1.style.display = "none";
    paragrafo2.style.display = "none";
}

function mostrarInformacao(button) {
    var p = button.previousElementSibling;
    if (p.style.display === "none") {
        p.style.display = "block";
        button.textContent = "LER MENOS";
    } else {
        p.style.display = "none";
        button.textContent = "LER MAIS"; 
    }
}