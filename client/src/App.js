import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import MyNotes from "./pages/MyNotes/MyNotes";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} index />
          <Route path="/mynotes" element={<MyNotes />} index />
          <Route path="/login" element={<Login />} index />
          <Route path="/register" element={<Register />} index />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
