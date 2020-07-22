const request = require('request');

request.get(
    "https://cat-fact.herokuapp.com/facts/random?animal_type&amount=2",
    (data, arr, body) => {
        console.log(JSON.parse(body));
        let parseBody = JSON.parse(body);
        let arr = [...body];
        parseBody.forEach(element => {
            arr.push(elem.text);
        });
        arr.map((elem) => {
            console.log("${elem}\n")
        });
    }
);