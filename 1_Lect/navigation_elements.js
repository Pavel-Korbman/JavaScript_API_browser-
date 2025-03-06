// Навигация по элементам

// Методы навигации по дочерним узлам: обращаются ко всем узлам - включая перенос текста и комментарии
// - firstChild 
// - childNodes
// - lastChild 
// - children

// Методы навигации по дочерним элементам: обращаются только к элементам (div span и т.п.)
// - firstElementChild 
// - lastElementChild 
// - previousElementSibling
// - nextElementSibling 
// - parentElement


// Свойства узлов

// 💡 nodeType – тип узла

// 💡 nodeName – название узла

// 💡 tagName – название элемента

// 💡 nodeValue – данные текстового узла

// 💡 data – содержимое текстового узла

// 💡 outerHTML – содержимое HTML-кода
// элемента целиком

// 💡 hidden – скрывает элемент

// 💡 style – изменяет стиль элемента

// 💡 className – помогает обращаться
// к имени класса элемента и изменить его

// 💡 innerHTML – позволяет изменить полностью
// разметку всего элемента

// 💡 textContent – изменяет содержимое текстового узла

const element = document.querySelector('.title');

console.log(element.nodeType); // 1
console.log(element.nodeName); // DIV
console.log(element.tagName); // DIV
console.log(element.nodeValue); // null
console.log(element.data); // undefined
console.log(element.outerHTML); // <div class="title">Первый элемент?</div>

// element.hidden = true; 
element.style.color = 'blue'; 
// element.className = 'new';
// element.innerHTML = ''; // удалил содержимое


