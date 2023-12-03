"use client"

import { FaArrowDown } from "react-icons/fa6"
import { Logout } from "./components/LogoutButton"
import { Information } from "./components/information"
import { useSession } from "next-auth/react"
import { Login } from "./components/LoginButton"

export default function Home() {
  const { status, data } = useSession()

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="mb-32 text-3xl md:text-5xl">
        Practicing some next-auth, prisma and mongodb for fun
      </h1>
      {status === "authenticated" && (
        <>
          <div className="flex items-center flex-col gap-5">
            <Information />
            <Logout />
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
            <Login />
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
