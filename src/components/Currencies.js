import React, { useState } from 'react';
const Currencies = () => {
    const { currency } = useState('');
const set_currency = (object) => {
    console.log(object.target);
    console.log(object.target.value);
}
    return (
        <div className='alert alert-secondary' id = 'outer-div'>
            <span id="currency_span">
                <select id="currencies" onChange={(event) => set_currency(event)}>
                    <option value="$ Dollar" label = "Currency($ Dollar)">$ Dollar</option>
                    <option value="£ Pound">£ Pound</option>
                    <option value="€ Euro">€ Euro</option>
                    <option value="₹ Ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};
export default Currencies;