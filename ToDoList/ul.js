function ulEventListener(ul) {
    ul.addEventListener("click", function (e) {
        if (e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }
    });  
}
export {ulEventListener};