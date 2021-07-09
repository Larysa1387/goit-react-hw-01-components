import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
	<table className={styles.transaction_history}>
		<thead className={styles.table_header}>
			<tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			</tr>
		</thead>

		<tbody>
			{transactions.map(({ id, type, amount, currency }) => (
				<Transaction key={id} type={type} amount={amount} currency={currency} />
			))}
		</tbody>
	</table>
);

// TransactionHistory.defaultProps = {
//   transactions: [],
// };

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
  ).isRequired,
};

export default TransactionHistory;
