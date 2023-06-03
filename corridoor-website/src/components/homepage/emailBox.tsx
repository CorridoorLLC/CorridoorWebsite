import React, { useState } from "react";
import { db } from "../../api/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const EmailBox: React.FC = () => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {

    //stops page from refreshing
    event.preventDefault();

    // Check if the input text is empty
    if (!text.trim()) {
      alert("Please enter an email address.");
      return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Access the 'emails' collection in Firestore
    const emailsCollection = collection(db, "emails");

    // Check if the email already exists in the collection
    const q = query(emailsCollection, where("email", "==", text));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Email does not exist in the collection, so save the input value to Firestore
      await addDoc(emailsCollection, { email: text });
      // Display a success message
      alert("Congrats! You're on the waitlist!");
      // Clear the input field
      setText("");
    } else {
      // Display a message indicating that the email already exists
      alert("You're already on the waitlist!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter Your Email Here..."
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

export default EmailBox;
