const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdropElement = document.querySelector('#backdrop')
const cancleAddMovieButton = addMovieModal.querySelector('.btn--passive');
const conformAddMovieButton = cancleAddMovieButton.nextElementSibling;
const userInputs = document.querySelectorAll('input');
const entryTextSection =document.getElementById('entry-text')
const movies = [];
console.log(conformAddMovieButton);
console.log(userInputs);


const renderNewMovieElement = ( title, imageUrl, rating ) => {
    let newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 Stars</p>
        </div>
    `;

    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElement);
}


const updateUi = () => {
    if (movies.length < 1){
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none'
    }
}

const toggleBackdrop = ()=>{
    backdropElement.classList.toggle('visible');
}

const toggleMovieModal = ()=> { // function(){}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}

const backdropClickHandler = ()=> {
    toggleMovieModal();
}

const cancleAddMovieHandler = ()=> {
    toggleMovieModal();
    clearMovieInputs();
}

const clearMovieInputs = () => {
    for( let userinput of userInputs) {
        userinput.value = '';
    }
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(
        titleValue.trim() === '' ||
        imgUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1    ||
        +ratingValue > 5
     ){
        alert('Please enter valid input ( rating between 1 and 5 )');
        return;
     }
    
     const newMovie = {
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue
     }

     movies.push(newMovie);
     updateUi();
     toggleMovieModal();
     clearMovieInputs();
     renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
     console.log(movies);
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdropElement.addEventListener('click', backdropClickHandler);
cancleAddMovieButton.addEventListener('click',cancleAddMovieHandler);
conformAddMovieButton.addEventListener('click', addMovieHandler );