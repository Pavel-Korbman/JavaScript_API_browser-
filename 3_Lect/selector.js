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

