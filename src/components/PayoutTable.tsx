import { payouts } from "../data/payouts";

/**
 * Displays the payout table for winning poker hands.
 *
 * @returns The payout table UI.
 */
function PayoutTable() {
  return (
    <section className="payout-section">
      <h2>Payout Table</h2>

      <table className="payout-table">
        <thead>
          <tr>
            <th scope="col">Hand</th>
            <th scope="col">Payout</th>
          </tr>
        </thead>

        <tbody>
          {payouts
            .filter((payout) => payout.multiplier > 0)
            .map((payout) => (
              <tr key={payout.hand}>
                <td>{payout.label}</td>
                <td>{payout.multiplier}×</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default PayoutTable;