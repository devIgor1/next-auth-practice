"use client"

import { FaArrowDown } from "react-icons/fa6"
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"

export default function Home() {
  const { status, data } = useSession()

  async function handleLogin() {
    await signIn()
  }

  async function handleLogout() {
    await signOut()
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="mb-32 text-3xl md:text-5xl">
        Practicing some next-auth, prisma and mongodb for fun
      </h1>
      {status === "authenticated" && (
        <>
          <div className="flex items-center flex-col gap-5">
            <h1 className="text-4xl">Welcome, {data?.user?.name}</h1>
            <button
              className="border-2 border-white py-2 px-4 rounded font-bold hover:bg-white hover:text-black duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </>
      )}

      {status === "unauthenticated" && (
        <>
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
        </>
      )}
    </div>
  )
}
