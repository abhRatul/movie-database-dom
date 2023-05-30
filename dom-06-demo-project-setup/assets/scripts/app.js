const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdropElement = document.querySelector('#backdrop')
const cancleAddMovieButton = addMovieModal.querySelector('.btn--passive');


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

const cancleAddMovie = ()=> {
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdropElement.addEventListener('click', backdropClickHandler);
cancleAddMovieButton.addEventListener('click',cancleAddMovie);