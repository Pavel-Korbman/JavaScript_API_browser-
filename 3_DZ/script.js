const currentPhoto = document.querySelector('.gallery__photo');
const currentDescription = document.querySelector('.description');
const authorName = document.querySelector('.author-name');
const authorBio = document.querySelector('.author-bio');
const authorCountry = document.querySelector('.country');
const likes = document.querySelector('.likes');
const likedBtn = document.querySelector('.gallery__like-btn');
let boolean = false;


if (!localStorage.getItem('likeCounter')) {
    localStorage.setItem('likeCounter', 0);
};
let likeCounter = localStorage.getItem('likeCounter');
likes.textContent = `Вам понравилось: ${likeCounter} фото`;

let currentPhotoId = ''; //

const currentPhotoLink = '';
let history = [];
if (!localStorage.getItem('history')) {
    localStorage.setItem('history', '');
} else { history = JSON.parse(localStorage.getItem('history')); };

fetch('https://api.unsplash.com/photos/random/?client_id=mMPb5Q6Mo4kh0kOIL1U-CWyD3r0nG09okBkSMzCFTa0')
    .then(response => response.json())
    .then(obj => {
        currentPhoto.src = obj.urls.regular;
        currentDescription.textContent = obj.alt_description
            ;
        authorName.textContent = obj.user.name;
        authorBio.textContent = obj.user.bio;
        authorCountry.textContent = obj.user.location
            ;

        currentPhotoId = obj.id; //        

        let item = [obj.user.name, obj.links.html];
        history.splice(0, 0, item);
        localStorage.setItem('history', JSON.stringify(history));
    });

const setLike = (boolean) => {
    if (boolean === true) {
        // fetch(`https://api.unsplash.com/photos/:${currentPhotoId}/like/?client_id=mMPb5Q6Mo4kh0kOIL1U-CWyD3r0nG09okBkSMzCFTa0`, {
        //     method: 'POST' 
        // })
        //     .then(response => console.log(response.status));
        likedBtn.classList.add('active');
        likeCounter++;
    } else {
        // fetch(`https://api.unsplash.com/photos/:${currentPhotoId}/like/?client_id=mMPb5Q6Mo4kh0kOIL1U-CWyD3r0nG09okBkSMzCFTa0`, {
        //     method: 'DELETE'                    
        // })
        //     .then(response => console.log(response.status));
        likedBtn.classList.remove('active');
        likeCounter--;
    };
    localStorage.setItem('likeCounter', likeCounter);
    likes.textContent = `Вам понравилось: ${likeCounter} фото`;
}

likedBtn.addEventListener('click', () => {    
    boolean = !boolean;
    setLike(boolean);
});



// localStorage.clear();

