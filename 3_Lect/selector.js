// Пример: Выбираем страну и показываем столицу

const selector = document.forms.countryform.countryselect;
const capital = document.querySelector('.capital-info');

const capitals = {
    russia: 'Moscow',
    usa: 'Washington',
    china: 'Beijing'
};

selector.addEventListener('click', () => {
    (selector.options[0].selected) ? capital.textContent = 'Выберите страну' : capital.textContent = `${capitals[selector.value]}`;
});

// Пример2: сортируем товары по цене

const sortSelect = document.querySelector('#sort-select');
const productList = document.querySelector('#product-list');
const productItems = Array.from(document.querySelectorAll('.product-item'));

sortSelect.onchange = function () {
    const selectOption = sortSelect.value;

    if (selectOption === 'asc') {
        productItems.sort((a, b) => {
            const priseA = parseInt(a.textContent.split('- $')[1]);
            const priseB = parseInt(b.textContent.split('- $')[1]);
            return priseA - priseB;
        });
    } else if (selectOption === 'desc') {
        productItems.sort((a, b) => {
            const priseA = parseInt(a.textContent.split('- $')[1]);
            const priseB = parseInt(b.textContent.split('- $')[1]);
            return priseB - priseA;
        });
    }

    productItems.forEach(item => {
        productList.appendChild(item);
    });
}