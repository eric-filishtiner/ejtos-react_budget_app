import React, { useState } from 'react';
const Currencies = () => {
    const { currency } = useState('');
    const {chosenCurrency, setChosenCurrency} = useState('Currency($ Dollar)')
const set_currency = (object) => {
    //console.log(object.target);
    //console.log(object.target.value);
    object.target.value = "Currency(" + object.target.value + ")";
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