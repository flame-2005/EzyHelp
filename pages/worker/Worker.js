import React, { useState } from 'react';

const Worker = () => {
  const [fullName, setFullName] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [workCategory, setWorkCategory] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      fullName,
      currentAddress,
      district,
      state,
      mobileNo,
      workCategory,
      email,
    };

    const JSONdata = JSON.stringify(formData);

    const endpoint = '/api/workerSignup';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert('Worker signed up successfully! our team will get in touch with you very soon');
        setFullName('');
        setCurrentAddress('');
        setDistrict('');
        setState('');
        setMobileNo('');
        setWorkCategory('');
        setEmail('');
      } else {
        setError(result.error || 'Failed to sign up worker');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while signing up.');
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto flex flex-wrap ">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mt-6">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Empower Your Career with Us
            </h1>
            <p className="leading-relaxed mt-4">
              Join our community and find the best job opportunities in your field. Whether you are an electrician, carpenter, or laborer, we have something for you.
            </p>
            <img
              className="w-full mt-6 rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1682141634446-434fc2e077a6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Career Opportunities"
            />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  required='true'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="current-address" className="leading-7 text-sm text-gray-600">Current Address</label>
                <input
                  type="text"
                  id="current-address"
                  name="currentAddress"
                  required='true'
                  value={currentAddress}
                  onChange={(e) => setCurrentAddress(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required='true'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  required='true'
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="mobile-no" className="leading-7 text-sm text-gray-600">Mobile No</label>
                <input
                  type="text"
                  id="mobile-no"
                  name="mobileNo"
                  required='true'
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="work-category" className="leading-7 text-sm text-gray-600">Work Category</label>
                <select
                  id="work-category"
                  name="workCategory"
                  required='true'
                  value={workCategory}
                  onChange={(e) => setWorkCategory(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="">Select Work Category</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Labour">Labour</option>
                  <option value="Electrician">4 wheeler mechanic </option>
                  <option value="Carpenter">2 wheeler mechanic</option>
                  <option value="Labour">Beautician </option>
                  <option value="Electrician">Black Smith </option>
                  <option value="Carpenter">Cable TV operation </option>
                  <option value="Labour">Glass ware manufacturing </option>
                  <option value="Electrician">Auto service&apos;s </option>
                  <option value="Carpenter">House ma&apos;s </option>
                  <option value="Labour">Laundry work</option>
                </select>
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Sign Up
              </button>
              {error && <p className="text-xs text-red-500 mt-3">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Worker;
