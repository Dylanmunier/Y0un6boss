import React, { useState, useEffect } from 'react';
import { fetchPaymentMethods, createPaymentIntent } from '../../services/api';
import './PaymentIntegration.css';

const PaymentIntegration = () => {
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [selectedMethod, setSelectedMethod] = useState('');
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadPaymentMethods = async () => {
            try {
                const methods = await fetchPaymentMethods();
                setPaymentMethods(methods);
            } catch (err) {
                setError('Failed to load payment methods');
            }
        };

        loadPaymentMethods();
    }, []);

    const handlePayment = async () => {
        setLoading(true);
        setError('');
        try {
            await createPaymentIntent(selectedMethod, amount);
            alert('Payment successful!');
        } catch (err) {
            setError('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-integration">
            <h2>Payment Integration</h2>
            {error && <div className="error">{error}</div>}
            <div>
                <label htmlFor="payment-method">Select Payment Method:</label>
                <select
                    id="payment-method"
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                >
                    <option value="">--Select--</option>
                    {paymentMethods.map((method) => (
                        <option key={method.id} value={method.id}>
                            {method.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button onClick={handlePayment} disabled={loading || !selectedMethod || amount <= 0}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </div>
    );
};

export default PaymentIntegration;