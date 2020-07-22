function clearBtnEventListener (clearBtn){
    clearBtn.addEventListener("click", function (e) {
        console.log(ul.childNodes);
        console.log(ul.innerHTML);
        ul.innerHTML  = "";
    });
}
export {clearBtnEventListener};