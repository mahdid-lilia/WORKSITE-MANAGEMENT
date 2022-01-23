import { Route, Routes, BrowserRouter } from "react-router-dom";
import Ouvrierlili from "./Pages/Ouvriers";
import Ouvriers from "./Pages/Ouvriers";
import Login from "./Pages/Login";
import './styles/App.css';
import Equipements from "./Pages/Equipements";
import Client from "./Pages/Client";
import Taches from "./Pages/Taches";
import Ouvrierli from "./Pages/Ouvrierlili";

import Ouvriers1 from "./PagesT/Ouvriers";
import Chantiers1 from "./PagesT/chantiers"
import MiniDrawer from "./Components/Drawer";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import FormOuv from "./Components/FormOuv";
import FormChant from "./Components/FormChant";

import SearchResults from "./PagesT/SearchResults";
import SearchResultsc from "./PagesT/SearchResultsc";
function App() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then(res => { return res.json() })
      .then(res => {

        if (res.indicator) { setFlag(true); }
        else setFlag(false)
      });
  });

  return (
    <div style={{marginTop : 40}} className='App'>
      <MiniDrawer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ouvrierlili />} />
          {!flag && <Route path="/Login" element={<Login />} />}
          {flag && <Route path="/Login" element={< Home/>} />}
          <Route path="/home" element={< Home/>} />
          <Route path="/ouvriers1/" element={< Ouvriers1/>} />
          <Route path="/Ouvrierli/" element={< Ouvrierli/>} />

          <Route path="/chantiers1/" element={<Chantiers1/>} />

          <Route path="/ouv" element={<Ouvriers />} />
          <Route path="/Equipement" element={<Equipements />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Taches" element={<Taches />} />
          <Route path="/InfoOuv/:idOuvrier" element={<FormOuv />} />
          <Route path="/InfoChant/:idChantier" element={<FormChant />} />

          

          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/searchresultsc" element={<SearchResultsc />} />



        </Routes>
      </BrowserRouter>
    </div >

  );
}

export default App;