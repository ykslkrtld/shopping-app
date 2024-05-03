import { CssBaseline } from "@mui/material"
import NavBar from "./components/NavBar"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {


  return (
    <BrowserRouter>
    <Provider store={store}>
      <CssBaseline/>
      <NavBar/>
      <AppRouter/>
      </Provider>
    </BrowserRouter>
  )
}

export default App
