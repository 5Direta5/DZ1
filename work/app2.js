var ChinaBox = {
    prise: 0,
    calories: 0,
    small: {
        prise: 300,
        calories: 250
    },
    large: {
        prise: 300,
        calories: 400
    },
    pig: {
        prise: 60,
        calories: 100
    },
    neet: {
        prise: 80,
        calories: 150
    },
    chicken: {},
    bread_crumbs: {},
    extra_souse: {},

    calculate: function(size){
        this.prise += ChinaBox[size].prise;
        this.calories += ChinaBox[size].calories;

        var checkBoxArray = querySelectorAll('input[name=add]: checked');

        for (var i = 0; i < checkBoxArray.lenght; i++) {
            var type = checkBoxArray[i].id;

            this.prise += ChinaBox[size].prise;
            this.calories += ChinaBox[size].calories;
        }
    },

    result: function(size){
        document.getElementById('Prise').innerHTML = prise;
        document.getElementById('Calories').innerHTML = calories;
    }
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    ChinaBox.calculate(document.querySelector('input[name= "size"]: checked').value);
});