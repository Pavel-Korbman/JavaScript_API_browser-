// Поиск элементов
// 💡 По id – getElementById
// 💡 по заданному css-селектору – querySelector и querySelectorAll
// 💡 getElementsByTagName(tag) ищет элементы по заданному тегу и возвращает их коллекцию
// 💡 getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс
// 💡 getElementsByName(name) возвращает элементы с заданным атрибутом name
// 💡 matches(css) проверяет, удовлетворяет ли element заданному атрибуту
// 💡 closest(css) проверяет сам элемент и его предков на соответствие CSS-атрибуту

// Редактирование DOM-дерева

// Создание узла
// 🚩 document.createTextNode(‘текст’) – создаёт текстовый узел
// 🚩 document.createElement('body') – создаёт элемент

// Вставка
// 🚩 node.prepend(...узлы или строки) – вставляет узлы или строки в начало node
// 🚩 node.append(...узлы или строки) – добавляет узлы или строки в конец node
// 🚩 node.before(...узлы или строки) – вставляет узлы или строки до node
// 🚩 node.after(...узлы или строки) – вставляет узлы или строки после node
// 🚩 node.replaceWith(...узлы или строки) – заменяет node заданными узлами или строками
// 🚩 element.insertAdjacentHTML(куда, строка HTML кода)– вставляет HTML код
// 🚩 element.insertAdjacentText(куда, текст) – вставляет текст
// 🚩 element.insertAdjacentElement(куда, элемент) – вставляет элемент Элемент

// Удаление 
// 🚩 node.remove()

// Клонирование
// 🚩 element.cloneNode()


// ПРИМЕР

// Создадим список дел (простейший таск менеджер) с сохранением в localStorage. С кнопкой удалить дело.

const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list');

if (localStorage.getItem('tasks')) {
    taskList.innerHTML = localStorage.getItem('tasks');
}

addButton.addEventListener('click', () => {
    const taskDescription = taskInput.value;
    if (taskDescription !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.innerHTML = `<span class="task-description">${taskDescription}</span>
        <button class="delete-button">Удалить</button>`;
        taskList.appendChild(listItem);
        taskInput.value = '';
        localStorage.setItem('tasks', taskList.innerHTML);
    }
});

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-button')) {
        const listItem = event.target.closest('li');
        listItem.parentNode.removeChild(listItem);

        localStorage.setItem('tasks', taskList.innerHTML)
    }
});
