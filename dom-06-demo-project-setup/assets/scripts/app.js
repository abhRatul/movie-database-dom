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
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];
console.log(conformAddMovieButton);

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible')
}

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies) {
      if(movie.id === movieId){
        break;
      }
      movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.removeChild(listRoot.children[movieIndex]);
    updateUi();
}

const deleteMovieHandler = (movieId) => {

    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    //deleteMovie(movieId)

}

const renderNewMovieElement = (id, title, imageUrl, rating ) => {
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
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
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
const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}
const showMovieModal = ()=> { // function(){}
    addMovieModal.classList.add('visible');
    toggleBackdrop();
}

const backdropClickHandler = ()=> {
    closeMovieModal();
    closeMovieDeletionModal()
}

const cancleAddMovieHandler = ()=> {
    closeMovieModal();
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
        id: Math.random().toString(),
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue
     }

     movies.push(newMovie);
     updateUi();
     closeMovieModal();
     toggleBackdrop();
     clearMovieInputs();
     renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
     console.log(movies);
}

startAddMovieButton.addEventListener('click', showMovieModal)
backdropElement.addEventListener('click', backdropClickHandler);
cancleAddMovieButton.addEventListener('click',cancleAddMovieHandler);
conformAddMovieButton.addEventListener('click', addMovieHandler );




