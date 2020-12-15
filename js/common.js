$(function () {
  //모바일 전체메뉴
  var menu = $('.menu_list > li > a')
  menu.click(function () {
    var subMenu = $(this).next('ul')
    if (subMenu.is(':visible')) {
      subMenu.slideUp()
    } else {
      subMenu.slideDown()
    }
  })

  //전체메뉴
  var hamburger = $('.hamburger')
  var close = $('.menu .close')
  var menu = $('.menu')
  hamburger.click(function () {
    menu.show()
  })
  close.click(function () {
    menu.hide()
  })

  //헤더
  var header = $('.header')
  var goTop = $('.go_top')
  $(window).scroll(function () {
    var scrollTopvalue = $(document).scrollTop()
    if (scrollTopvalue > 0) {
      header.addClass('active')
    } else {
      header.removeClass('active')
    }

    if (scrollTopvalue > 900) {
      goTop.fadeIn()
    } else {
      goTop.fadeOut()
    }
  })

  goTop.click(function () {
    $('html').scrollTop(0)
    $('html, body').animate({ scrollTop: 0 }, 400)
  })
})
