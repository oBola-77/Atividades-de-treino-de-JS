let num1, num2, num3;

num1 = Number(prompt("Digite o primeiro número: "));
num2 = Number(prompt("Digite o segundo número: "));
num3 = Number(prompt("Digite o terceiro número: "));

if(num1 > num2 && num1 > num3){
    alert("O número " + num1 + " é maior que os numeros " + num2 + " e " + num3);
}
else if(num2 > num1 && num2 > num3){
    alert("O número " + num2 + " é maior que os números " + num1 + " e " + num3);
}
else if(num1 === num2 && num1 === num3){
    alert("Os números são iguais")
}
else{
    alert("O número " + num3 + " é maior que os números " + num1 + " e " + num2);
}