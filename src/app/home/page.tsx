"use client"

import { FC } from "react"
import { FaArrowDown } from "react-icons/fa6"
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"

const Home: FC = async () => {
  async function handleLogin() {
    await signIn()
    redirect("/dahboard")
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="mb-32 text-3xl md:text-5xl">
        Practicing some next-auth, prisma and mongodb for fun
      </h1>
      <span className="mb-5">
        <FaArrowDown color="#fff" />
      </span>
      <div className="flex items-center justify-center">
        <span className="mr-5 -rotate-90">
          <FaArrowDown color="#fff" />
        </span>
        <button
          className="border-2 border-white py-2 px-4 rounded font-bold hover:bg-white hover:text-black duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
        <span className="ml-5 rotate-90">
          <FaArrowDown color="#fff" />
        </span>
      </div>
      <div className="mt-5 rotate-180">
        <span>
          <FaArrowDown color="#fff" />
        </span>
      </div>
    </div>
  )
}

export default Home
