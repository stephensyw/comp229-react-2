/*
 * File name: pages/thank-you.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */


// Import necessary resources
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// Define Thank You page component
const ThankYouPage = () => {
  
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Use state variables to store the name, email, and message from local storage
  const [nameFromStorage, setNameFromStorage] = useState('');
  const [emailFromStorage, setEmailFromStorage] = useState('');
  const [messageFromStorage, setMessageFromStorage] = useState('');

  // Fetch the user data from local storage and update the state variables
  // note: these values were previously submitted by users in Contact Me page.
  useEffect(() => {

    // Get the name from local storage and update the state variable
    const nameFromStorage = localStorage.getItem('name');
    if (nameFromStorage) {
      setNameFromStorage(nameFromStorage);
    }

    // Get the email from local storage and update the state variable
    const emailFromStorage = localStorage.getItem('email');
    if (emailFromStorage) {
      setEmailFromStorage(emailFromStorage);
    }

    // Get the message from local storage and update the state variable
    const messageFromStorage = localStorage.getItem('message');
    if (messageFromStorage) {
      setMessageFromStorage(messageFromStorage);
    }
  }, []);

  // Set a timeout to redirect the user to the home page after 5 seconds
  useEffect(() => {
    
    // Redirect to the home page after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  
  // Render the Thank You page component
  return (
    <div class="thank-you-page">
      <h2>Thank You, {nameFromStorage}!</h2>
      <p>Your email is {emailFromStorage}.</p><br></br>
      <p>We have received your message and will get back to you soon.</p><br></br>
      <p>Message content:</p>
      <textarea value={messageFromStorage} readOnly />
      <p><i>Note: You will be redirected to homepage after 5 seconds ...</i></p>
    </div>
  );
};

// Export Thank You page component
export default ThankYouPage;
