if (!localStorage.getItem('currentPhotoIndex')
    || localStorage.getItem('currentPhotoIndex') >= photo.length) {
    localStorage.setItem('currentPhotoIndex', 0);
};
const firstPhotoIndex = localStorage.getItem('currentPhotoIndex');
const backBtn = document.querySelector('.back');
const forwardBtn = document.querySelector('.forward');
const currentPhoto = document.querySelector('.gallery__photo');
currentPhoto.src = photo[firstPhotoIndex].url;
const paginationBox = document.querySelector('.pagination__box');

for (let index = 0; index < photo.length; index++) {
    const paginationBtn = document.createElement('a');
    paginationBtn.classList = 'pagination__btn';
    paginationBtn.href = '#';
    paginationBtn.textContent = `${index + 1}`;
    paginationBox.appendChild(paginationBtn);
};

const paginationButtons = document.querySelectorAll('.pagination__btn');
paginationButtons[firstPhotoIndex].classList.add('red');

backBtn.addEventListener('click', () => {
    let i = localStorage.getItem('currentPhotoIndex');
    paginationButtons[i].classList.remove('red');
    (i == 0) ? i = photo.length - 1 : i--;
    currentPhoto.src = photo[i].url;
    paginationButtons[i].classList.add('red');
    localStorage.setItem('currentPhotoIndex', i);
});

forwardBtn.addEventListener('click', () => {
    let i = localStorage.getItem('currentPhotoIndex');
    paginationButtons[i].classList.remove('red');
    (i == photo.length - 1) ? i = 0 : i++;
    currentPhoto.src = photo[i].url;
    paginationButtons[i].classList.add('red');
    localStorage.setItem('currentPhotoIndex', i);
});

paginationButtons.forEach(e => {
    e.addEventListener('click', () => {
        let i = localStorage.getItem('currentPhotoIndex');        
        let j = Number(e.textContent) - 1;
        paginationButtons[i].classList.remove('red');          
        currentPhoto.src = photo[j].url;
        paginationButtons[j].classList.add('red'); 
        localStorage.setItem('currentPhotoIndex', Number(e.textContent) - 1); 
    })
});


// localStorage.clear();
