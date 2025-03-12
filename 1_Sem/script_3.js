// Задание 3
// 1. Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов
// 2.Используйте Bootstrap, чтобы стилизовать элементы: 
//     a. Заголовок статьи (<h2>) 
//     b.  Текст статьи (<p>)
//     c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
// 3.Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
// 4.Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// 5.Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
// 6.Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
// 7.Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы.

// localStorage.clear();

const addButton = document.querySelector('.add-button');
const sectionArticles = document.querySelector('.sectionArticles');

const addArticle = (title, content) => {
    const card = document.createElement('div');
    card.classList = 'card';
    sectionArticles.insertBefore(card, sectionArticles.firstChild);

    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList = 'card-title';
    cardTitle.textContent = title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList = 'card-text';
    cardText.textContent = content;
    cardBody.appendChild(cardText);

    const btnEdit = document.createElement('a');
    btnEdit.href = '#';
    btnEdit.classList = 'btn btn-primary btn-edit';
    btnEdit.textContent = 'Редактировать';
    cardBody.appendChild(btnEdit);

    const btnDel = document.createElement('a');
    btnEdit.href = '#';
    btnDel.classList = 'btn btn-primary btn-del';
    btnDel.textContent = 'Удалить';
    cardBody.appendChild(btnDel);
};

if (!localStorage.getItem('articles')) {
    for (let i = 0; i < articlesData.length; i++) {
        addArticle(articlesData[i].title, articlesData[i].content);
    };
    localStorage.setItem('articles', sectionArticles.innerHTML);
} else {
    sectionArticles.innerHTML = localStorage.getItem('articles');
};

addButton.addEventListener('click', () => {
    addArticle('Новая статья', 'Введите содержание статьи...');
    localStorage.setItem('articles', sectionArticles.innerHTML);
});

sectionArticles.addEventListener('click', event => {
    if (event.target.classList.contains('btn-del')) {
        const article = event.target.closest('div');
        article.parentNode.remove();
        localStorage.setItem('articles', sectionArticles.innerHTML);
    };
});

sectionArticles.addEventListener('click', event => {
    if (event.target.classList.contains('btn-edit')) {
        const article = event.target.closest('div');
        const title = article.querySelector('.card-title');
        const titleText = prompt('Введите заголовок статьи: ');
        (titleText !== '') ? title.textContent = titleText : alert('Заголовок не может быть пустой! Заголовок не изменён.');
        const text = article.querySelector('.card-text');
        const content = prompt('Введите текст статьи: ');
        (content !== '') ? text.textContent = content : alert('Статья не может быть пустой! Текст не изменён.');        
        localStorage.setItem('articles', sectionArticles.innerHTML);
    };
});