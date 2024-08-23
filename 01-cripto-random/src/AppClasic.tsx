import { useEffect, useState } from 'react'
import './App.css'

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function AppClasic() {

  
  const [number, setNumber] = useState(0)
  const [isLoading, setisLoading] = useState(true)

  const [refreshToken, setRefreshToken] = useState(0)

  useEffect(() => {
    setisLoading(true);
    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then(response => response.text())
      .then(data => {
        setNumber(data);
        setisLoading(false);
      })
  }, [refreshToken])
  

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <h1>{number}</h1>}
      <button
        disabled={isLoading}
        onClick={() => setRefreshToken(refreshToken + 1)}
      >New number</button>
    </>
  )
}

export default App
