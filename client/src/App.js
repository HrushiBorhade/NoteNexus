import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import MyNotes from "./pages/MyNotes/MyNotes";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreateNote from "./pages/SingleNote/CreateNote";
import SingleNote from "./pages/SingleNote/SingleNote";
import Profile from "./pages/Profile/Profile";
function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearch={setSearch} />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} index />
          <Route path="/login" element={<Login />} index />
          <Route path="/register" element={<Register />} index />
          <Route path="/mynotes" element={<MyNotes search={search} />} index />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
