import React, { useState } from 'react';
import './Grocery.css';

const Grocery = () => {
  const [items, setItems] = useState([]);
  const [payment, setPayment] = useState('');

  const groceryList = [
    { name: 'Grapes', price: 361.56, image: 'https://th.bing.com/th/id/OIP.KNHJ3Zj5fMpWo1Hhs97uDwAAAA?rs=1&pid=ImgDetMain' },
    { name: 'Oranges', price: 30.02, image: 'https://purepng.com/public/uploads/large/purepng.com-orange-orangesorangefruitbitter-orangeorangesclip-art-1701527336574mtnk9.png' },
    { name: 'Kiwi', price: 568.82, image: 'https://th.bing.com/th/id/R.86dad7b0c0ab1f85a8d8a71721139790?rik=HzFSvTTEMAWl6w&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fd3%2fKiwi_aka.jpg&ehk=3vSeaIg%2bqI81ocb%2fuj6skPJB4uBTzHVGFAq2C7ptAaE%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Banana', price: 62.21, image: 'https://th.bing.com/th/id/R.556937069c339cbfea8ad91ac54c0570?rik=a%2b9w5qWH1lM4rA&riu=http%3a%2f%2fpamsdailydish.com%2fwp-content%2fuploads%2f2015%2f04%2fBunch-Bananas-2.jpg&ehk=58pOED6p9l77ndP7z29CEym%2fTOahIZDhj2qd4Pj8dz8%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Cucumber', price: 64.99, image: 'https://www.freshpoint.com/wp-content/uploads/2020/02/freshpoint-english-cucumber-scaled.jpg' },
  ];

  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.name === item.name);
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePaymentChange = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setPayment(value);
    }
  };

  const isPaymentSufficient = () => {
    const paymentAmount = parseFloat(payment);
    return !isNaN(paymentAmount) && paymentAmount >= totalPrice;
  };

  const formatCurrency = (amount) => {
    return `₱ ${amount.toFixed(2)}`;
  };

  const changeAmount = () => {
    const paymentAmount = parseFloat(payment);
    return paymentAmount - totalPrice;
  };

  return (
    <div className="App">
      <h1>Grocery List</h1>
      
      <div className="box">
        <h2>Available Items</h2>
        <ul className="grocery-list">
          {groceryList.map((grocery, index) => (
            <li key={index} onClick={() => addItem(grocery)} className="grocery-item">
              <a href={grocery.image} download={grocery.name} target="_blank" rel="noopener noreferrer">
                <img src={grocery.image} alt={grocery.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              </a>
              {grocery.name} - {formatCurrency(grocery.price)}
            </li>
          ))}
        </ul>
      </div>

      <div className="box">
        <h2>Selected Items</h2>
        <ul className="selected-items-list">
          {items.map((item, index) => (
            <li key={index}>
              {item.name}: {item.quantity} = {formatCurrency(item.price * item.quantity)}
            </li>
          ))}
        </ul>
      </div>

      <h2>Total Price: {formatCurrency(totalPrice)}</h2>

      <div className="payment-section">
        <h2>Payment</h2>
        <input 
          type="text" 
          value={payment} 
          onChange={handlePaymentChange} 
          placeholder="Enter payment amount" 
        />
        <h3>
          {payment && isNaN(payment) ? 
            'Please enter a valid number' :
            isPaymentSufficient() ? 
            `Payment is sufficient! Your change is ${formatCurrency(changeAmount())}.` :  
            `Insufficient payment. You need ${formatCurrency(totalPrice - parseFloat(payment))} more.`
          }
        </h3>
      </div>
    </div>
  );
};

export default Grocery;