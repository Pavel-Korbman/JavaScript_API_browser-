// Есть тэги - товары с атрибутами: ценами и рейтингами. Делаем функцию, принимаюшую цену и скрывающую все товары выше этой цены.

const filterElementByDataAttribute = (attributeName, maxPrice) => {
    const element = Array.from(document.querySelectorAll(`[${attributeName}]`));
    element.forEach(element => {
        const prise = parseFloat(element.getAttribute(attributeName));
        if (prise > maxPrice) { element.style.display = 'none' }
    });
}

filterElementByDataAttribute('data-price', 50); // Товар-1
// Товар-2

// Делаем функцию, сортирующую товары по убыванию рейтинга:

const sortElementByDataAttribute = (attributeName) => {
    const rating = document.querySelector('.rating');
    const element = Array.from(rating.querySelectorAll(`[${attributeName}]`));
    element.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute(attributeName));
        const ratingB = parseInt(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    element.forEach(element => {
        rating.appendChild(element);
    });

}

sortElementByDataAttribute('data-rating');
// Товар-1
// Товар-3
// Товар-2
// Товар-4