import { useState } from "react"
import { api, server } from "./api/axios"

export default function App() {

  const [dataRequest, setDataRequest] = useState("")

  async function handleButton () {
    console.log('Função');



  const resultAPI = await api.get('/')

   const user = resultAPI.data.results[0]

   const nameFull = `${user.name.first} ${user.name.last}`

   const userEmail = user.email

   const resultSERVER = await server.post("user/", {
    name: nameFull,
    email: userEmail
  })
  
   setDataRequest(nameFull)

   console.log(resultSERVER)
   console.log(user)
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




