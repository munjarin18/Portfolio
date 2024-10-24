import About from "./components/About"
import Contact from "./components/Contact"
import Protfolio from "./components/Protfolio"
import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={ <Home/>}></Route>
    <Route path="/about" element={<About/>} ></Route>
    <Route path="/portfolio" element={<Protfolio/>} ></Route>
    <Route path="/contact" element={<Contact/>} ></Route>
  </Route>
))


function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
