const roomNames = document.querySelectorAll(`.roomNames`);

roomNames.forEach(element => {
    element.addEventListener(`click`, () => {
        console.log(element.innerText);
    });
});