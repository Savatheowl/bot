/* ============================================================
   VPN — общий скрипт
   Мобильное меню + тень шапки при скролле
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Мобильное меню ---------- */

  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  if (burger && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    };

    burger.addEventListener("click", function () {
      setOpen(!nav.classList.contains("open"));
    });

    /* Клик по ссылке внутри меню — закрываем панель */
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });

    /* Клик вне меню — закрываем панель */
    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("open")) return;
      if (!event.target.closest(".nav") && !event.target.closest(".burger")) {
        setOpen(false);
      }
    });

    /* Escape — закрываем панель */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });

    /* При переходе на десктоп сбрасываем состояние */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) {
        setOpen(false);
      }
    });
  }

  /* ---------- Тень шапки при скролле ---------- */

  var header = document.querySelector(".site-header");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
