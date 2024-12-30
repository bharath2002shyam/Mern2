

import './App.css'

function App() {


  return (
    <>
      <div>
        <form action="http://localhost:5173/login" method='post'>
          <input type='text' name='Name'></input>
          <input type='number' name='Number'></input>
          <input type='submit'></input>
        </form>
      </div>
    </>
  )
}

export default App
