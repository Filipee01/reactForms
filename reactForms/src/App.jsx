import MyForm from './components/MyForm'

import './App.css'

function App() {


  return (
    <>
      <h2>Forms</h2>
      <MyForm user ={{name: "Carlos", email: "carlos@gmail.com"}}/>
    </>
  )
}

export default App
