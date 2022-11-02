import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Table from "./components/Table/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="grid-container">
        <main>
          <Routes>
            <Route path="/" element={<Table />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
