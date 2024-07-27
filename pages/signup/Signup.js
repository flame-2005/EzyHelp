import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for showing success popup

  const { name, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/signup', formData);
      console.log(res.data); // Handle success response (e.g., display a message, redirect, etc.)
      setShowSuccessPopup(true); // Show success popup on successful signup
    } catch (error) {
      console.error(error.response.data); // Handle error response (e.g., display error message)
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    router.push('/')
  };

  return (
    <div className="mt-14 py-10 w-full h-full bg-gradient-to-r from-black to-white overflow-hidden">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">Create Your Account</a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email/Phone no</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </div>
            {/* <div className="mt-4 hidden">
              <label className="block text-gray-700 text-sm font-bold mb-2">Phone No</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="phone"
                value={phone}
                onChange={onChange}
              />
            </div> */}
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-black dark:text-gray-300 shadow-lg mt-6 p-2 text-white hover:text-black font-bold rounded-lg w-full hover:scale-105 hover:bg-white transition duration-300 ease-in-out"
              >
                Signup
              </button>
            </div>
          </form>
          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <p className="text-xl font-semibold text-green-500 mb-4">Account Created Successfully!</p>
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition duration-300 ease-in-out"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-gray-300">
              Already have an account
              <Link  className="group text-blue-400 transition-all duration-100 ease-in-out" href="/login/Login">
                <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Login
                </span>
              </Link>
            </h3>
          </div>
          <div id="third-party-auth" className="flex items-center justify-center mt-5 flex-wrap">
            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
              <img className="max-w-[25px]" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
            </button>
            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
              <img className="max-w-[25px]" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="LinkedIn" />
            </button>
            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
              <img className="max-w-[25px] filter dark:invert" src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="GitHub" />
            </button>
            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
              <img className="max-w-[25px]" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/" alt="Facebook" />
            </button>
            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
              <img className="max-w-[25px] dark:gray-100" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" alt="Twitter" />
            </button>
            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
              <img className="max-w-[25px]" src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/" alt="Apple" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
