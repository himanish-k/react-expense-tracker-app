import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
    transactions.map(t => {
        if (t.amount < 0)
            expense += t.amount;
        else
            income += t.amount;
    });
        
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">{income.toFixed(2)}</p>
                </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">{Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    )
}
