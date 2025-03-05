// DOM

// DOM, или document object model – по сути, привязанный шаблон или HTML-документ, из которого
// был вызван этот скрипт. В объекте window он называется document. Но document может быть
// вызван не только в скрипте как часть window. Его ещё можно вызвать в таких случаях:
// 🚩 В объекте iframe через свойство contentDocument
// 🚩 В качестве ответа responseXML объекта XMLHttpRequest
// 🚩 Из любого элемента или узла через свойство ownerDocument
// За его регулирование отвечает в основном DOM-стандарт

// Document

// document.body.style.backgroundColor = 'purple'; // Поменял цвет фона страницы на пурпурный

// Основные узлы:
// - Элемент 
// - Текстовый блок
// - Атрибут
// - Комментарий 
// - Document

// console.log(document.documentElement); // <html lang="en"> </html>
// console.log(document.body); // <body> </body>
// console.log(document.head); // <head> </head>

// console.log(document.body.firstChild); // Это текстовый элемент - перенос на новую строку
// // #text
// // ...
// // nodeValue
// // : 
// // "\n    "
// // textContent
// // : 
// // "\n    "
// console.log(document.body.lastChild); // <script src="dom_elements.js"></script>
// console.log(document.body.childNodes); // NodeList(12) [text, div, text, comment, text, br, text, span, text, div, text, script]
// console.log(document.body.children); // HTMLCollection(5) [div, br, span, div, script]

// Перебор элементов

// Проверим являются ли элементы div:

// for (const val of document.body.children) {
//     console.log((val.localName === 'div') ? val.textContent + '- это div элемент' : val.textContent + '- это не div элемент');
// }

// Первый элемент?- это div элемент
// - это не div элемент
//         Grandchild (внучатый) element
//      - это не div элемент
// Последний элемент?- это div элемент
// - это не div элемент

// Переберём узлы и выведем их типы:

console.log(document.body.childNodes);

// for (const element of document.body.childNodes) {
//     console.log(element.nodeType);
// }

//  console.dir представляет детальный обзор иерархии свойств объекта, что помогает при тщательном анализе объектов — все аспекты будут видны без пропусков!

for (const element of document.body.childNodes) {
    console.dir(element.nodeType); 
}
// Показывает типы элементов цифрами, здесь есть расшифровка - https://dom.spec.whatwg.org/#node
// 3
// 1
// 3
// 8
// 3
// 1
// 3
// 1
// 3
// 1
// 3
// 1
