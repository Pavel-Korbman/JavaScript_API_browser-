// Удаление 
// 🚩 node.remove()

// Клонирование
// 🚩 element.cloneNode()


// ПРИМЕР

// Делаем для списка дел (захардкоденного) делаем кнопки удалить и клонировать

const taskList = document.getElementById('task-list');
const clearButton = document.querySelector('.clear-button');

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-button')) {
        const taskItem = event.target.closest('li');
        taskItem.remove();

        localStorage.setItem('taskList', taskList.innerHTML)
    }

    if (event.target.classList.contains('clone-button')) {
        const taskItem = event.target.closest('li');
        const clonedTaskItem = taskItem.cloneNode(true); // Клонируем задачу
        taskItem.after(clonedTaskItem); // Вставляем клонированную задачу после текущей

        localStorage.setItem('taskList', taskList.innerHTML)
    }
});

// Восстанавливаем список задач из localStorage при загрузке страницы

if(localStorage.getItem('taskList')) {
    taskList.innerHTML = localStorage.getItem('taskList');
}

clearButton.addEventListener('click', ()=>{
    localStorage.clear(); // очищаем хранилище
    location.reload(true); // перезагружаем страницу
})
