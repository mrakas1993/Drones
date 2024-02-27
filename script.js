window.onclick = function(event) {
  if (document.getElementsByClassName('header-top-menu-button')[0].contains(event.target)) {
    document.getElementById("Dropdown-menu").classList.toggle("show");
    document.getElementById("Menu-list").classList.toggle("hide");
    document.getElementById("Menu-close").classList.toggle("show");
  } else {
    document.getElementById("Dropdown-menu").classList.remove("show");
    document.getElementById("Menu-list").classList.remove("hide");
    document.getElementById("Menu-close").classList.remove("show");
  }
}
function showMore() {
  document.getElementById("Arrow-more").classList.toggle("hide");
  document.getElementById("Arrow-close").classList.toggle("show");
  document.getElementById("Gradient").classList.toggle("hide");
  document.getElementById("Text-wrapper").classList.toggle("more");
}
const yatranslate = {
  lang: "ru",
};
document.addEventListener('DOMContentLoaded', function () {
  yaTranslateInit();
})
function yaTranslateInit() {
  if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {
    yaTranslateSetLang(yatranslate.langFirstVisit);
  }
  let script = document.createElement('script');
  script.src = `https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=${yatranslate.lang}&widgetTheme=light&autoMode=false`;
  document.getElementsByTagName('head')[0].appendChild(script);
  let code = yaTranslateGetCode();
  yaTranslateHtmlHandler(code);
  yaTranslateEventHandler('click', '[data-ya-lang]', function (el) {
    yaTranslateSetLang(el.getAttribute('data-ya-lang'));
    window.location.reload();
  })
}
function yaTranslateSetLang(lang) {
  localStorage.setItem('yt-widget', JSON.stringify({
    "lang": lang,
    "active": true
  }));
}
function yaTranslateGetCode() {
  return (localStorage["yt-widget"] != undefined && JSON.parse(localStorage["yt-widget"]).lang != undefined) ? JSON.parse(localStorage["yt-widget"]).lang : yatranslate.lang;
}
function yaTranslateHtmlHandler() {
}
function yaTranslateEventHandler(event, selector, handler) {
  document.addEventListener(event, function (e) {
    let el = e.target.closest(selector);
    if (el) handler(el);
  });
}