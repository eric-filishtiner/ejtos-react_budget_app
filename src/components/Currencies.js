import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currencies.css'
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
        <div className='alert alert-secondary' id = 'outer-div' style={{backgroundColor: 'lightgreen', width: '235px', height: '50px'}}>
            <span style={{ backgroundColor: 'lightgreen'}} id="currency-span">
                <select style={{ backgroundColor: 'lightgreen', border: 'none', outline: 'none', fontSize: '23px' }} id="currencies" defaultValue="Currency(£ Pound)" onChange={(event) => set_currency(event)} >
                    <option value="$ Dollar" label="$ Dollar"></option>
                    <option value="£ Pound" label="£ Pound"></option>
                    <option value="€ Euro" label="€ Euro"></option>
                    <option value="₹ Ruppee" label="₹ Ruppee"></option>
                    <option style={{display: 'none'}}value="Currency($ Dollar)" label="Currency($ Dollar)"></option>
                    <option style={{display: 'none'}} value="Currency(£ Pound)" label="Currency(£ Pound)"></option>
                    <option style={{display: 'none'}} value="Currency(€ Euro)" label="Currency(€ Euro)"></option>
                    <option style={{display: 'none'}} value="Currency(₹ Ruppee)" label="Currency(₹ Ruppee)"></option>
                </select>
            </span>
        </div>
    );
};
export default Currencies;