document.addEventListener("DOMContentLoaded", function () {
    const meses = [
        "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
        "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
    ];

    const dataAtual = new Date();
    const mesAtual = meses[dataAtual.getMonth()];
    const anoAtual = dataAtual.getFullYear();

    document.getElementById("mes-ano").innerHTML = `${mesAtual} <br> DE ${anoAtual}`;

    function gerarDiasDaSemana() {
        const container = document.querySelector(".listin");
        container.innerHTML = "";
        const hoje = new Date();
        const diaSemanaAtual = hoje.getDay();
        const diaAtual = hoje.getDate();

        const ajuste = diaSemanaAtual === 0 ? -6 : 1 - diaSemanaAtual;

        for (let i = 0; i < 7; i++) {
            const dataCalculada = new Date(hoje);
            dataCalculada.setDate(diaAtual + ajuste + i);

            const elementoDia = `
                <div class="ajeitar-linha">
                    <div class="content">
                        <label class="checkBox">
                            <input class="checkbox" type="checkbox">
                            <div class="transition"></div>
                        </label>
                        <h4>${dataCalculada.getDate()}</h4>
                    </div>
                </div>
            `;
            container.innerHTML += elementoDia;
        }
        
        const event = new Event("checkboxesGerados");
        document.dispatchEvent(event);
    }

    gerarDiasDaSemana();
});