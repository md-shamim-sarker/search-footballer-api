const loadData = playerName => {
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`)
        .then(response => response.json())
        .then(data => display(data))
        .catch(error => console.log(error));
};

const display = data => {
    const main = document.getElementById('main');
    main.innerHTML = `
        <div class="player-image">
            <img src="${data.player[0].strThumb}" alt="">
        </div>
        <div class="player-details">
            <div>
                <h2>Information</h2>
                <p>
                    Player Name: ${data.player[0].strPlayer}<br>
                    Nationality: ${data.player[0].strNationality}<br>
                    Height: ${data.player[0].strHeight}<br>
                    Weight: ${data.player[0].strWeight}
                </p>
            </div>
        </div>
    `;
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
};

document.getElementById('search-btn').addEventListener('click', () => {
    const playerName = document.getElementById('search-input').value;
    loadData(playerName);
    console.log(playerName);
});

