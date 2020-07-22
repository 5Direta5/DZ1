function printString(string) {
    var myPromise = new Promise((resolve, rejects) => {
        setTimeout( () => {
            console.log(string); 
            resolve('Hi');
            },  
            Mach.floor(Math.random() * 1000) + 1
        )
    });
    return myPromise;
}

function printConsole() {
    printString('One')
    .then(() => printString('Two'))
    .then(() => printString('Three'));
  
}

printConsole();