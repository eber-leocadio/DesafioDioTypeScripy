const calculadora = document.getElementById('calculadora') as HTMLElement
const conversor = document.getElementById('conversor') as HTMLElement
const converPeso = document.getElementById('converPeso') as HTMLElement
const number1 = document.getElementById('numberCalc01') as HTMLInputElement
const number2 = document.getElementById('numberCalc02') as HTMLInputElement
const resultado = document.getElementById('resulCalc') as HTMLElement
const numPeso = document.getElementById('numberPeso') as HTMLInputElement
const resultPeso = document.getElementById('resultPeso') as HTMLElement
const numTemp = document.getElementById('numberTemp') as HTMLInputElement
const resultTemp = document.getElementById('resultTemp') as HTMLElement
const cadPessoa = document.getElementById('cadastroPessoas') as HTMLElement
const nome = document.getElementById('nomePessoa') as HTMLInputElement
const sobrenome = document.getElementById('sobrenomePessoa') as HTMLInputElement
const email = document.getElementById('emailPessoa') as HTMLInputElement
const telefone = document.getElementById('telefonePessoa') as HTMLInputElement
const tabelaCadastros = document.getElementById('tabelaCadastros') as HTMLElement


function exibirCalculadora() {
    calculadora.classList.remove('none')
    conversor.classList.add('none')
    converPeso.classList.add('none')
    cadPessoa.classList.add('none')

}

function exibirConversor() {
    conversor.classList.remove('none')
    calculadora.classList.add('none')
    converPeso.classList.add('none')
    cadPessoa.classList.add('none')

}

function exibirConverPeso() {
    converPeso.classList.remove('none')
    calculadora.classList.add('none')
    conversor.classList.add('none')
    cadPessoa.classList.add('none')
}

function exibirCadastroPessoas() {
    cadPessoa.classList.remove('none')
    converPeso.classList.add('none')
    calculadora.classList.add('none')
    conversor.classList.add('none')
}


//FUNCOES CALCULADORA
function somar(): void {
    let n1 = Number(number1.value)
    let n2 = Number(number2.value)

    if (n1 && n2) {
        let res = n1 + n2;
        resultado.innerHTML = `${res}`
    } else {
        window.alert('Digite os numeros para poder calcular!')
    }

}

function subtrair(): void {
    let n1 = Number(number1.value)
    let n2 = Number(number2.value)

    if (n1 && n2) {
        let res = n1 - n2;
        resultado.innerHTML = `${res}`
    } else {
        window.alert('Digite os numeros para poder calcular!')
    }
}

function multiplicar(): void {
    let n1 = Number(number1.value)
    let n2 = Number(number2.value)

    if (n1 && n2) {
        let res = n1 * n2;
        resultado.innerHTML = `${res}`
    } else {
        window.alert('Digite os numeros para poder calcular!')
    }

}

function dividir(): void {
    let n1 = Number(number1.value)
    let n2 = Number(number2.value)


    if (n1 && n2) {
        if (n2 == 0) {
            resultado.innerHTML = 'Impossivel Dividir por Zero'
        } else {
            let res = n1 / n2;
            resultado.innerHTML = `${res.toFixed(2)}`
        }

    } else {
        window.alert('Digite os numeros para poder calcular!')
    }
}

//FUNCOES CONVERSOR TEMPERATURA
function celsiusFahrenheit(): void {
    let temp: number = Number(numTemp.value)

    if (temp) {
        let res: number = (temp * 1.8) + 32;

        resultTemp.innerHTML = `${res.toFixed(2)}`
    } else {
        window.alert('Digite os numeros para poder converter!')

    }
}

function fahrenheitCelsius(): void {
    let temp: number = Number(numTemp.value)

    if (temp) {
        let res: number = (temp - 32) * (5 / 9);

        resultTemp.innerHTML = `${res.toFixed(2)}`
    } else {
        window.alert('Digite os numeros para poder converter!')
    }
}

//CONVERSOR PESO
function kilosLibras(): void {
    let peso: number = Number(numPeso.value);

    if (peso) {
        let res = peso * 2.205;

        resultPeso.innerHTML = `${res.toFixed(2)}`
    } else {
        window.alert('Digite os numeros para poder converter!')
    }

}

function librasKilos(): void {
    let peso: number = Number(numPeso.value);

    if (peso) {
        let res = peso / 2.205;

        resultPeso.innerHTML = `${res.toFixed(2)}`
    } else {
        window.alert('Digite os numeros para poder converter!')
    }
}

//CADASTRO DE PESSOAS

type Pessoa = {
    nome: string,
    sobrenome: string,
    email: string,
    telefone: string,
}

let pessoas: Array<Pessoa> = []
let pessoa: Pessoa

function cadastrarPessoa() {

    if (nome.value && sobrenome.value && email.value && telefone.value) {
        pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            telefone: telefone.value
        }

        pessoas.push(pessoa);

        nome.value = ''
        sobrenome.value = ''
        email.value = ''
        telefone.value = ''
    } else {
        window.alert('Verifique se nao falta algum dado!')
    }



}

function exibirCadastros() {
    let res = `<table class="table"><thead class="table-dark"><tr><th>Nome</th><th>Sobrenome</th><th>Email</th><th>Telefone</th></tr></thead><tbody>`

    for (let i = 0; i < pessoas.length; i++) {
        res += `<tr>
        <td>${pessoas[i].nome}</td>
        <td>${pessoas[i].sobrenome}</td>
        <td>${pessoas[i].email}</td>
        <td>${pessoas[i].telefone}</td>
    </tr>`
    }

    res += `</tbody></table>`

    tabelaCadastros.innerHTML = res

}

