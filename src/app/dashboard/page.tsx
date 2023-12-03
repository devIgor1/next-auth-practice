import { FC } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="min-h-screen w-full flex items-center flex-col justify-center text-4xl gap-5">
      <h1>Welcome, Igor Moraes</h1>
      <button className="border-2 border-white py-2 px-4 rounded font-bold hover:bg-white hover:text-black duration-300">
        Logout
      </button>
    </div>
  )
}

export default page
