const welcome = document.querySelector(".article__header");
welcome.textContent = "Welcome to the Yaddle Blog";

const allArticles = document.querySelectorAll(".article__header");
allArticles[0].classList.add("important");
allArticles[1].classList.add("important");

const noDash = document.querySelector(".dashed");
noDash.classList.remove("dashed");

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");    