import React, { useState } from 'react';
import axios from 'axios';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'

const Slider = () => {
  const [amount, setAmount] = useState(100);
  const [currency, setCurrency] = useState('INR');
  const [receipt, setReceipt] = useState('receipt#1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: '',
    address: ''
  });
  const isFormValid = () => {
    return (
      formData.name !== '' &&
      formData.phone !== '' &&
      formData.pincode !== '' &&
      formData.address !== ''
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = async () => {
    const orderData = {
      amount,
      currency,
      receipt,
    };

    try {
      const order = await axios.post('/api/razorpay', orderData);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.data.amount,
        currency: order.data.currency,
        name: "Eazy Help",
        description: "Transaction",
        image: "https://res.cloudinary.com/dtyombve3/image/upload/v1718014519/bghejb2qjdoo7zievrql.png",
        order_id: order.data.id,
        handler: async (response) => {
          await saveAddress();
          setModalMessage('Payment successful Your RazorPay payment ID is ' + response.razorpay_payment_id +' please save this for future reference our executive will get in touch with you soon ');
          setModalVisible(true);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error creating order:', error);
      setModalMessage('Payment failed. Please try again.');
      setModalVisible(true);
    }
  };

  const saveAddress = async () => {
    try {
      const response = await axios.post('/api/address', formData);
      if (response.status === 201) {
        alert('Address saved successfully!');
      }
    } catch (error) {
      console.error('Error saving address:', error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    router.push('/'); // Redirect to the home page
  };

  return (
    <div className="flex mt-20 items-center justify-center">
      <div className="relative w-full md:w-2/3 mx-auto">
        <div className="container px-5">
          <div className="flex flex-col text-center mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Address</h1>
            {/* <p className="mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="md:flex md:flex-wrap md:-m-2">
      <div className="p-2 w-full md:w-1/2">
        <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full md:w-1/2">
        <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email(Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full md:w-1/2">
        <div className="relative">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            Mobile No
          </label>
          <input
            type="tel"
            id="phone"
            required
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full md:w-1/2">
        <div className="relative">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            required
            value={formData.pincode}
            onChange={handleInputChange}
            className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between items-center my-6">
        <button
          onClick={handlePayment}
          className={`inline-flex bg-black text-white border-0 py-1 px-6 focus:outline-none text-lg rounded-xl border-custom-orange ${!isFormValid() && 'opacity-50 cursor-not-allowed'}`}
          disabled={!isFormValid()}
        >
          Pay  ₹ 99
        </button>
      </div>
    </form>
          

          
        </div>
      </div>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => console.log('Razorpay script loaded')}
      />
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Payment Status</h2>
            <p>{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 inline-flex bg-black text-white border-0 py-2 px-4 focus:outline-none text-lg rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
