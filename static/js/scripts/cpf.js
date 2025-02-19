function formatCPF(input) {

    let value = input.value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.substring(0, 11);
    }

    if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
    }

    input.value = value;

    const errorMessage = document.getElementById('error-message');
    if (value.replace(/\D/g, '').length < 11) {
        input.classList.add('error');
        errorMessage.style.display = 'block';
    } else {
        input.classList.remove('error');
        errorMessage.style.display = 'none';
    }
}