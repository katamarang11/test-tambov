const headerMenuBtnOpen = document.querySelector('.header__menu-btn_open');
const headerMenuBtnClose = document.querySelector('.header__menu-btn_close');
const headerNavHidden = document.querySelector('.header__nav-hidden');
const body = document.querySelector('.body');

const headerOrderBtn = document.querySelector('.header__order-btn');
const modalBtnClose = document.querySelector('.modal__btn-close');
const modalWindow = document.querySelector('.modal-window');

headerMenuBtnOpen.addEventListener('click', function () {
  headerNavHidden.classList.add('header__nav-hidden_none');
  headerMenuBtnOpen.classList.add('header__menu-btn_hide');
  headerMenuBtnClose.classList.remove('header__menu-btn_hide');
  body.classList.add('body-scroll-no');
});

headerMenuBtnClose.addEventListener('click', function () {
  headerNavHidden.classList.remove('header__nav-hidden_none');
  headerMenuBtnOpen.classList.remove('header__menu-btn_hide');
  headerMenuBtnClose.classList.add('header__menu-btn_hide');
  body.classList.remove('body-scroll-no');
});


headerOrderBtn.addEventListener('click', function () {
  modalWindow.classList.remove('modal-window__hidden');
});

modalBtnClose.addEventListener('click', function () {
  modalWindow.classList.add('modal-window__hidden');
});