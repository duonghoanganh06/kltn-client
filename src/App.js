import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Table from "./components/Table/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormEdit from "./components/Form/FormEdit";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false)
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <div className="grid-container">
        <main>
          <Routes>
            <Route path="/" element={<Table user={user} />}></Route>
            <Route path="/login" element={<Login setUser={setUser} />}></Route>
            <Route path="/form" element={<Form user={user} />}></Route>
            <Route path="/formedit/:id" element={<FormEdit user={user} />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
