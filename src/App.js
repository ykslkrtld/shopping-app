import { CssBaseline } from "@mui/material"
import NavBar from "./components/NavBar"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"

function App() {


  return (
    
    <BrowserRouter>
      <CssBaseline/>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
