const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "happy! happy! happy!  ❤️";
  gif.src = "https://media.tenor.com/Do2tfm6klgQAAAAM/cat-kitten.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "puk ah kak hg kit anh sl hg man ";
  gif.src =
    "https://i.pinimg.com/originals/18/d9/81/18d9811d58c1424de3429aaed6bc2e28.gif";
});
