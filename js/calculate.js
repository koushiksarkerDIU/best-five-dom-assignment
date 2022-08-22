document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getValueByInputField('per-player-cost');
    const totalAddedPlayers = document.getElementById('total-added-players').innerText;
    const cost = totalAddedPlayers * perPlayerCost;
    document.getElementById('player-expensive').innerText = cost;
})

