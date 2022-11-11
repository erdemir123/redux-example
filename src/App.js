import { Route, Routes } from "react-router-dom";
import Header from "./conponents/Header";
import Card from "./pages/Card";
import Store from "./pages/Store";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Store />}/>
      <Route path="/card" element={<Card />}/>
    </Routes>
    </>
  );
}

export default App;
