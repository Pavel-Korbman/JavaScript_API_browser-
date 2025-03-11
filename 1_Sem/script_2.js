// Задание 2
//  Вы должны создать веб-страницу, которая позволяет пользователю динамически управлять элементами на странице. 
// Ниже приведены основные требования и функциональность: 
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент". 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее). 
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется. 
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу. 
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример). 
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве.


const addButton = document.querySelector('.add-button');
const delButton = document.querySelector('.del-button');
const cloneButton = document.querySelector('.clone-button');
const boxes = document.querySelector('.boxes');
let count = 0;

addButton.addEventListener('click', () => {
    count++;
    const box = document.createElement('div');
    box.classList = 'box';
    box.textContent = `Элемент № ${count}`;
    boxes.appendChild(box);
    // addButton.before(box);
});

delButton.addEventListener('click', () => {
    if (count!==0){count--;}
    if(boxes.querySelector('.box')){
        boxes.removeChild(boxes.lastElementChild);
    }    
});

cloneButton.addEventListener('click', () => {    
    if(boxes.querySelector('.box')){
        const clone = boxes.lastElementChild.cloneNode();
        clone.textContent=boxes.lastElementChild.textContent;
        boxes.appendChild(clone);
    }    
});
