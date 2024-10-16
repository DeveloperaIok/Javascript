let btn = document.querySelector("button");
let para = document.querySelector("p");
btn.addEventListener("click", (e) => {
  let ran = Math.floor(Math.random() * 100) + 1;
  para.innerText = ran;
});
