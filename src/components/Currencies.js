import React, { useState } from 'react';
const Currencies = () => {
    const { currency } = useState('');
    const [current_state, setCurrentState] = useState("Currency $ Dollar");
    const [current_state2, setCurrentState2] = useState("£ Pound");
    const [current_state3, setCurrentState3] = useState("€ Euro");
    const [current_state4, setCurrentState4] = useState("₹ Ruppee");
const set_currency = (object) => {
    //console.log(object.target);
    //console.log(object.target.value);
    setCurrentState("$ Dollar");
    setCurrentState2("£ Pound");
    setCurrentState3("€ Euro");
    setCurrentState4("₹ Ruppee");
    if(object.target.value === current_state)
    {
        console.log("1");
        setCurrentState('Currency (' + object.target.value + ')');
    }
    if(object.target.value === current_state2)
    {
        console.log("2");
        setCurrentState2('Currency (' + object.target.value + ')');
    }
    if(object.target.value === current_state3)
    {
        console.log("3");
        setCurrentState3('Currency (' + object.target.value + ')');
    }
    if(object.target.value === current_state4)
    {
        console.log("4");
        setCurrentState4('Currency (' + object.target.value + ')');
    }

    

    console.log(current_state.length);
}
const reset_currency = (object) => {
    setCurrentState("$ Dollar");
    setCurrentState2("£ Pound");
    setCurrentState3("€ Euro");
    setCurrentState4("₹ Ruppee");
    console.log("all set");
}
    return (
        <div className='alert alert-secondary' id = 'outer-div'>
            <span id="currency-span">
                <select id="currencies" onChange={(event) => set_currency(event)} >
                    <option value="$ Dollar" label={current_state}></option>
                    <option value="£ Pound" label={current_state2}></option>
                    <option value="€ Euro" label={current_state3}></option>
                    <option value="₹ Ruppee" label={current_state4}></option>
                </select>
            </span>
        </div>
    );
};
export default Currencies;