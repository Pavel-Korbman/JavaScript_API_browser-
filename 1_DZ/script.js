const sectionClasses = document.querySelector('.section-classes');

const setClasses = (name, time, max, current) => {
    const card = document.createElement('div');
    card.classList = 'card';
    sectionClasses.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList = 'card-title';
    cardTitle.textContent = name;
    cardBody.appendChild(cardTitle);

    const classTime = document.createElement('p');
    classTime.classList = 'card-text';
    classTime.textContent = `Время занятия: ${time}`;
    cardBody.appendChild(classTime);

    const maxEntries = document.createElement('p');
    maxEntries.classList = 'card-text max';
    maxEntries.textContent = `Максимальное число участников: ${max}`;
    cardBody.appendChild(maxEntries);

    const currentEntries = document.createElement('p');
    currentEntries.classList = 'card-text current-entries';
    currentEntries.textContent = `Уже записалось: ${current}`;
    cardBody.appendChild(currentEntries);

    const btnSubscribe = document.createElement('a');
   
    btnSubscribe.classList = (current < max) ? 'btn btn-primary btn-subscribe' : 'btn btn-primary non-active-btn';
    btnSubscribe.textContent = 'Записаться';
    cardBody.appendChild(btnSubscribe);

    const btnCancel = document.createElement('a');
    
    btnCancel.classList = 'btn btn-primary btn-cancel';
    btnCancel.textContent = 'Отменить запись';
    cardBody.appendChild(btnCancel);
};

if (!localStorage.getItem('classes')) {
    for (let i = 0; i < classData.length; i++) {
        setClasses(classData[i].className, classData[i].classTime,
            Number(classData[i].maxEntries), Number(classData[i].currentEntries));
    };

    localStorage.setItem('classes', sectionClasses.innerHTML);
} else {
    sectionClasses.innerHTML = localStorage.getItem('classes');
};

sectionClasses.addEventListener('click', event => {
    if (event.target.classList.contains('btn-subscribe')) {
        const element = event.target.closest('div');
        const currentEntries = element.querySelector('.current-entries');
        const maxEntries = element.querySelector('.max');
        const btnSubscribe = element.querySelector('.btn-subscribe');

        const max = Number(maxEntries.textContent.slice(31));       
        let number = Number(currentEntries.textContent.slice(16));
        number++;
        currentEntries.textContent = `Уже записалось: ${number}`;

        if (number >= max) {
            btnSubscribe.classList = 'btn btn-primary non-active-btn';
        };

        localStorage.setItem('classes', sectionClasses.innerHTML);
    };
});

sectionClasses.addEventListener('click', event => {
    if (event.target.classList.contains('btn-cancel')) {
        const element = event.target.closest('div');
        const currentEntries = element.querySelector('.current-entries');
        const maxEntries = element.querySelector('.max');
        const btnSubscribe = element.querySelector('.non-active-btn');
        
        const max = Number(maxEntries.textContent.slice(31));
        let number = Number(currentEntries.textContent.slice(16));
        if (number > 0) { number--; }
        currentEntries.textContent = `Уже записалось: ${number}`;

        if (number < max && btnSubscribe) {
            btnSubscribe.classList = 'btn btn-primary btn-subscribe';
        };

        localStorage.setItem('classes', sectionClasses.innerHTML);
    };
});
