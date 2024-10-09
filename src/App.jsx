import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={ <Home/>}></Route>
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
