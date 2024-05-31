/*
 * File name: pages/thank-you.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const [nameFromStorage, setNameFromStorage] = useState('');
  const [emailFromStorage, setEmailFromStorage] = useState('');
  const [messageFromStorage, setMessageFromStorage] = useState('');

  useEffect(() => {
    const nameFromStorage = localStorage.getItem('name');
    if (nameFromStorage) {
      setNameFromStorage(nameFromStorage);
    }
    const emailFromStorage = localStorage.getItem('email');
    if (emailFromStorage) {
      setEmailFromStorage(emailFromStorage);
    }
    const messageFromStorage = localStorage.getItem('message');
    if (messageFromStorage) {
      setMessageFromStorage(messageFromStorage);
    }
  }, []);


  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

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

export default ThankYouPage;