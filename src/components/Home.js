import React from "react";
import image from "../assets/josefin-WS5yjFjycNY-unsplash.jpg";

function Home() {
  return (
    <main className="items-center">
      <img
        src={image}
        alt="Monstera Leaves"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leadign-none lg:leading-snug lg:text-9xl ">
          Hey. I'm Matt
        </h1>
      </section>
    </main>
  );
}

export default Home;
