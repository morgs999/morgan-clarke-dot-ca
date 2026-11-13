const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.btn-close');
const navOpenModalBtn = document.querySelector('.nav-btn-open');

const openModal = () => {
    modal.style.visibility = 'visible';
    overlay.style.visibility = 'visible';
}

openModalBtn.addEventListener('click', openModal);
navOpenModalBtn.addEventListener('click', openModal);

const closeModal = () => {
    modal.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
}

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);