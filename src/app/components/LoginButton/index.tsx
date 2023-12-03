"use client"

import { signIn } from "next-auth/react"

export function Login() {
  async function handleLogin() {
    await signIn()
  }

  return (
    <button
      className="border-2 border-white py-2 px-4 rounded font-bold hover:bg-white hover:text-black duration-300"
      onClick={handleLogin}
    >
      Login
    </button>
  )
}
