import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce((sum, t) => (sum += t.amount), 0).toFixed(2);
    const sign = total < 0 ? '-' : '+';

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{sign}${Math.abs(total)}</h1>
        </div>
    )
}
