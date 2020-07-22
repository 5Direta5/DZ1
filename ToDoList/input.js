function inputEventListener (input) {
    input.addEventListener("keypress", function (key) {
    if (key.which === 13) {
        var li = document.querySelector("li");
        var spanElement = document.querySelector("span");
        var icon = document.getElementById("i");

        var newToDo = this.value;
        this.value = "";


        icon.classList.add('fas', 'fa-trash-alt');
        console.log(icon.classList);
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newToDo);
        }
    });
}
export {inputEventListener};
