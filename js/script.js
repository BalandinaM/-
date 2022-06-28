let buttonSearch = document.querySelector('.search-hotel__button');
let modalSearch = document.querySelector('.modal__searh-hotel');

buttonSearch.onclick = function () {
    modalSearch.classList.toggle('hidden')
}