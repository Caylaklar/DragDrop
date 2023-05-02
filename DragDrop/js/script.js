var box = document.querySelectorAll(".boxes")
var image = document.querySelector(".image");

box.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault();
        item.classList.add("hover");
    })
    item.addEventListener("dragleave", () => {
        item.classList.remove("hover");
    })
    item.addEventListener("drop", () => {
        item.appendChild(image);
        item.classList.remove("hover");
    })
})






