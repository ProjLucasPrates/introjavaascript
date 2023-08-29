function calcula_imc(event){
    var altura = document.imcForm.altura.value;
    var peso = documet.imcFom.peso.value;

    var calculo = (peso/(altura*altura));

    if(caculo<18.5){
        resultado = "Você está magro seu indíce é de" + calculo
    }
    else if(caculo>=18.5 && calculo<24.9){
        resultado = "Você está normal seu indíce é de" + calculo
    }
    else if(caculo>=25 && calculo<29.9){
        resultado = "Você está com sobre peso seu indíce é de" + calculo
    }
    else if(caculo>=30 && calculo<39.9){
        resultado = "Você está com obesidade seu indíce é de" + calculo
    }
    else if(caculo>=40){
        resultado = "Você está com obesidade grave seu indíce é de" + calculo
    }

    Document.getElementById('resul').innerHTML = resultado;
}