const checkboxes = document.querySelectorAll('.my-form input[type="checkbox"]');
        
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            checkboxes.forEach(cb => {
                if (cb !== event.target) {
                    cb.checked = false;
                }
            });
        }
    });
});