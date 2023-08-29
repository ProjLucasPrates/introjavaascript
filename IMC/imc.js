function calcula_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.altura.value;

    var calculo = (peso/(altura*altura))

    if(caculo<18.5){
        alert("Você está magro seu indíce é de" + calculo);
    }
    else if(caculo>=18.5 && calculo<24.9){
        alert("Você está normal seu indíce é de" + calculo);
    }
    else if(caculo>=25 && calculo<29.9){
        alert("Você está com sobre peso seu indíce é de" + calculo);
    }
    else if(caculo>=30 && calculo<39.9){
        alert("Você está com obesidade seu indíce é de" + calculo);
    }
    else if(caculo>=40){
        alert("Você está com obesidade grave seu indíce é de" + calculo);
    }
}