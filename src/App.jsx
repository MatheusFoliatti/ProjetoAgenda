import { useState } from "react"
import { api } from "./api/axios"

export default function App() {

  const [dataRequest, setDataRequest] = useState("")

  async function handleButton () {
    const resultAPI = await api.get('/')

    const user = resultAPI.data.results[0]

    const nameFull = `${user.name.first} ${user.name.last}`

    setDataRequest(nameFull)
  }

  return (
  <div className="bg-zinc-800 h-screen flex justify-center items-center">
    <div className="w-[451px] bg-gray-100 h-[451px] flex justify-center items-center rounded-3xl hover:bg-blue-600 space-y-5 flex-col">
      <h1 className="text-3xl font-bold underline hover:bg-red-500">
        Hello World!
      </h1>
      <button className="bg-slate-200 outline-1 rounded-md w-40" onClick={handleButton}> Request </button>
      <p> ------------------------</p>
      <p>{dataRequest}</p>

    </div>
  </div>
  )
}




