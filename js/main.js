const welcome = document.querySelector(".article__header");
welcome.textContent = "Welcome to the Yaddle Blog";

const allArticles = document.querySelectorAll(".article__header");
allArticles[0].classList.add("important");
allArticles[1].classList.add("important");
// Use a For Loop
for(let i = 0; i < allArticles.length; i++) {
    allArticles[i].classList.add("forLoop");
}
// Use a ForEach Loop
allArticles.forEach (taco => {
    taco.classList.add("forEach");
})

const noDash = document.querySelector(".dashed");
noDash.classList.remove("dashed");

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");    