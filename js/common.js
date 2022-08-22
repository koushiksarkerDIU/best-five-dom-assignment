function getValueByInputField(elementId) {
    const inputValueElement = document.getElementById(elementId);
    const inputValueString = inputValueElement.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}

function getValueByInnerText(elementId) {
    const inputValueElement = document.getElementById(elementId);
    const innerValueString = inputValueElement.innerText;
    const innerValue = parseInt(innerValueString);
    return innerValue;
}