import css from '../css/transaction.module.css'
const transaction = require('./data/transactions.json');

export const Transaction =() => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tBody}>
                {transaction.map(({type, amount, currency }, index) => (
                    <tr key={index} className={index % 2 === 0 ? css.evenRow : css.oddRow}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
))}
            </tbody>
        </table>

    )
}