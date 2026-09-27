import PayoutTable from "../components/PayoutTable";

/**
 * Displays the Video Poker rules and payout table.
 *
 * @returns The rules page.
 */
function RulesPage() {
  return (
    <main>
      <h2>Rules</h2>

      <section>
        <h3>How to play</h3>

        <ol>
          <li>Select or create a player on the Players page.</li>
          <li>Press Deal to receive five cards.</li>
          <li>Choose the cards you want to keep by pressing HOLD.</li>
          <li>Press Draw to replace the cards you did not hold.</li>
          <li>Your final five-card hand determines your payout.</li>
        </ol>
      </section>

      <section>
        <h3>Poker hands</h3>

        <p>
          The stronger your final poker hand is, the higher the payout.
          Jacks or Better is the lowest winning hand.
        </p>

        <PayoutTable />
      </section>
    </main>
  );
}

export default RulesPage;