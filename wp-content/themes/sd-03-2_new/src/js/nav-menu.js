
document.addEventListener(`DOMContentLoaded`, () => {

  const burger = document.querySelector(`.burger`)
  const navBox = document.querySelector(`.sidebar-new__navn-box`)
  const firstNavLinks = document.querySelectorAll(`.navn__item .navn__link`)
  const secondNavClose = document.querySelector(`.second-navn__close`)
  const secondNavItems = document.querySelectorAll(`.second-navn__item`)
  const secondNavLinks = document.querySelectorAll(`.second-navn .second-navn__link`)
  const contactBtn = document.querySelector(`.sidebar-new__contact-btn`)
  const sidebarTopInfo = document.querySelector(`.sidebar-new__top-info`)
  const sidebarFooter = document.querySelector(`.sidebar-new__footer`)
  const body = document.querySelector(`body`)
  const thirdNavCross = document.querySelectorAll(`.third-navn__cross`)

  if (burger) {
    burger.addEventListener(`click`, burgerHandler)
  }

  function burgerHandler() {
    burger.classList.toggle(`active`)
    navBox.classList.toggle(`active`)
    body.classList.toggle(`fixed`)
    sidebarTopInfo.classList.toggle(`active`)
    sidebarFooter.classList.toggle(`active`)
  }

  function resizeHandler() {
    if (window.innerWidth >= 768) {
      burger.classList.remove(`active`)
      navBox.classList.remove(`active`)
      sidebarTopInfo.classList.remove(`active`)
      sidebarFooter.classList.remove(`active`)
      body.classList.remove(`fixed`)
      contactBtn.innerHTML = `Контактная информация`
      footerMob.classList.remove(`active`)
    } else {
      contactBtn.innerHTML = `Контакты`
    }
  }

  // secondNavBefore.addEventListener(`click`, closeActiveMenu)

  window.addEventListener(`resize`, resizeHandler)

  firstNavLinks.forEach((element) => {
    element.addEventListener(`click`, (event) => {
      event.target.closest(`.navn__item`).classList.toggle(`active`)
    })
  })
  secondNavLinks.forEach((element) => {
    element.addEventListener(`click`, (event) => {
      if (event.target.closest(`.second-navn__item`).classList.contains(`active`)) {
        event.target.closest(`.second-navn__item`).classList.remove(`active`)
      } else {
        // eslint-disable-next-line max-nested-callbacks
        secondNavItems.forEach((item) => {
          item.classList.remove(`active`)
        })
        event.target.closest(`.second-navn__item`).classList.add(`active`)
      }
    })
  })
  thirdNavCross.forEach((element) => {
    element.addEventListener(`click`, (event) => {
      event.target.closest(`.second-navn__item`).classList.remove(`active`)
      event.target.closest(`.navn__item`).classList.remove(`active`)
    })
    secondNavClose.addEventListener(`click`, (event) => {
      event.target.closest(`.navn__item`).classList.remove(`active`)
    })
  })

  // убрать активные классы для меню на мобилке
  if (window.innerWidth < 1025) {
    secondNavItems.forEach((item) => {
      item.classList.remove(`active`)
    })
  }

  const footerMob = document.querySelector(`.mobile-navn`)

  if (footerMob && window.innerWidth < 767) {
    footerMob.classList.remove(`active`)
    window.addEventListener(`scroll`, function () {
      if (window.scrollY > window.innerHeight) {
        footerMob.classList.add(`active`)
      } else {
        footerMob.classList.remove(`active`)
      }
    })
  }

  const accordionContactsItems = document.querySelectorAll(`.contacts-accordion__item`)
  if (accordionContactsItems) {
    accordionHandler()
  }
  function accordionHandler() {
    accordionContactsItems.forEach((element) => {
      element.querySelector(`.contacts-accordion__header`).addEventListener(`click`, (event) => {
        event.target.closest(`.contacts-accordion__header`).classList.toggle(`active`)
        event.target.closest(`.contacts-accordion__item`).querySelector(`.contacts-accordion__content`).classList.toggle(`active`)
      })
    })
  }
})
