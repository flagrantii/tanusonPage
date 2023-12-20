// src/components/ContactForm.tsx
"use client";
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_EMAIL_API_ENDPOINT' with your actual API endpoint
      await axios.post('http://localhost:5000/api/send-email', {
        email,
        message,
      });

      // Reset the form after successful submission
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-purple-500 text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-purple-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-purple-500 text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-purple-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
