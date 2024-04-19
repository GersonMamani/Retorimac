import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeSeguro } from "./components/HomeSeguro";
import { Planes } from "./components/Planes";
import { Resumen } from "./components/Resumen";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSeguro />} />
        <Route path="/Planes" element={<Planes />} />
        <Route path="/Resumen" element={<Resumen />} />
        {/* default route when there's an unknown route*/}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
