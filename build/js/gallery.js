'use strict';

(function () {

  var sliderPictures = document.querySelectorAll('.my-works__slider-picture');
  var imagines = [];
  var buttonLeft = document.querySelector('.my-works__button-left');
  var buttonRight = document.querySelector('.my-works__button-right');
  var pictureFirst = document.querySelector('.my-works__picture--first');
  var pictureSecond = document.querySelector('.my-works__picture--second');
  var pictureThird = document.querySelector('.my-works__picture--third');

  pictureFirst.setAttribute('src', 'img/picture1.jpg');
  pictureSecond.setAttribute('src', 'img/picture2.jpg');
  pictureThird.setAttribute('src', 'img/picture3.jpg');

  var Pictures = function () {
    for (var i = 0; i < sliderPictures.length; i++) {
      var src = sliderPictures[i].getAttribute('src');
      imagines.unshift(src);
    }
  }

  Pictures();

  var onButtonLeftClick = function (evt) {
    evt.preventDefault();
    pictureFirst.setAttribute('src', pictureSecond.getAttribute('src'));
    pictureSecond.setAttribute('src', pictureThird.getAttribute('src'));
    var Img = pictureThird.getAttribute('src');
    if (Img === imagines[0] ) {
      return pictureThird.src = imagines[3];
    } else {
      for (var i = 3; i > 0; i-- ) {
        if (Img === imagines[i]) {
          var j = i - 1;
          return pictureThird.src = imagines[j];
        }
      }
    }
  }

  var onButtonRightClick = function (evt) {
    evt.preventDefault(); 
    pictureThird.setAttribute('src', pictureSecond.getAttribute('src'));
    pictureSecond.setAttribute('src', pictureFirst.getAttribute('src'));
    var Img = pictureFirst.getAttribute('src');
    if (Img === imagines[3]) {
      return pictureFirst.src = imagines[0];
    } else {
      for (var i = 0; i < imagines.length - 1; i++) {
        if (Img === imagines[i]) {
          var j = i + 1;
          pictureFirst.src = imagines[j];
        }
      }
    }
  }
  
  buttonLeft.addEventListener('click', onButtonLeftClick);
  buttonRight.addEventListener('click', onButtonRightClick);

})();
