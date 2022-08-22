function getValueByInputField(elementId) {
    const inputValueElement = document.getElementById(elementId);
    const inputValueString = inputValueElement.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}
