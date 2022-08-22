const playerArray = [];
function display(cartPlayer) {
    const playerList = document.getElementById('finalPlayersName');
    playerList.innerHTML = '';

    for (let i = 0; i < cartPlayer.length; i++) {
        // console.log(cartPlayer[i]);
        const li = document.createElement('li');
        li.innerHTML = `<li>${i + 1}. ${cartPlayer[i]}</li>`;
        playerList.appendChild(li)
    }
}

function addToCart(element) {
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    document.getElementById('total-added-players').innerText = playerArray.length;
    display(playerArray);
}