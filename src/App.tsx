// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Form from "./components/Form"
import Table from "./components/Table"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center">
      <Form/>
      <Table/>
    </div>
  )
}

export default App
