// import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RouteLayout from './components/RouteLayout'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RouteLayout />}>
    <Route index element={<Dashboard />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
  </Route>
  ))
  return (
    <>
      <Container fluid>
        <RouterProvider router={router} />
      </Container>
       
    </>
  )
}

export default App
