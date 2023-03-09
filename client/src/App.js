import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import MyNotes from "./pages/MyNotes/MyNotes";
function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} index />
          <Route path="/mynotes" element={<MyNotes />} index />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
