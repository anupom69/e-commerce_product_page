"use client";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import { useState } from "react";
export default function Page() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Navbar count={count} setCount={setCount}/>
      <ProductShowcase count={count} setCount={setCount}/>
    </>
  );
}
