const modal = document.querySelector('.contact-modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open');
const closeModalBtn = document.querySelector('.modal-close');
const navOpenModalBtn = document.querySelector('.nav-btn-open');

const openModal = () => {
    modal.style.visibility = 'visible';
    overlay.style.visibility = 'visible';
};

const closeModal = () => {
    modal.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
};

openModalBtn.addEventListener('click', openModal);
navOpenModalBtn?.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const header = document.querySelector('header');
const updateHeader = () => {
    header.classList.toggle('visible', window.scrollY > 0);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();