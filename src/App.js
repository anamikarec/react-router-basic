import "./styles.css";
import Navbar from "./Components/NavBar";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
