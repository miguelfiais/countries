import { BrowserRouter, Route, Routes } from "react-router-dom"
import Country from "../containers/Country"
import Home from "../containers/Home"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/country/:name" element={<Country />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router