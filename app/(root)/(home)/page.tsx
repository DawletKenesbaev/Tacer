'use client'

import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/users'>
       Users
      </Link>
    </div>
  )
};

export default Home;
