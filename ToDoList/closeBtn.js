function closeBtnEventListener(closeBtn) {
    closeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        overlay.style.height = "0";
    });
}
export{closeBtnEventListener};