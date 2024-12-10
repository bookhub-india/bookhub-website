import React, { useState } from 'react';
import './Research.css';

const Donate = () => {
    const [donationData, setDonationData] = useState({
        name: '',
        email: '',
        amount: ''
    });

    const handleChange = (e) => {
        setDonationData({
            ...donationData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Donation submitted:', donationData);
    };

    return (
        <div className='donate-container'>
            <h1>Donate Us</h1>
            <p>Your contributions help us make a difference. Choose an amount to donate or customize your own!</p>
            <form onSubmit={handleSubmit} className='donation-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={donationData.name} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' value={donationData.email} onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>Donation Amount</label>
                    <input type='number' id='amount' name='amount' value={donationData.amount} onChange={handleChange} required />
                </div>
                <button type='submit' className='submit-button'>Donate</button>
            </form>
            <div className='payment-methods'>
                <h3>Payment Methods</h3>
                <p>We accept the following payment methods:</p>
                <ul>
                    <li><a href='#'>Credit/Debit Card</a></li>
                    <li><a href='#'>PayPal</a></li>
                    <li><a href='#'>Bank Transfer</a></li>
                </ul>
            </div>
            <div className='recurring-donations'>
                <h3>Recurring Donations</h3>
                <p>If you would like to set up recurring donations, please select the frequency:</p>
                <select>
                    <option value='monthly'>Monthly</option> {/* Closing tag added here */}
                    <option value='quarterly'>Quarterly</option>
                    <option value='yearly'>Yearly</option>
                </select>
            </div>
        </div>
    );
};

export default Donate;