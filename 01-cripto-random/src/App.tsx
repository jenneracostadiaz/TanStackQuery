import './App.css'
import { useRandom } from './components/RandomNumber'

function App() {

  const {randomQuery} = useRandom();

  return (
    <>
      {randomQuery.isFetching ? <h1>Loading...</h1> : <h1>{randomQuery.data}</h1>}
      {/* <Randomnumber /> */}
      <div>{JSON.stringify(randomQuery.error)}</div>
      <button
        disabled={randomQuery.isLoading}
        onClick={() => randomQuery.refetch()}
      >New number</button>
    </>
  )
}

export default App
