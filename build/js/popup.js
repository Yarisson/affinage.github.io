'use strict';

(function () {
  var popup = document.querySelector('.popup');
  var popupButton = document.querySelector('.popup__button');
  var popupText = document.querySelector('.popup__text');
  var formFooterButton = document.querySelector('.form-footer__button');
  var inputFormName = document.querySelector('#name');

  var onFormButtonClick = function () {
    popup.classList.add('popup--hidden');
  }

  var onFormFooterButtonClick = function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup--hidden');
    popupText.textContent = 'Спасибо за ваше сообщение' + ', ' + inputFormName.value;
    document.addEventListener('click' , onPopupClickEsc);
  }

  formFooterButton.addEventListener('click', onFormFooterButtonClick);
  popupButton.addEventListener('click', onFormButtonClick);
})();