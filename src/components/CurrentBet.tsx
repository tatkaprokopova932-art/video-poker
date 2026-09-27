type CurrentBetProps = {
  bet: number;
};

/**
 * Displays the player's current bet.
 *
 * @param bet - The current number of coins bet by the player.
 * @returns The current bet UI.
 */

function CurrentBet({ bet }: CurrentBetProps) {
  return <p className="game-stat">
  <span>Bet</span>
  <strong>{bet}</strong>
</p>
}

export default CurrentBet;
