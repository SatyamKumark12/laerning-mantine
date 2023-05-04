import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
    <h1 className='text-3xl'>Learning Next13</h1>
    <ul>
      <li>
        <Link href="/" className='ml-5'>Home</Link>
      </li>
      <li>
        <Link href="/about" className='ml-5'>About</Link>
      </li>
      <li>
        <Link href="/about/team" className='ml-5'>Team</Link>
      </li>
    </ul>
    </>
  )
}

export default HomePage;