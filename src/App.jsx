import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <Header page={page} navigate={navigate} />

      {page === "home" && <Home navigate={navigate} />}
      {page === "services" && <Services navigate={navigate} />}
      {page === "contact" && <Contact />}

      <Footer navigate={navigate} />
    </div>
  );
}
