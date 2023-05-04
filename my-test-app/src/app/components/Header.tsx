import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <header>
        <div className="conatiner">
            <div className="logo">
               <Link href="/">Larning Next13</Link>
            </div>

            <div className="link">
                <Link href="/about">About</Link> 
                <Link href="/about/team">Team</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </div>
        <hr />
    </header>
    </>
  )
}

export default Header;