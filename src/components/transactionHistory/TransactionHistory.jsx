export const TransactionHistory = ({ data }) => {
  const renderTransactionTable = () =>
    data.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ));

    return <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {data && renderTransactionTable()}
        </tbody>
    </table>;
};
