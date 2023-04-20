import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useState('');
    const {dispatch, expenses} = useContext(AppContext);
    const {currency} = useContext(AppContext);
    const submitEvent = (Budget) => {
        if(Budget.length === 0){return;}
        if(parseInt(Budget) > 20000){
            alert("The budget cannot exceed 20000");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(totalExpenses > parseInt(Budget))
        {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        }
            dispatch({
                type: 'SET_BUDGET',
                payload: Budget
            });
};

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}
            <input type="number" 
            required = 'required'
            id="budget" 
            value = {budget}
            style={{ marginRight: '2rem' , size: 10, width: '132px'}}
            step={10}
            max={20000}
            onChange={(event) => {submitEvent(event.target.value)}}>

            </input>
            </span>
        </div>
    );
};
export default Budget;