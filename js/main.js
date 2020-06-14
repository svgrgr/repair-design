/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal_visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);

  });

  closeBtn.addEventListener('click', switchModal);

});
*/

$(document).ready(function () {
  var modal = $(".modal"),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  console.log(modal);
  console.log(modalBtn);
  console.log(closeBtn);

  modalBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal_visible')
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination')

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //modal form validation
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: {
        required: true,
        minlength: 18
      },

      // compound rule
      userEmail: {
        required: true,
        email: true
      },

      policycheckbox3: "required"
    },

    //messages
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Введите имя не короче 2 букв",
        maxlength: "Введите имя не длиннее 15 букв"
      },

      userPhone: {
        required: "Заполните поле",
        minlength: "Телефон введён не полностью"
      },

      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },

      policycheckbox3: "Необходимо подтвердить согласие на обработку данных"

    }

  });


  //control form validation
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: {
        required: true,
        minlength: 18
      },

      policycheckbox: "required"

    }, //messages
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Введите имя не короче 2 букв",
        maxlength: "Введите имя не длиннее 15 букв"
      },

      userPhone: {
        required: "Заполните поле",
        minlength: "Телефон введён не полностью"
      },

      policycheckbox: "Необходимо подтвердить согласие на обработку данных"

    }

  });

  //footer form validation
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18
      },

      policycheckbox2: "required"

    },

    //messages
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Введите имя не короче 2 букв",
        maxlength: "Введите имя не длиннее 15 букв"
      },

      userPhone: {
        required: "Заполните поле",
        minlength: "Телефон введён не полностью"
      },

      policycheckbox2: "Необходимо подтвердить согласие на обработку данных"

    }

  });


  // mask for phone number
  $('[type=tel]').mask('+7 (000) 000-00-00', { placeholder: "+7 (___) ___-__-__" });
});