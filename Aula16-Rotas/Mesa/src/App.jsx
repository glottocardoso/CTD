import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App;