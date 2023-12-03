"use client"

import { signOut } from "next-auth/react"

export function Logout() {
  async function handleLogout() {
    await signOut()
  }

  return (
    <button
      className="border-2 border-white py-2 px-4 rounded font-bold hover:bg-white hover:text-black duration-300"
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}
