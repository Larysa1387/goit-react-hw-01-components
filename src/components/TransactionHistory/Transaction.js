import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ id, type, amount, currency }) => (
	<tr>
		<td>{type}</td>
		<td>{amount}</td>
		<td>{currency}</td>
	</tr>
);

Transaction.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
}

export default Transaction;
