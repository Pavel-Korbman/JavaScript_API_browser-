// Есть дерево вложенных комментариев, 
// представленных в виде вложенных элементов div.
// Каждый комментарий имеет кнопку "ответить", 
// при нажатии на которую открывается форма для ответа.
// Надо реализовать функциональность так, что бы при нажатии 
// на кнопку "ответить" открывалась форма 
// только этого конкретного комментария, остальные формы оставались скрыты.

const replyButtons = document.querySelectorAll('.reply-button');

replyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const comment = button.closest('.comment')     // .closest() возвращает ближайший родительский элемент, по заданному CSS-селектору. 
        const replyForm = comment.querySelector('.reply-form');

        // Скрываем все формы ответов
        const allReplyForms = document.querySelectorAll('.reply-form');
        allReplyForms.forEach(form => {
            if (form !== replyForm) {
                form.style.display = 'none';
            }
        });

        // Отображаем форму для текущего комментария
        replyForm.style.display = 'block';
    })
});



