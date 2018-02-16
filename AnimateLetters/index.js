const wrapLetters = el =>
	el.innerHTML = el.textContent.split("").map(letter =>
  	`<span class=letter>${letter}</span>`)
 	.join("");

wrapLetters(document.querySelector("p"));

const letters = document.getElementsByClassName("letter");

for (var i = 0; i < letters.length; i++)
  letters.item(i).style.animation = `opacity 800ms ${i * 50}ms 1 forwards`;
