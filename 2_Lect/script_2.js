// Показываем и скрываем контент чекбоксом

const content = document.querySelector('.content');
const checkbox = document.querySelector('#toggleCheckbox');

// Мой способ:
// checkbox.addEventListener('change', function (e) {
//     if (this.checked) {
//         content.style.display = 'block';
//     } else {
//         content.style.display = 'none';
//     }
// });

// Способ лектора (со стилями):
checkbox.addEventListener('change', function (e) {
    if (this.checked) {
        content.classList.add('visible');
    } else {
        content.classList.remove('visible');
    }
});