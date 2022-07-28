import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./components/MyHeader";
import HomePage from "./views/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MyHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
