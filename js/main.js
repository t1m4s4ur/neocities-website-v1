document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const contents = document.querySelectorAll(".txt-main");

  document.querySelector("#about").style.display = "flex";
  document.querySelector("#about").style.opacity = "1";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.dataset.target;

      buttons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      contents.forEach((content) => {
        content.style.display = "none";
        content.style.opacity = "0";
      });

      document.querySelector(targetId).style.display = "flex";
      document.querySelector(targetId).style.opacity = "1";
    });
  });

  const burgerButton = document.querySelector(".burger");
  const mainBtns = document.querySelector(".main-btns");

  burgerButton.addEventListener("click", () => {
    // Добавляем/удаляем класс .burger-active у .main-btns
    mainBtns.classList.toggle("burger-active");

    // Меняем иконку
    if (mainBtns.classList.contains("burger-active")) {
      burgerButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="33.75" height="45" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z" /></svg>'; // Заменяем на крестик (fa6-solid:times)
    } else {
      burgerButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="39.38" height="45" viewBox="0 0 448 512"><path fill="currentColor" d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32m0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M0 192c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m448 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32" /></svg>'; // Возвращаем исходную иконку
    }
  });

  // Добавляем обработчик клика к каждой кнопке меню
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Закрываем меню, удаляя класс .burger-active
      mainBtns.classList.remove("burger-active");

      // Возвращаем иконку гамбургера
      burgerButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="39.38" height="45" viewBox="0 0 448 512"><path fill="currentColor" d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32m0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32M0 192c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m448 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32" /></svg>'; // Возвращаем исходную иконку
    });
  });
});
