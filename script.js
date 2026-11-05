
const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");

letterButton.addEventListener("click", () => {
    letter.classList.toggle("hidden");

    if (letter.classList.contains("hidden")) {
        letterButton.textContent = "Open your little letter 💌";
    } else {
        letterButton.textContent = "Close your letter ♡";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});
