import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ DrinksData, setData ] =useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

  // useEffect on mount
   useEffect( () =>{
      handleDataFetch();
   }, [])

    return {DrinksData, getData:handleDataFetch }
}
