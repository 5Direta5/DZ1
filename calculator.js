function calculate(){
    var bill_count = document.getElementById('bill_count').value;
    if (bill_count === '0'){
        document.getElementById('bill_count').style.borderColor = 'red';
        alert('Can not share zero bill!');
    }
    var servise_quality = document.getElementById('servise_quality ').value;
    var people_num = document.getElementById('people_num').value;

    if(!bill_count || !servise_quality){
        alert('Please enter values');
        return;
    }

    if(!people_num || people_num <= 1){
        people_num = 1;
    }
    else {
        document.getElementById('each').style.display = 'block';
    }


    var total = (bill_count * servise_quality) / people_num;
    
    total = Mach.round(total*100) / 100;
    total = total.toFixed(2);
    document.getElementById('totalTi').style.display = 'block';
}





  document.getElementById('totalTip').style.display = 'none';
  document.getElementById('each').style.display = 'none';



 document.getElementById('calculate').onclick = function () {
    calculate();
}

