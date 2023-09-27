// Selecionar os elementos
let inputElement = document.querySelector('#input')
let outputElement = document.querySelector('#output')
let unitFrom = document.querySelector('#from')
let unitTo = document.querySelector('#to')
let convertBtn = document.querySelector('#convert-btn')
let messageElement = document.querySelector('#message')

function convertValues(){
    const fromValue = unitFrom.value;
    const toValue = unitTo.value
    const inputValue = Number(inputElement.value)

    // validação para o caso de unidades iguais
    if(fromValue === toValue){
        outputElement.value = inputElement.value
        messageElement.textContent = 'As unidades escolhidas são iguais.'
        return
    }

    let result 
    switch (fromValue) {
        case 'm':
            switch (toValue) {
                case 'm':
                    result = inputValue
                    break;
                case 'km':
                    result = inputValue / 1000
                    break;
                case 'cm':
                    result = inputValue * 100
                    break;
                case 'mm':
                    result = inputValue * 1000
            }
            break;
        case 'km':
            switch (toValue) {
                case 'm':
                    result = inputValue * 1000
                    break;
                case 'km':
                    result = inputValue
                    break
                case 'cm':
                    result = inputValue * 100000
                    break
                case 'mm':
                    result = inputValue * 1000000
                    break
            }
            break;
        case 'cm':
            switch (toValue) {
                case 'm':
                    result = inputValue / 100
                    break;
                case 'km':
                    result = inputValue / 100000
                    break;
                case 'cm':
                    result = inputValue
                    break
                case 'mm':
                    result = inputValue * 10
                    break;
            }
            break;
        case 'mm':
            switch (toValue) {
                case 'm':
                    result = inputValue / 1000
                    break;
                case 'km':
                    result = inputValue / 1000000
                    break
                case 'cm':
                    result = inputValue / 10
                    break
                case 'mm':
                    result = inputValue
                    break
            }
            break;
    }
    messageElement.textContent = '';
    outputElement.value = result.toFixed(2)
} 

convertBtn.addEventListener('click', convertValues)

/*
    // Realizar as conversões diretamente entre as unidades selecionadas
    let result;
    switch (fromValue) {
        case 'm':
            switch (toValue) {
                case 'm':
                    result = inputValue;
                    break;
                case 'km':
                    result = inputValue / 1000;
                    break;
                case 'cm':
                    result = inputValue * 100;
                    break;
                case 'mm':
                    result = inputValue * 1000;
                    break;
            }
            break;
        case 'km':
            switch (toValue) {
                case 'm':
                    result = inputValue * 1000;
                    break;
                case 'km':
                    result = inputValue;
                    break;
                case 'cm':
                    result = inputValue * 100000;
                    break;
                case 'mm':
                    result = inputValue * 1000000;
                    break;
            }
            break;
        case 'cm':
            switch (toValue) {
                case 'm':
                    result = inputValue / 100;
                    break;
                case 'km':
                    result = inputValue / 100000;
                    break;
                case 'cm':
                    result = inputValue;
                    break;
                case 'mm':
                    result = inputValue * 10;
                    break;
            }
            break;
        case 'mm':
            switch (toValue) {
                case 'm':
                    result = inputValue / 1000;
                    break;
                case 'km':
                    result = inputValue / 1000000;
                    break;
                case 'cm':
                    result = inputValue / 10;
                    break;
                case 'mm':
                    result = inputValue;
                    break;
            }
            break;
    }

    // Exibir o resultado e limpar mensagens anteriores
    messageElement.textContent = '';
    outputElement.value = result.toFixed(2); // Limita o resultado a duas casas decimais
}

convertBtn.addEventListener('click', convertValues)

*/

// Convertendo o valor de entrada para metros como unidade padrão
// let meters
// switch (fromValue) {
//     case 'm':
//         meters = inputElement.value
//         break;
//     case 'km':
//         meters = inputElement.value * 1000;
//         break;
//     case 'cm':
//         meters = inputElement.value / 100;
//         break
//     case 'mm':
//         meters = inputElement.value / 1000
//         break
// }

// let result;
// switch(toValue){
//     case 'm':
//         result = meters
//         break;
//     case 'km':
//         result = meters / 1000
//         break;
//     case 'cm':
//         result = meters * 100;
//         break;
//     case 'mm':
//         result = meters * 1000
//         break;
// }

// console.log(fromValue, toValue)
// console.log(meters, result)