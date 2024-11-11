export function winner(cells) {
    /*
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    */
    const winnerState = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for(const [a, b, c] of winnerState) {
        if(cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}
