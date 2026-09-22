const payouts = [
{
hand: "Royal Flush",
  coins: 250,
},

{
  hand: "Straight Flush",
  coins : 50,
},

{
  hand: "Four of a Kind",
  coins: 25,
},

{
  hand: "Full House",
  coins: 9,
},
{
  hand: "Flush",
  coins: 6,
},

{
  hand: "Straight",
  coins: 4,
},

{
  hand: "Three of a Kind",
  coins: 3,
},

{
  hand: "Two Pair",
  coins: 2,
},

{
  hand: "Jacks or Better",
  coins: 1,
},



]

/**
 * Displays the payout table for winning poker hands.
 *
 * @returns The payout table UI.
 */

function PayoutTable() {
  return (
  <div>
    <h2>Payout Table</h2>

    <table>
      <thead>
        <tr>
          <th>Hand</th>
          <th>Payout</th>
        </tr>
      </thead>

      <tbody>
        {payouts.map((payout) => (
          <tr key={payout.hand}>
            <td>{payout.hand}</td>
            <td>{payout.coins}</td>
          </tr>
        ))}
      </tbody>
    </table>

  
  </div>
)}

export default PayoutTable 
