const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdropElement = document.querySelector('#backdrop')
const cancleAddMovieButton = addMovieModal.querySelector('.btn--passive');
const conformAddMovieButton = cancleAddMovieButton.nextElementSibling;
const userInputs = document.querySelectorAll('input');
const movies = [];
console.log(conformAddMovieButton);
console.log(userInputs);


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
     toggleMovieModal();
     clearMovieInputs();
     console.log(movies);
}

startAddMovieButton.addEventListener('click', toggleMovieModal)
backdropElement.addEventListener('click', backdropClickHandler);
cancleAddMovieButton.addEventListener('click',cancleAddMovieHandler);
conformAddMovieButton.addEventListener('click', addMovieHandler );