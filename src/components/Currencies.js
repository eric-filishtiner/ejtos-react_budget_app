import React, { useState , useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currencies = () => {
    const { dispatch, currency } = useContext(AppContext);
const set_currency = (object) => {
    //console.log(object.target);
    //console.log(object.target.value);
    console.log(currency);
    const current_currency = object.target.value.charAt(0);
    object.target.value = "Currency(" + object.target.value + ")";
    dispatch({
        type: 'CHG_CURRENCY',
        payload: current_currency
    });
}
    return (
        <div className='alert alert-secondary' id = 'outer-div'>
            <span id="currency-span">
                <select id="currencies"  onChange={(event) => set_currency(event)} >
                    <option value="$ Dollar" label="$ Dollar"></option>
                    <option value="£ Pound" label="£ Pound"></option>
                    <option value="€ Euro" label="€ Euro"></option>
                    <option value="₹ Ruppee" label="₹ Ruppee"></option>
                    <option selected style={{display: 'none'}}value="Currency($ Dollar)" label="Currency($ Dollar)"></option>
                    <option style={{display: 'none'}} value="Currency(£ Pound)" label="Currency(£ Pound)"></option>
                    <option style={{display: 'none'}} value="Currency(€ Euro)" label="Currency(€ Euro)"></option>
                    <option style={{display: 'none'}} value="Currency(₹ Ruppee)" label="Currency(₹ Ruppee)"></option>
                </select>
            </span>
        </div>
    );
};
export default Currencies;