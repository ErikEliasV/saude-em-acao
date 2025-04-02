document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("checkboxesGerados", function () {
        function atualizarContagem() {
            let checkboxes = document.querySelectorAll('.checkbox');
            let checkedCount = 0;

            checkboxes.forEach(function (checkbox) {
                if (checkbox.checked) {
                    checkedCount++;
                }
            });

            document.getElementById('checkedCount').textContent = checkedCount;
        }

        let checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', atualizarContagem);
        });

        atualizarContagem();
    });
});