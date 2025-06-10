const Display = document.getElementById('display')
function display(valor) {
    Display.value += valor
}
function clearDisplay() {
    Display.value = ''
}
function clearEntry() {
    Display.value = Display.value.substr(0, Display.value.length - 1)
}
function result() {
    let textDisplay = Display.value
    let Result = eval(textDisplay)
    Display.value = Result
}