function calcularIMC() {
                
    const altura = parseFloat(document.getElementById('altura').value) / 100; 
    const peso = parseFloat(document.getElementById('peso').value);

    if (!altura || !peso) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

   
    const imc = peso / (altura * altura);
    document.getElementById('imc').textContent = imc.toFixed(1); 


    const pesoIdeal = 22 * (altura * altura);
    document.getElementById('peso-ideal').textContent = pesoIdeal.toFixed(1);

   
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }
    document.getElementById('classificacao').textContent = classificacao;
}