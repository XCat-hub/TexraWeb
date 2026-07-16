(function () {
  var STORAGE_KEY = "texra-lang";

  function preferredLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "zh") return saved;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("zh") === 0 ? "zh" : "en";
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
  }

  applyLang(preferredLang());

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-set-lang"));
    });
  });
})();
