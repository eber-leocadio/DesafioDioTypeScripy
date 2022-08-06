var calculadora = document.getElementById('calculadora');
var conversor = document.getElementById('conversor');
var converPeso = document.getElementById('converPeso');
var number1 = document.getElementById('numberCalc01');
var number2 = document.getElementById('numberCalc02');
var resultado = document.getElementById('resulCalc');
var numPeso = document.getElementById('numberPeso');
var resultPeso = document.getElementById('resultPeso');
var numTemp = document.getElementById('numberTemp');
var resultTemp = document.getElementById('resultTemp');
var cadPessoa = document.getElementById('cadastroPessoas');
var nome = document.getElementById('nomePessoa');
var sobrenome = document.getElementById('sobrenomePessoa');
var email = document.getElementById('emailPessoa');
var telefone = document.getElementById('telefonePessoa');
var tabelaCadastros = document.getElementById('tabelaCadastros');
function exibirCalculadora() {
    calculadora.classList.remove('none');
    conversor.classList.add('none');
    converPeso.classList.add('none');
    cadPessoa.classList.add('none');
}
function exibirConversor() {
    conversor.classList.remove('none');
    calculadora.classList.add('none');
    converPeso.classList.add('none');
    cadPessoa.classList.add('none');
}
function exibirConverPeso() {
    converPeso.classList.remove('none');
    calculadora.classList.add('none');
    conversor.classList.add('none');
    cadPessoa.classList.add('none');
}
function exibirCadastroPessoas() {
    cadPessoa.classList.remove('none');
    converPeso.classList.add('none');
    calculadora.classList.add('none');
    conversor.classList.add('none');
}
//FUNCOES CALCULADORA
function somar() {
    var n1 = Number(number1.value);
    var n2 = Number(number2.value);
    if (n1 && n2) {
        var res = n1 + n2;
        resultado.innerHTML = "".concat(res);
    }
    else {
        window.alert('Digite os numeros para poder calcular!');
    }
}
function subtrair() {
    var n1 = Number(number1.value);
    var n2 = Number(number2.value);
    if (n1 && n2) {
        var res = n1 - n2;
        resultado.innerHTML = "".concat(res);
    }
    else {
        window.alert('Digite os numeros para poder calcular!');
    }
}
function multiplicar() {
    var n1 = Number(number1.value);
    var n2 = Number(number2.value);
    if (n1 && n2) {
        var res = n1 * n2;
        resultado.innerHTML = "".concat(res);
    }
    else {
        window.alert('Digite os numeros para poder calcular!');
    }
}
function dividir() {
    var n1 = Number(number1.value);
    var n2 = Number(number2.value);
    if (n1 && n2) {
        if (n2 == 0) {
            resultado.innerHTML = 'Impossivel Dividir por Zero';
        }
        else {
            var res = n1 / n2;
            resultado.innerHTML = "".concat(res.toFixed(2));
        }
    }
    else {
        window.alert('Digite os numeros para poder calcular!');
    }
}
//FUNCOES CONVERSOR TEMPERATURA
function celsiusFahrenheit() {
    var temp = Number(numTemp.value);
    if (temp) {
        var res = (temp * 1.8) + 32;
        resultTemp.innerHTML = "".concat(res.toFixed(2));
    }
    else {
        window.alert('Digite os numeros para poder converter!');
    }
}
function fahrenheitCelsius() {
    var temp = Number(numTemp.value);
    if (temp) {
        var res = (temp - 32) * (5 / 9);
        resultTemp.innerHTML = "".concat(res.toFixed(2));
    }
    else {
        window.alert('Digite os numeros para poder converter!');
    }
}
//CONVERSOR PESO
function kilosLibras() {
    var peso = Number(numPeso.value);
    if (peso) {
        var res = peso * 2.205;
        resultPeso.innerHTML = "".concat(res.toFixed(2));
    }
    else {
        window.alert('Digite os numeros para poder converter!');
    }
}
function librasKilos() {
    var peso = Number(numPeso.value);
    if (peso) {
        var res = peso / 2.205;
        resultPeso.innerHTML = "".concat(res.toFixed(2));
    }
    else {
        window.alert('Digite os numeros para poder converter!');
    }
}
var pessoas = [];
var pessoa;
function cadastrarPessoa() {
    if (nome.value && sobrenome.value && email.value && telefone.value) {
        pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            telefone: telefone.value
        };
        pessoas.push(pessoa);
        nome.value = '';
        sobrenome.value = '';
        email.value = '';
        telefone.value = '';
    }
    else {
        window.alert('Verifique se nao falta algum dado!');
    }
}
function exibirCadastros() {
    var res = "<table class=\"table\"><thead class=\"table-dark\"><tr><th>Nome</th><th>Sobrenome</th><th>Email</th><th>Telefone</th></tr></thead><tbody>";
    for (var i = 0; i < pessoas.length; i++) {
        res += "<tr>\n        <td>".concat(pessoas[i].nome, "</td>\n        <td>").concat(pessoas[i].sobrenome, "</td>\n        <td>").concat(pessoas[i].email, "</td>\n        <td>").concat(pessoas[i].telefone, "</td>\n    </tr>");
    }
    res += "</tbody></table>";
    tabelaCadastros.innerHTML = res;
}
