'use client'

import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";
const Home = () => {
  return (
    <div className="w-full bg-amber-100 ">
      <h1>Home</h1> 
      <button className="btn h-8 w-10 bg-red-300">
        <Link href='/users'>
        Users
        </Link>
      </button>
      <ProductCard />
    </div>
  )
};
  
export default Home;
