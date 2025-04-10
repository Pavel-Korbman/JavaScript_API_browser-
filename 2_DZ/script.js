if (!localStorage.getItem('currentPhotoIndex') 
    || localStorage.getItem('currentPhotoIndex') >= photo.length) {
    localStorage.setItem('currentPhotoIndex', 0);
};

const backBtn = document.querySelector('.back');
const forwardBtn = document.querySelector('.forward');
const currentPhoto = document.querySelector('.gallery__photo');
currentPhoto.src=photo[localStorage.getItem('currentPhotoIndex')].url;
const paginationBox = document.querySelector('.pagination__box');

for (let index = 0; index < photo.length; index++) {
    const paginationBtn = document.createElement('a');
    paginationBtn.classList = 'pagination__btn';
    paginationBtn.href = '#';
    paginationBtn.textContent = `${index + 1}`;
    paginationBox.appendChild(paginationBtn);    
};

backBtn.addEventListener('click', ()=>{
    let i = localStorage.getItem('currentPhotoIndex');  
    (i == 0)? i = photo.length - 1 : i--;    
    currentPhoto.src = photo[i].url;
    localStorage.setItem('currentPhotoIndex', i);       
});

forwardBtn.addEventListener('click', ()=>{
    let i = localStorage.getItem('currentPhotoIndex');   
    (i == photo.length - 1)? i = 0 : i++;    
    currentPhoto.src=photo[i].url;
    localStorage.setItem('currentPhotoIndex', i);        
});

const paginationButtons = document.querySelectorAll('.pagination__btn');

paginationButtons.forEach(e => {
    e.addEventListener('click', ()=>{              
        currentPhoto.src=photo[Number(e.textContent) - 1].url;
        localStorage.setItem('currentPhotoIndex', Number(e.textContent));
    })
});
