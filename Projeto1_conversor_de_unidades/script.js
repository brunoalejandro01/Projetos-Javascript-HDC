// Selecionar os elementos
let inputElement = document.querySelector('#input')
let outputElement = document.querySelector('#output')
let fromElement = document.querySelector('#from')
let toElement = document.querySelector('#to')
let convertBtn = document.querySelector('#convert-btn')
let messageElement = document.querySelector('#message')

function convertValues(){
    const fromValue = fromElement.value;
    const toValue = toElement.value
    const inputValue = Number(inputElement.value)

    // validação para o caso de unidades iguais
    if(fromValue === toValue){
        outputElement.value = inputElement.value
        messageElement.textContent = 'As unidades escolhidas são iguais.'
        return
    }

    let result 
    switch (fromValue) {
        case 'km':
            switch (toValue) {
                case 'km':
                    result = inputValue
                    break
                case 'hm':
                    result = inputValue * 10
                    break;
                case 'dam':
                    result = inputValue * 100
                    break;
                case 'm':
                    result = inputValue * 1000
                    break;
                case 'dm':
                    result = inputValue * 10000
                    break;
                case 'cm':
                    result = inputValue * 100000
                    break;
                case 'mm':
                    result = inputValue * 1000000
                    break;
            }
        break;
        case 'hm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 10
                    break;
                case 'hm':
                    result = inputValue 
                    break;
                case 'dam':
                    result = inputValue * 10
                    break;
                case 'm':
                    result = inputValue * 100
                    break;
                case 'dm':
                    result = inputValue * 1000
                    break;
                case 'cm':
                    result = inputValue * 10000
                    break
                case 'mm':
                    result = inputValue * 100000
                    break
            }
        break;
        case 'dam':
            switch (toValue) {
                case 'km':
                    result = inputValue / 100
                    break;
                case 'hm':
                    result = inputValue / 10 
                    break;
                case 'dam':
                    result = inputValue 
                    break;
                case 'm':
                    result = inputValue * 10
                    break;
                case 'dm':
                    result = inputValue * 100
                    break;
                case 'cm':
                    result = inputValue * 1000
                    break;
                case 'mm':
                    result = inputValue * 10000
                    break;
            }
        break;
        case 'm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 1000
                    break;
                case 'hm':
                    result = inputValue / 100
                    break;
                case 'dam':
                    result = inputValue / 10
                    break;
                case 'm':
                    result = inputValue
                    break;
                case 'dm':
                    result = inputValue * 10
                    break;
                case 'cm':
                    result = inputValue * 100
                    break;
                case 'mm':
                    result = inputValue * 1000
                    break;
            }
        break;
        case 'dm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 10000
                    break;
                case 'hm':
                    result = inputValue / 1000
                    break;
                case 'dam':
                    result = inputValue / 100
                    break;
                case 'm':
                    result = inputValue / 10
                    break;
                case 'dm':
                    result = inputValue
                    break;
                case 'cm':
                    result = inputValue * 10
                    break;
                case 'mm':
                    result = inputValue * 100
                    break;
            }
        break;
        case 'cm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 100000
                    break;
                case 'hm':
                    result = inputValue / 10000
                    break;
                case 'dam':
                    result = inputValue / 1000
                    break;
                case 'm':
                    result = inputValue / 100
                    break;
                case 'dm':
                    result = inputValue / 10
                    break;
                case 'cm':
                    result = inputValue
                    break;
                case 'mm':
                    result = inputValue * 10
                    break;
            }
        break;
        case 'mm':
            switch (toValue) {
                case 'km':
                    result = inputValue / 1000000
                    break;
                case 'hm':
                    result = inputValue / 100000
                    break;
                case 'dam':
                    result = inputValue / 10000
                    break;
                case 'm':
                    result = inputValue / 1000
                    break;
                case 'dm':
                    result = inputValue / 100
                    break;
                case 'cm':
                    result = inputValue / 10
                    break;
                case 'mm':
                    result = inputValue
                    break;
            }
        break;
    }
    // Exibir resultado no input
    messageElement.textContent = '';
    outputElement.value = result

    // Exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text
    
    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`
    messageElement.textContent = message

    return
}
convertBtn.addEventListener('click', convertValues)