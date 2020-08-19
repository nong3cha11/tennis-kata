//
// Your implementations
//
function updateGameScore(
  playerOne: number,
  playerTwo: number
): { player1: number; player2: number } {
  return { player1: playerOne, player2: playerTwo };
}
function decideGameWinner(game: { player1: number; player2: number }): string {
  return game.player1 > game.player2 ? 'Player 1' : 'Player 2';
}
function printScore(playerPoints: [number, number]): string {
  const player1Points = playerPoints[0];
  const player2Points = playerPoints[1];
  const points = ['love', 'fifteen', 'thirty', 'forty'];
  if (player1Points >= 3 && player2Points >= 3) {
    if (player1Points === player2Points) {
      return 'deuce';
    } else if (
      player1Points - player2Points === 1 ||
      player1Points - player2Points === -1
    ) {
      return `advantage ${
        player1Points > player2Points ? 'player 1' : 'player 2'
      }`;
    }
  } else {
    if (player1Points !== player2Points) {
      return player1Points > player2Points ? 'Player 1' : 'Player 2';
    }
    return `${points[player2Points]} - ${points[player2Points]}`;
  }
}
