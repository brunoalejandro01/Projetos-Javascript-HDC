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
                    break;
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
    // Exibir resultado no input
    messageElement.textContent = '';
    outputElement.value = result.toFixed(1)

    // Exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text
    
    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`
    messageElement.textContent = message

    return
}
convertBtn.addEventListener('click', convertValues)