import { useSession } from "next-auth/react"

export function Information() {
  const { data } = useSession()

  return <h1 className="text-4xl">Welcome, {data?.user?.name}</h1>
}
