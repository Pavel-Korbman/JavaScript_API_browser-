// Задание 1 
// Работа с BOM 
// 1. Определение текущего размера окна браузера: 
// ○ Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении. 
// 2. Подтверждение закрытия страницы: 
// ○ Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу. 
// 3. Управление историей переходов: 
// ○ Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

// 1

// function getWindowSize() {
//     let width = document.querySelector('.width');
//     let hight = document.querySelector('.hight');

//     width.textContent = window.screen.width; // при первой загрузке
//     hight.textContent = window.screen.height;

//     window.addEventListener('resize', () => { // при изменении размера
//         width.textContent = window.screen.width; // или window.innerWidth
//         hight.textContent = window.screen.height; // window.innerHeight
//     });
// }
// getWindowSize();
// window.addEventListener('load', getWindowSize());

// 2

// window.addEventListener('beforeunload', function(e) {
//     e.preventDefault();
//     e.returnValue = 'текст'; // не работает
// });


// window.onbeforeunload = function(e) {  // не работает
//     e.returnValue = 'Есть несохранённые изменения! Уверены, что хотите покинуть страницу?';
//     return e.returnValue;
//   };


// 3

const forwardButton = document.querySelector('.forward');
const backButton = document.querySelector('.back');

forwardButton.addEventListener('click', ()=>{
    window.history.forward();
})

backButton.addEventListener('click', ()=>{
    window.history.back();
})
