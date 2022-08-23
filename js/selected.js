const playerArray = [];
function display(cartPlayer) {
    const playerList = document.getElementById('final-players-name');
    playerList.innerHTML = '';

    for (let i = 0; i < cartPlayer.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<li>${i + 1}. ${cartPlayer[i]}</li>`;
        playerList.appendChild(li);

    }
}

function addToCart(element) {
    element.disabled = true;
    const playerName = element.parentNode.children[0].innerText;
    if (playerArray.length <= 4) {
        playerArray.push(playerName);
        document.getElementById('total-added-players').innerText = playerArray.length;
        display(playerArray);
    }
    else {
        return alert('You Can only add maxium 5 playes')
    }

}