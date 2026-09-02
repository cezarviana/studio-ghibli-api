import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes"
import "./styles/globals.css"

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App;
