const checkbox = document.querySelector("[type=checkbox]");
const phoneBox = document.querySelector("#phone");

checkbox.addEventListener("change", () => {
	phoneBox.classList.toggle("active");
});
