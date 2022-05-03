import PropTypes from "prop-types";
import style from './TransactionHistory.module.css'

export const TransactionHistory = ({ data }) => {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.tableBoby}>
            <td className={style.transactionType}>{type}</td>
            <td className={style.transactionAmpunt}>{amount}</td>
            <td className={style.transactionCurrency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>);
};


TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
}