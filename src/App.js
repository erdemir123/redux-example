
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./conponents/Header";
import Card from "./pages/Card";
import Home from "./pages/Home";
import {store} from "./redux"



function App() {
  return (
    <>
    <Provider store={store}>
    <Header />
    <div className="h-12"></div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/card" element={<Card />}/>
    </Routes>
    </Provider >
    </>
  );
}

export default App;
