let num1 , num2;

num1 = Number(prompt("Digite o primeiro número: "));
num2 = Number(prompt("Digite o segundo número: "));

if(num1 > num2){
    alert(num1 + " é maior que " + num2);
}
else if (num1 < num2){
    alert(num1 + " é menor que " + num2);
}
else{
    alert("Os números são iguais")
}
