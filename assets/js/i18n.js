'use strict';

const selector = document.querySelector("#language-selector");

async function loadI18n(lang) {
  try {
    const res = await fetch(`./lang/${lang}.json`);
    const translations = await res.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

  } catch (err) {
    console.error("Error cargando traducciones:", err);
  }
}

selector.addEventListener("change", (e) => {
  loadI18n(e.target.value);
});

loadI18n("es");
