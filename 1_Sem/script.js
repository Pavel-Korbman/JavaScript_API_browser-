// Задание 1 
// Работа с BOM 
// 1. Определение текущего размера окна браузера: 
// ○ Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении. 
// 2. Подтверждение закрытия страницы: 
// ○ Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу. 
// 3. Управление историей переходов: 
// ○ Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

function getWindowSize() {
    let width = document.querySelector('.width');
    let hight = document.querySelector('.hight');
    window.addEventListener('resize', () => {
        width.textContent = window.screen.width;
        hight.textContent = window.screen.height;
    });
}
getWindowSize();


// window.addEventListener('unload', event => {
//     const confirm = confirm('Вы точно хотите закрыть окно?');
//     if (confirm === false) {event.stopPropagation()};
// });
// window.onbeforeunload = function() {
//     return "Данные не сохранены. Точно перейти?";
//   };


// confirmClose();



