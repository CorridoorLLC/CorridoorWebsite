import React, { useState } from "react";
import { db } from "../../api/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const CustomerEmailBox: React.FC = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setEmail] = useState("");
  const[customerCompany, setCompany] = useState("");
  const [customerPhoneNum, setPhoneNum] = useState("");

  const handleCustomerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handlePhoneNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // // Check if the input text is empty
    // if (!customerEmail.trim()) {
    //   alert("Please enter an email address.");
    //   return;
    // }

    // // Validate email format using a regular expression
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(customerEmail)) {
    //   alert("Please enter a valid email address.");
    //   return;
    // }

    // Access the 'customerForm' collection in Firestore
    const custEmailsCollection = collection(db, "customerForm");

    // Check if the email already exists in the collection
    const q = query(custEmailsCollection, where("email", "==", customerEmail));
    const querySnapshot = await getDocs(q);

    // if (querySnapshot.empty) {
      // Email does not exist in the collection, so save the input value to Firestore
      await addDoc(custEmailsCollection, {
        name: customerName,
        email: customerEmail,
        company: customerCompany,
        phoneNumber: customerPhoneNum
      });
      // Display a success message
      alert("Congrats! You're on the waitlist!");
      // Clear the input field
      setCustomerName("");
      setEmail("");
      setCompany("");
      setPhoneNum("");
    // } else {
    //   // Display a message indicating that the email already exists
    //   alert("You're already on the waitlist!");
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <input
          type="text"
          value={customerName}
          onChange={handleCustomerName}
          placeholder="Point of Contact"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 text-black focus:ring-opacity-50"
        />
        <input
          type="text"
          value={customerEmail}
          onChange={handleEmail}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 text-black focus:ring-opacity-50"
        />
        <input
          type="text"
          value={customerCompany}
          onChange={handleCompany}
          placeholder="Company Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 text-black focus:ring-opacity-50"
        />
        <input
          type="text"
          value={customerPhoneNum}
          onChange={handlePhoneNum}
          placeholder="Phone Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 text-black focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="w-full duration-700 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-900 focus:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomerEmailBox;