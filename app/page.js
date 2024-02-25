"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/about");
        }}
      >
        new page
      </button>
    </div>
  );
};

export default Home;
