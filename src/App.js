
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { legacy_createStore } from "redux";
import Header from "./conponents/Header";
import Card from "./pages/Card";
import Home from "./pages/Home";
import reducer from "./redux";



function App() {
  const store = legacy_createStore(reducer)
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
