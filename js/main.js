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

});*/


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


  //modal closure by Esc-button
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) modal.removeClass('modal_visible');
  });
  //modal closure by Esc-button

  //modal closure by click on elsewhere
  document.onclick = function (e) {
    if (event.target.className == 'modal modal_visible') modal.toggleClass('modal_visible');
  };
  //modal closure by click on elsewhere


  //slider
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

    },

    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal_visible'); //- только для модального окна - скрываем модальное окно
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
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

    },

    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          //modal.removeClass('modal_visible'); - только для модального окна - скрываем модальное окно
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
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

    },

    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          //modal.removeClass('modal_visible'); - только для модального окна - скрываем модальное окно
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }

  });


  // mask for phone number
  $('[type=tel]').mask('+7 (000) 000-00-00', { placeholder: "Ваш номер телефона:" });


  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1200);
    return false;
  });

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'LZOzpBhzb4I',
      events: {
        'onReady': videoPlay,

      }
    });

  })

  function videoPlay(event) {
    event.target.playVideo();
  }

  /*$('.map').on('click', () => {
    $('.map').html('https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A37905b2b6a9c22e3ce9015b5f24709b1ecc9a4c6b6d35ee0fae034cb27acab49&amp;width=100%25&amp;height=465&amp;lang=ru_RU&amp;scroll=false')
  })*/


});




