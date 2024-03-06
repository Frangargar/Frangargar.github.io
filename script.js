document.getElementById('generateBingo').addEventListener('click', generateEmptyBingoCard);

function generateEmptyBingoCard() {
    const bingoCardElement = document.getElementById('bingoCard');
    bingoCardElement.innerHTML = ''; // Limpiar el cartón anterior

    for (let i = 0; i < 16; i++) {
        if (i === 7) { // Dejar la casilla central libre
            bingoCardElement.innerHTML += '<div class="bingo-cell free">Libre</div>';
            continue;
        }
        bingoCardElement.innerHTML += '<div class="bingo-cell"></div>'; // Añadir casilla vacía
    }
}
