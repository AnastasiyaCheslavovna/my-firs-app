// функция для работы часов
setInterval(function () {
    let now = new Date()
    let clock = document.querySelector(".header__clock")
    clock.innerHTML = now.toLocaleTimeString()
  }, 1000)
  