const btn = document.getElementById('hitung');

btn.addEventListener('click', function(){

    let heigth = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    // let age = document.querySelector('#age');

    if(heigth == ''|| weight == ''){
        alert('please fill out the input fields');
        return;
    }

    heigth = heigth / 100

    let BMI = (weight / (heigth* heigth));

    BMI = BMI.toFixed(2);

    console.log(BMI);

    document.querySelector('#result').innerHTML = BMI;


});