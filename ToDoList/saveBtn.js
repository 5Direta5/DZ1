function saveBtnEventListener (saveBtn) {
    saveBtn.addEventListener("click", function (e) {
        localStorage.setItem("todoList", ul.innerHTML);
        console.log(localStorage);
    });
}
export {saveBtnEventListener};