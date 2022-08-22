document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getValueByInputField('per-player-cost');
    const totalAddedPlayers = document.getElementById('total-added-players').innerText;
    const cost = totalAddedPlayers * perPlayerCost;
    document.getElementById('player-expensive').innerText = cost;
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpensive = getValueByInnerText('player-expensive')
    const managerCost = getValueByInputField('manager-cost');
    const coachCost = getValueByInputField('coach-cost');

    const totalCost = playerExpensive + managerCost + coachCost;
    document.getElementById('total-cost').innerText = totalCost;
})