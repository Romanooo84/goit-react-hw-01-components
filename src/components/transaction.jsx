const transaction = require('./users/transactions.json');

export const Transaction =() => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transaction.map(({type, amount, currency }, index) => (
                    <tr key={index}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
))}
            </tbody>
        </table>

    )
}