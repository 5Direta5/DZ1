function deleteTodos(){
    console.log(span);
    for (let span of span){
        span.addEventListener('click', function(){
            console.log(span.parentElement);
            span.parentElement.remove();
        });
    }
};
export{deleteTodos};