type TotalCoinsProps = {
  coins: number;
};

/**
 * Displays the player's total number of coins.
 *
 * @param coins - The current number of coins.
 * @returns The total coins UI.
 */

function TotalCoins ( {coins}: TotalCoinsProps){
  return <p>Coins: {coins}</p>;
}

export default TotalCoins;