import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route></Route>
  </Route>
  ))
  return (
    <>
      <div>
        <h2>Redux Toolkit</h2>
        <Product />
      </div>
       
    </>
  )
}

export default App
