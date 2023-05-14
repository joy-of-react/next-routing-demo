'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function ContactPage() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    // ✂️ Send data to server

    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" required={true} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" />

      <button>Submit</button>
    </form>
  );
}

export default ContactPage;
