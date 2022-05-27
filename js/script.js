// let headerLink = document.querySelectorAll('.header__link');
// for (let i = 0; i < headerLink.length; i++) {
//     headerLink[i].addEventListener('click', function () {
//         headerLink[i].classList.toggle('_active-link');
//     });
// };

$(document).ready(function () {
    $('.header__link_2').click(function (event) {
        $('.header__link_2').toggleClass('_active-link');
        $('.header__link_1').removeClass('_active-link');
        $('.header__link_3').removeClass('_active-link');
    });
});
$(document).ready(function () {
    $('.header__link_3').click(function (event) {
        $('.header__link_3').toggleClass('_active-link');
        $('.header__link_1').removeClass('_active-link');
        $('.header__link_2').removeClass('_active-link');
    });
});
$(document).ready(function () {
    $('.header__link_1').click(function (event) {
        $('.header__link_1').addClass('_active-link');
        $('.header__link_2').removeClass('_active-link');
        $('.header__link_3').removeClass('_active-link');
    });
});
//GREEN
$(document).ready(function () {
    $('.header__link_2-bl').click(function (event) {
        $('.header__link_2-bl').toggleClass('active-link');
        $('.header__link_1-bl').removeClass('active-link');
        $('.header__link_3-bl').removeClass('active-link');
    });
});
$(document).ready(function () {
    $('.header__link_3-bl').click(function (event) {
        $('.header__link_3-bl').toggleClass('active-link');
        $('.header__link_1-bl').removeClass('active-link');
        $('.header__link_2-bl').removeClass('active-link');
    });
});
$(document).ready(function () {
    $('.header__link_1-bl').click(function (event) {
        $('.header__link_1-bl').addClass('active-link');
        $('.header__link_2-bl').removeClass('active-link');
        $('.header__link_3-bl').removeClass('active-link');
    });
});

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function ibg(){
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
} 
ibg();


(function () {
  var TABLET_WIDTH = 768;
  var DESKTOP_WIDTH = 1300;
  var LAPTOP_WIDTH = 1024;
  var slider = document.querySelector(".slider");
  var scale = slider.querySelector(".slider__scale");
  var grip = scale.querySelector(".slider__grip");
  var before = slider.querySelector(".slider__image--before");
  var after = slider.querySelector(".slider__image--after");
  var btnBefore = slider.querySelector(".slider__btn--before");
  var btnAfter = slider.querySelector(".slider__btn--after");
  var sliderWidth,
      scaleWidth,
      gripWidth;

  var getElemWidth = function (elem) {
    return parseInt(getComputedStyle(elem).width, 10);
  };

  btnBefore.onclick = function (evt) {
    evt.preventDefault();
    before.style.width = "100%";
    after.style.width = "0";
    grip.style.marginLeft = "0";
    grip.style.transition = "margin-left 2.5s ease-in-out";
    before.style.transition = "width 2s ease-in-out";

    if (viewport>=LAPTOP_WIDTH) {
      grip.style.transition = "margin-left 3s ease-in-out";
      before.style.transition = "width 3s ease-in-out";
    }
    else {
      grip.style.transition = "margin-left 3s ease-in-out";
      before.style.transition = "width 1.5s ease-in-out";
    }
  };

  btnAfter.onclick = function (evt) {
    evt.preventDefault();
    before.style.width = "0";
    after.style.width = "100%";
    grip.style.marginLeft = "calc(100% - " + gripWidth + "px)";
    grip.style.transition = "margin-left 2.5s ease-in-out";
    after.style.transition = "width 2s ease-in-out";

    if (viewport>=LAPTOP_WIDTH) {
      grip.style.transition = "margin-left 3s ease-in-out";
      after.style.transition = "width 3s ease-in-out";
    }
    else {
      grip.style.transition = "margin-left 1s ease-in-out";
      after.style.transition = "width 1.5s ease-in-out";
    }
  };

  grip.ondblclick = function () {
    before.style.width = "50%";
    after.style.width = "50%";
    grip.style.marginLeft = "calc(50% - " + gripWidth / 2 + "px)";
  };

  var getCoords = function (elem) {
    var box = elem.getBoundingClientRect();
    return box.left + pageXOffset;
  };

  var gripDownHandler = function (evtDown) {
    var gripCoords = getCoords(grip);
    var scaleCoords = getCoords(scale);
    grip.style.transition = "none";

    var shiftX = evtDown.pageX - gripCoords;

    document.onmousemove = function (evtMove) {
      var newLeft = evtMove.pageX - shiftX - scaleCoords;

      if (newLeft < 0) {
        newLeft = 0;
      }

      var rightEdge = scaleWidth - gripWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      var gripValue = newLeft / rightEdge * 100;
      grip.style.marginLeft = newLeft + "px";

      before.style.width = (100 - gripValue) + "%";
      after.style.width = gripValue + "%";
    };

    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
      grip.style.transition = "margin-left 0.2s ease-out";
    };

    return false;
  };

  var addGripHandlers = function () {
    grip.addEventListener("mousedown", gripDownHandler);
  };

  var removeGripHandlers = function () {
    grip.removeEventListener("mousedown", gripDownHandler);
  };


  var initialize = function() {
    var viewport = document.documentElement.clientWidth || window.innerWidth;

    if (viewport >= TABLET_WIDTH) {
      addGripHandlers();
    } else {
      removeGripHandlers();
    }

    sliderWidth = getElemWidth(slider);
    scaleWidth = getElemWidth(scale);
    gripWidth = getElemWidth(grip);

    before.style.width = "";
    after.style.width = "";
    grip.style.marginLeft = "";
  };

  window.addEventListener("load", initialize);
  window.addEventListener("resize", initialize);
})();

// // Существуют разные способы получить DOM-узел; здесь мы определяем саму форму и
// // поле ввода email и элемент span, в который поместим сообщение об ошибке
// const form  = document.getElementsByTagName('form')[0];

// const email = document.getElementById('mail');
// const emailError = document.querySelector('#mail + span.error');

// email.addEventListener('input', function (event) {
//   // Каждый раз, когда пользователь что-то вводит,
//   // мы проверяем, являются ли поля формы валидными

//   if (email.validity.valid) {
//     // Если на момент валидации какое-то сообщение об ошибке уже отображается,
//     // если поле валидно, удаляем сообщение
//     emailError.textContent = ''; // Сбросить содержимое сообщения
//     emailError.className = 'error'; // Сбросить визуальное состояние сообщения
//   } else {
//     // Если поле не валидно, показываем правильную ошибку
//     showError();
//   }
// });

// form.addEventListener('submit', function (event) {
//   // Если поле email валдно, позволяем форме отправляться

//   if(!email.validity.valid) {
//     // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
//     showError();
//     // Затем предотвращаем стандартное событие отправки формы
//     event.preventDefault();
//   }
// });

// function showError() {
//   if(email.validity.valueMissing) {
//     // Если поле пустое,
//     // отображаем следующее сообщение об ошибке
//     emailError.textContent = 'You need to enter an e-mail address.';
//   } else if(email.validity.typeMismatch) {
//     // Если поле содержит не email-адрес,
//     // отображаем следующее сообщение об ошибке
//     emailError.textContent = 'Entered value needs to be an e-mail address.';
//   } else if(email.validity.tooShort) {
//     // Если содержимое слишком короткое,
//     // отображаем следующее сообщение об ошибке
//     emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
//   }

//   // Задаём соответствующую стилизацию
//   emailError.className = 'error active';
// }


// document.getElementById('main-form').addEventListener("submit", checkForm);

// function checkForm(event) {
//   event.preventDefault();
//   var el = document.getElementById('main-form');

//   var petName = el.petName.value;
//   var petWeight = el.petWeight.value;
//   // var state = el.state.value;
  
//   var fail = "";

//   if (petName == "" || petWeight == "") {
//     petName.style = "border-color: red";
//   }

//     if (name == "" || password == "" || state == "") {
//         fail = "Заполните все поля";
//     } else if (name.length <= 1 || name.length > 50) {
//         fail = "Введите корректное имя";
//     } else if (password != repass) {
//         fail = "Пароли должны совпадать";
//     } else if (password.split("&").length > 1) {
//         fail = "Некорректный пароль";
//     }
//     if (fail != "") {
// 		document.getElementById('error').innerHTML = fail;
//     } else {
//         alert("Все даные корректно заполнены");
//         window.location = 'https://www.youtube.com/watch?v=0DjegjZKNGk';
// 	}

// }

