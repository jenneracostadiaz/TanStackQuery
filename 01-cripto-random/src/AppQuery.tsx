import { useEffect, useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { Randomnumber } from './components/Randomnumber'

const getCryptoNumber = async ():Promise<number> => {

  throw 'No se pudo obtener el número'
  
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
                        .then(response => response.json())
  return Number(resp)
}

function App() {

  const {isLoading, isFetching, data:number,error, refetch} = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    refetchOnWindowFocus: false
  })
  

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1>{number}</h1>}
      {/* <Randomnumber /> */}
      <div>{JSON.stringify(error)}</div>
      <button
        disabled={isLoading}
        onClick={() => refetch()}
      >New number</button>
    </>
  )
}

export default App
